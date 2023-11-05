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

// I COULD REFACTOR THE VALIDATION CODE INTO HELPER FUNCTIONS HERE AND EXPORT THEM TO EACH API PAGE