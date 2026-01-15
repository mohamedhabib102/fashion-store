"use server";

import { createUser } from "@/actions/createUser";

type RegisterResponse =
  | { success: true; user: {
        id: string;
        name: string;
        email: string;
        createdAt: string;
    }}
  | { success: false; message: string };

export const actionFormRegister = async (
  formData: FormData
): Promise<RegisterResponse> => {

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return {
      success: false,
      message: "All fields are required"
    };
  }

  try {
    const user = await createUser(name, email, password);

    return {
      success: true,
      user
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      success: false,
      message: "Something went wrong"
    };
  }
};
