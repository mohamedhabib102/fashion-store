"use server";
import clientPromise from "@/lib/mongodb";
import { LoginResponse } from "@/types/login";
import bcrypt from "bcrypt";




export async function loginUser (email:string, password:string):Promise<LoginResponse>{
    const client = await clientPromise;
    const db = client.db("users");
    const colllection = db.collection("USER");


    const user =  await colllection.findOne({email});

    if (!user){
        return {
            success: false,
            message: "Email not found"
        }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid){
        return {
            success: false,
            message: "password is worng"
        }
    }

    return {
        success: true,
        user: {
          id:user._id.toString(),
          name: user.name,
          email: user.email,
          createdAt: user.createdAt.toString()
        }
      
    }
}