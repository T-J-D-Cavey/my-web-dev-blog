import validator from "validator";
import { connectToDB } from "@/server/helpers/data-base-utils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res
      .status(400)
      .json({ message: "Expected a POST requested but didn't get one..." });
    return;
  }

  const data = req.body;
  if (!validator.isEmail(data.email)) {
    res.status(422).json({ message: "Invalid email format." });
  }
  const sanitizedData = validator.escape(data.email);
  const emailObject = { email: sanitizedData };
  // I NEED TO SET UP ENVIRONMENT VARIABLES AND SECRETS AND REPLACE SOME OF THE CODE IN THIS FILE WITH KEYS
  // WHICH I WILL ASSIGN THE VALUES OF WHEN DEPLOYING. E.G MY DATABASE USERNAME, PASSWORD, DB NAME
  //  escape(input)

  const client = await connectToDB(
    `mongodb+srv://blog_admin_1:blog_admin_1@tjdcaveydb.fabaugr.mongodb.net/blog_dev?retryWrites=true&w=majority`
  );

  const db = client.db();

  let result;
  try {
    result = await db.collection("newsletter-emails").insertOne(emailObject);
  } catch (error) {
    client.close();
    res
      .status(500)
      .json({ message: "There was an issue storing your email in database." });
    return;
  }

  client.close();

  res.status(201).json({
    message: "Email address recieved.",
  });

  return;
}
