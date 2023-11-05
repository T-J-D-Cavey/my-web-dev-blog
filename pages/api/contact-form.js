import validator from "validator";
import { connectToDB } from "../../server/helpers/data-base-utils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res
      .status(400)
      .json({ message: "Expected a POST requested but didn't get one..." });
    return;
  }

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

  const connectionString = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER_NAME}.fabaugr.mongodb.net/${process.env.MONGO_DB_DATABASE_NAME}?retryWrites=true&w=majority`;

  const client = await connectToDB(connectionString);
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
    message: "Your message and details have been received.",
  });

  return;
}
