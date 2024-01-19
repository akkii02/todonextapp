import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://akshaysable097:oJ6cxgSayX54WHzY@cluster0.roilqpl.mongodb.net/todos?retryWrites=true&w=majority"
    );

    const db= client.db();

    const todocollection = db.collection('todos');

    const result = await todocollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'todos inserted!'})
  }
}

export default handler