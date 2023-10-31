import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if(req.method !== "POST") {
        res.status(400).json({message: "Expected a POST requested but didn't get one..."})
    }
    
    // try {
    //     const client = await MongoClient.connect();

    //     if(!client) {
    //         throw new Error('Could not connect to database')
    //     }
    // } catch (error) {
    //     res.status(501).json({message: error})
    // }

    res.status(200).json({message: 'This works'})
}