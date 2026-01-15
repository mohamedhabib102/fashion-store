"use client"
import Image from "next/image";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { actionFormRegister } from "@/utils/acttionFormRegister";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "next-auth";
import { useAuth } from "@/utils/contextapi";



import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";



const RegisterApp: React.FC = () => {
    const [eye, setEye] = useState<boolean>(false);
    const [message, setMesaage] = useState("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const { data: session, status } = useSession()
    const userGoogle = session?.user ? (session.user as User) : null;
    const { user } = useAuth();




    const handleRegister = async (formData: FormData) => {
        setMesaage("")
        setIsLoading(true)
        const password = formData.get("password");

        if (typeof password !== "string") {
            setMesaage("Password is required");
            setIsLoading(false)
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            setMesaage(
                "Password must be at least 8 characters, include a number and a capital letter"
            );
            setIsLoading(false)
            return;
        }

        const res = await actionFormRegister(formData)
        if (!res.success) {
            setMesaage(res.message)
            setIsLoading(false)
            return;
        }
        router.push("/auth/login")
        setIsLoading(false)
    }


    const hadnleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        await handleRegister(formData)
    }


    useEffect(() => {
        if (status === "loading") return;
        if (userGoogle || user) {
            router.push("/")
        }
    }, [session, user])

    return (
        <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={hadnleSubmit}
            className="lg:w-150 w-full max-w-md bg-white shadow-xl mx-auto py-10 px-8 rounded-2xl border border-gray-100"
        >
            <h2 className="text-3xl font-bold mb-8
                    text-center text-gray-800 tracking-tight">Create Account</h2>
            <fieldset className="relative mb-6 last:mb-0">
                <input
                    type="text"
                    name="name"
                    id="nameUser"
                    placeholder=" "
                    className="block bg-gray-50 border border-gray-200 p-4 rounded-xl text-sm outline-none
                        w-full placeholder:opacity-0 focus:placeholder:opacity-100 focus:border-main-color focus:bg-white transition-all duration-200
                        peer"
                    required
                />
                <label
                    htmlFor="nameUser"
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-transparent px-1 text-gray-500 text-sm
                        uppercase font-medium transition-all duration-300 
                        pointer-events-none
                        peer-focus:-top-2
                        peer-focus:left-3
                        peer-focus:bg-white 
                        peer-focus:text-main-color
                        peer-focus:text-xs
                        peer-[:not(:placeholder-shown)]:-top-2
                        peer-[:not(:placeholder-shown)]:left-3
                        peer-[:not(:placeholder-shown)]:bg-white
                        peer-[:not(:placeholder-shown)]:translate-y-0
                        peer-[:not(:placeholder-shown)]:text-main-color
                        peer-[:not(:placeholder-shown)]:text-xs"
                >Full Name</label>
            </fieldset>
            <fieldset className="relative mb-6 last:mb-0">
                <input
                    type="email"
                    name="email"
                    id="emailUser"
                    placeholder=" "
                    className="block bg-gray-50 border border-gray-200 p-4 rounded-xl text-sm outline-none
                        w-full placeholder:opacity-0 focus:placeholder:opacity-100 focus:border-main-color focus:bg-white transition-all duration-200
                        peer"
                    required
                />
                <label
                    htmlFor="emailUser"
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-transparent px-1 text-gray-500 text-sm
                        uppercase font-medium transition-all duration-300 
                        pointer-events-none
                        peer-focus:-top-2
                        peer-focus:left-3
                        peer-focus:bg-white 
                        peer-focus:text-main-color
                        peer-focus:text-xs
                        peer-[:not(:placeholder-shown)]:-top-2
                        peer-[:not(:placeholder-shown)]:left-3
                        peer-[:not(:placeholder-shown)]:bg-white
                        peer-[:not(:placeholder-shown)]:translate-y-0
                        peer-[:not(:placeholder-shown)]:text-main-color
                        peer-[:not(:placeholder-shown)]:text-xs"
                >Email Address</label>
            </fieldset>
            <fieldset className="relative mb-6 last:mb-0">
                <input
                    type={eye ? "text" : "password"}
                    name="password"
                    id="passwordUser"
                    placeholder=" "
                    className="block bg-gray-50 border border-gray-200 p-4 rounded-xl text-sm outline-none
                        w-full placeholder:opacity-0 focus:placeholder:opacity-100 focus:border-main-color focus:bg-white transition-all duration-200
                        peer"
                    required
                />
                <label
                    htmlFor="passwordUser"
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-transparent px-1 text-gray-500 text-sm
                        uppercase font-medium transition-all duration-300 
                        pointer-events-none
                        peer-focus:-top-2
                        peer-focus:left-3
                        peer-focus:bg-white 
                        peer-focus:text-main-color
                        peer-focus:text-xs
                        peer-[:not(:placeholder-shown)]:-top-2
                        peer-[:not(:placeholder-shown)]:left-3
                        peer-[:not(:placeholder-shown)]:bg-white
                        peer-[:not(:placeholder-shown)]:translate-y-0
                        peer-[:not(:placeholder-shown)]:text-main-color
                        peer-[:not(:placeholder-shown)]:text-xs"
                >Password</label>
                <button
                    type="button"
                    onClick={() => setEye(!eye)}
                    className={
                        `absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 p-1.5 rounded-lg
                        transition-all duration-300 cursor-pointer hover:text-main-color`
                    }
                >
                    {eye ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                </button>
            </fieldset>
            {message && (
                <p className="p-3 bg-red-50 border border-red-100 mb-6 rounded-xl text-red-600 text-sm font-medium animate-pulse">{message}</p>
            )}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-main-color text-white p-4 rounded-xl font-semibold
                    transition-all duration-300 hover:bg-main-hover hover:shadow-lg active:scale-[0.98] cursor-pointer
                    flex items-center gap-2 justify-center mb-6 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100">
                {isLoading ? (
                    <AiOutlineLoading className="animate-spin text-2xl" />
                ) : (
                    <>
                        <Image
                            src="/logo.png"
                            title="logo site"
                            alt=""
                            width={24}
                            height={24}
                            className="brightness-0 invert"
                        />
                        <span>Sign Up</span>
                    </>
                )}
            </button>

            <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500 uppercase font-bold tracking-wider text-[10px]">Or continue with</span>
                </div>
            </div>

            <button
                type="button"
                className="w-full bg-white border border-gray-200 text-gray-700 p-4 rounded-xl font-medium
                    transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 cursor-pointer
                    flex items-center gap-3 justify-center mb-6"
                onClick={() => signIn("google")}
            >
                <FaGoogle size={20} className="text-[#DB4437]" />
                <span>Google</span>
            </button>

            <p className="text-center text-gray-600 text-sm">
                لديك حساب بالفعل؟{" "}
                <Link href="/auth/login" className="text-main-color font-bold hover:underline">
                    تسجيل الدخول
                </Link>
            </p>
        </motion.form>
    )
}; export default RegisterApp
