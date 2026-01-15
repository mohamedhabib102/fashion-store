"use client"
import Image from "next/image";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {  actionFormRegister } from "@/utils/acttionFormRegister";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/contextapi";
import { loginUser } from "@/actions/loginUser";
import { actionFormLogin } from "@/utils/actionFormLogin";
import { User } from "next-auth";



const Login:React.FC = () => {
    const [eye, setEye] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("")
    const router =  useRouter()
    const {login, user} = useAuth()
    const { data: session , status} = useSession()
    const userGoogle = session?.user ? (session.user as User) : null;

  


    

    const handleSubmit = async(formData:FormData) => {
      const password = formData.get("password")
      setMessage("")
      
      if (typeof password !== "string") {
          setMessage("Password is required");
          return;
        }
       
       const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
       if (!passwordRegex.test(password)){
          setMessage(
             "Password must be at least 8 characters, include a number and a capital letter"
          ); 
          return;
       }

        const res = await actionFormLogin(formData)
        if (!res.success){
            setMessage(res.message)
            return;
        }
        
        login(res?.user)
        router.push("/")
    } 



        useEffect(() => {
           if (status === "loading") return;
           if (userGoogle || user){
               router.push("/")
           }
        }, [session, user])


 
    return (
        <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            action={handleSubmit}
            className="lg:w-150 w-82.5 bg-gray-200 mx-auto py-6 px-4 rounded-lg"
            >
                    <h2 className="text-2xl font-semibold mb-6
                    text-center uppercase">Welcome backe!</h2>
                    <fieldset className="relative mb-8 last:mb-0">
                        <input
                            type="email"
                            name="email"
                            id="emailUser"
                            placeholder=" "
                            className="block bg-white p-3.5 rounded text-sm outline-none
                        w-full placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:transition placeholder:duration-200
                        peer"
                        required
                        />
                        <label
                        htmlFor="emailUser"
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-1.5 text-xs
                        uppercase font-medium transition-all duration-300 
                        pointer-events-none rounded
                        peer-focus:-top-2.5
                        peer-focus:left-1.5
                        peer-focus:bg-white 
                        peer-focus:text-xs
                        peer-focus:p-1.5
                        peer-[:not(:placeholder-shown)]:-top-2.5
                        peer-[:not(:placeholder-shown)]:left-1.5
                        peer-[:not(:placeholder-shown)]:translate-y-0
                        peer-[:not(:placeholder-shown)]:text-main-color
                        peer-[:not(:placeholder-shown)]:text-[10px]"
                        >Email</label>
                    </fieldset>
                    <fieldset className="relative mb-8 last:mb-0">
                        <input
                            type={eye ? "text" : "password"}
                            name="password"
                            id="passwordUser"
                            placeholder=" "
                            className="block bg-white p-3.5 rounded text-sm outline-none
                        w-full placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:transition placeholder:duration-200
                        peer"
                        required
                        />
                        <label
                        htmlFor="passwordUser"
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-1.5 text-xs
                        uppercase font-medium transition-all duration-300 
                        pointer-events-none rounded
                        peer-focus:-top-2.5
                        peer-focus:left-1.5
                        peer-focus:bg-white 
                        peer-focus:text-xs
                        peer-focus:p-1.5
                        peer-[:not(:placeholder-shown)]:-top-2.5
                        peer-[:not(:placeholder-shown)]:left-1.5
                        peer-[:not(:placeholder-shown)]:translate-y-0
                        peer-[:not(:placeholder-shown)]:text-main-color
                        peer-[:not(:placeholder-shown)]:text-[10px]"
                        >Password</label>
                        <button
                        type="button"
                        onClick={() => setEye(!eye)}
                        className={
                            `absolute top-1/2 right-2 -translate-y-1/2 bg-white text-white p-1.5 rounded
                        transition-all duration-300 r cursor-pointer 
                        peer-[:not(:placeholder-shown)]:bg-main-color
                        `
                        }
                        >
                            {eye ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </fieldset>
                     {message && (
                        <p className="p-2 bg-main-color mb-3 rounded text-white text-sm">{message}</p>
                    )}
                    <button
                    type="submit" 
                    className="w-full bg-main-color text-white p-3.5 rounded
                    transition-all duration-300 hover:bg-main-hover cursor-pointer
                    flex items-center gap-2 justify-center mb-4">
                        <Image
                        src="/logo.png"
                        title="logo site"
                        alt=""
                        width={24}
                        height={24}
                        />
                        <span>Join with Us</span>
                    </button>
                    <button
                    type="button" 
                    className="w-full bg-main-color text-white p-3.5 rounded
                    transition-all duration-300 hover:bg-main-hover cursor-pointer
                    flex items-center gap-2 justify-center mb-4"
                    onClick={() => signIn("google")}
                    > 
                        <FaGoogle size={20}/>
                        <span>Join With Google</span>
                    </button>
            </motion.form>
    )
};export default Login
