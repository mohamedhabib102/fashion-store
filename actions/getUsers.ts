import clientPromise from "@/lib/mongodb";

export async function getUsers() {
  try {
    const client = await clientPromise;
    console.log("Connected to MongoDB"); // ✅ للتأكد من الاتصال

    const db = client.db("users");
    const collection = db.collection("USER");

    const count = await collection.countDocuments();
    console.log("Total users in collection:", count);

    const users = await collection.find({}).toArray();
    console.log("Users array:", users);

    return users
  } catch (error) {
    console.error("MongoDB error:", error);
    return [];
  }
}
