"use client"
import React, { useState } from "react";
import { createContext, useContext } from "react";
import Cookie from "js-cookie";

type User = {
    id: string;
    name: string;
    email: string;
    image?: string;
    createdAt: string;
    // token?:string
}

type authContextType = {
    user: User | null;
    login: (user: User) => void;
    logout: (url?: string) => void
}


const Context = createContext<authContextType>({
    user: null,
    login: () => { },
    logout: () => { }
})


export function AuthProvider({ children }: { children: React.ReactNode }) {

    const getDataUser = (): User | null => {
        const user = Cookie.get("user")
        if (!user) return null;
        try {
            return JSON.parse(user)
        } catch (error) {
            console.error("Error parsing user cookie:", error);
            return null;
        }
    }
    const [user, setUser] = useState<User | null>(getDataUser())


    const login = (user: User) => {
        setUser(user);
        Cookie.set("user", JSON.stringify(user), {
            expires: 30,
            sameSite: "Lax",
            secure: false,
        })
    }

    const logout = (url?: string) => {
        setUser(null);
        Cookie.remove("user");
        if (url) window.location.href = url;
    }


    const values = {
        user,
        login,
        logout
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}


export const ContextProviderWapper = ({ children }: { children: React.ReactNode }) => {
    return <AuthProvider>
        {children}
    </AuthProvider>
}

export const useAuth = () => {
    return useContext(Context)
}
