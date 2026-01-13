"use client";
import { User } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import { LocaleRouteNormalizer } from "next/dist/server/normalizers/locale-route-normalizer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";



interface UserSite {
    name: string;
    email: string;
}


const ProfilePage = () => {
    const { data: session , status} = useSession()
    console.log(session)
    const user = session?.user ? (session.user as User) : null;


    return (
        <>
       {status === "loading"  ? 
       <div
       className="h-60 mx-auto text-center flex justify-center items-center"
       >
        <AiOutlineLoading 
            size={40}
            className="animate-spin"
            />
       </div> : (
           <div className="flex flex-col items-center justify-center
        py-12 px-4 bg-gray-200 rounded-lg">
            <h1 className="text-2xl font-semibold mb-6 text-center uppercase">Profile Page</h1>
            <h2 className="text-2xl font-semibold mb-6 text-center uppercase">{user?.name || ""}</h2>
            <p className="text-center">{user?.email ||""}</p>
            {user?.image && (
                <Image
                    src={user?.image||"/logo.png"}
                    alt={user?.name || "User profile picture"}
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full mx-auto"
                />
            )}

            <button
                type="button"
                className="w-80 bg-main-color text-white p-3.5 rounded
            transition-all duration-300 hover:bg-main-hover cursor-pointer
            flex items-center gap-2 justify-center mt-4"
                onClick={() => {
                    
                    signOut({ callbackUrl: "/" }) 
                }}
            >Sign Out</button>
        </div>
       )}
        </>
    )
}; export default ProfilePage 
