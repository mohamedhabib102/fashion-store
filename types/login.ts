export type LoginResponse =
  | { success: true; user: { id: string; name: string; email: string; createdAt: string } }
  | { success: false; message: string };
