"use server";

import { redirect } from "next/navigation";

export const actionFormLogin = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }

  // DB / Auth logic
  // await createUser(...)

  redirect("/");
};
