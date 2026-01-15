"use server";

import { loginUser } from "@/actions/loginUser";
import { LoginResponse } from "@/types/login";


export async function actionFormLogin(formData:FormData):Promise<LoginResponse>{
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string"){
        return {
            success: false,
            message: "All fields are required"
        }
    }


    return await loginUser(email, password)
}