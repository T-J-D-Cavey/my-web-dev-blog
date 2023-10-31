import validator from "validator";
import { connectToDB } from "../../server/helpers/data-base-utils";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !validator.isEmail(email) ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }


    const sanitizedData = {
      email: validator.escape(email),
      name: validator.escape(name),
      message: validator.escape(message),
    };

    // I NEED TO SET UP ENVIRONMENT VARIABLES AND SECRETS AND REPLACE SOME OF THE CODE IN THIS FILE WITH KEYS
    // WHICH I WILL ASSIGN THE VALUES OF WHEN DEPLOYING. E.G MY DATABASE USERNAME, PASSWORD, DB NAME

    const client = await connectToDB(
      `mongodb+srv://blog_admin_1:blog_admin_1@tjdcaveydb.fabaugr.mongodb.net/blog_dev?retryWrites=true&w=majority`
    );
    if (!client) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }
    const db = client.db();
    let result;
    try {
      result = await db.collection("blog-messages").insertOne(sanitizedData);
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ message: "Could not store your details in our database." });
      return;
    }

    client.close();

    res.status(201).json({
      message:
        "Your message and details have been received.",
    });

    return;
  } else {
    res.status(200).json({
      message:
        "An error with your request. Please try again.",
    });
    return;
  }
}
