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

  const connectionString = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER_NAME}.fabaugr.mongodb.net/${process.env.MONGO_DB_DATABASE_NAME}?retryWrites=true&w=majority`;

  const client = await connectToDB(connectionString);

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
