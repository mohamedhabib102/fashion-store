import { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

export const  authOptions:AuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    }, 
    jwt: {},
    callbacks: {},
    secret: process.env.NEXTAUTH_SECRET,
}

