import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const {id} = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://akshaysable097:oJ6cxgSayX54WHzY@cluster0.roilqpl.mongodb.net/todos?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todocollection = db.collection("todos");

    const filter = { _id: new ObjectId(id) }; // Convert id to ObjectId

    const result = await todocollection.deleteOne(filter);

    client.close();

    res.status(200).json({ message: "Document deleted successfully" , result});
  }
}
export default handler;