"use server";


import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt"

export async function createUser(
    name:string, 
    email:string, 
    password:string
) {
    const client = await clientPromise;
    const db = client.db("users");
    const collection = db.collection("USER");

    const hashedPassword =  await bcrypt.hash(password, 10);

    const createdAt = new Date().toLocaleString();
    const user = {
        name,
        email,
        password: hashedPassword,
        createdAt
    };

    const result = await collection.insertOne(user);
    
    return {
        id: result.insertedId.toString(),
        name,
        email,
        createdAt
    }
}