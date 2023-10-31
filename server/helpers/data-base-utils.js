import { MongoClient } from "mongodb";

export async function connectToDB(path) {
    let client;
    try {
      client = new MongoClient(path);
      await client.connect();
      return client;
    } catch (error) {
      console.log(error);
      process.exit();
    }
  }