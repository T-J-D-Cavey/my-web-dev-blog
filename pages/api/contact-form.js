import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    // NEED TO DO MORE INPUT VALIDATION. CONSIDER USING A THIRD PARTY LIBRARY: NEEDS RESEARCHING
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    // I NEED TO WHITELIST THE SERVER IP ADDRESS WHEN THIS IS DEPLOYED (OR "ALLOW ACCESS FROM ANYWHERE")

    // I NEED TO SET UP ENVIRONMENT VARIABLES AND SECRETS AND REPLACE SOME OF THE CODE IN THIS FILE WITH KEYS
    // WHICH I WILL ASSIGN THE VALUES OF WHEN DEPLOYING. E.G MY DATABASE USERNAME, PASSWORD, DB NAME 
    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://blog_admin_1:blog_admin_1@tjdcaveydb.fabaugr.mongodb.net/blog_dev?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }
    const db = client.db();
    let result;
    try {
      result = await db.collection("blog-messages").insertOne(newMessage);
    } catch(error) {
      client.close();
      res.status(500).json({ message: "Could not store your details in our database." });
      return
    }

    client.close();

    res.status(201).json({
      message:
        "Your message and details have been received. I'll get back to you shortly.",
    });

    return;
  } else {
    res.status(200).json({
      message:
        "An error with your request. Your details and message have not been stored. Please try again.",
    });
    return;
  }
}
