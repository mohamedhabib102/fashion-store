"use client";
import { useAuth } from "@/utils/contextapi";
import { User } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLoading, AiOutlineLogout, AiOutlineMail, AiOutlineUser, AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

const ProfilePage = () => {
    const { data: session, status } = useSession();
    const userGoogle = session?.user ? (session.user as User) : null;
    const { user, logout } = useAuth();
    const router = useRouter();

    const [cartCount, setCartCount] = useState(0);
    const [favoCount, setFavoCount] = useState(0);

    useEffect(() => {
        if (status === "loading") return;
        if (!session?.user && !user) {
            router.push("/auth/register");
        }
    }, [session, user, status, router]);

    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        const favoData = localStorage.getItem("Favo");

        if (cartData) {
            try {
                setCartCount(JSON.parse(cartData).length);
            } catch (e) {
                setCartCount(0);
            }
        }

        if (favoData) {
            try {
                setFavoCount(JSON.parse(favoData).length);
            } catch (e) {
                setFavoCount(0);
            }
        }
    }, []);

    if (status === "loading") {
        return (
            <div className="min-h-[60vh] flex flex-col justify-center items-center gap-4">
                <AiOutlineLoading size={50} className="animate-spin text-main-color" />
                <p className="text-gray-500 font-medium animate-pulse">Loading profile...</p>
            </div>
        );
    }

    const currentUser = userGoogle || user;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12" dir="ltr">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100"
            >
                {/* Header Banner */}
                <div className="h-40 bg-main-color/10 relative">
                    <div className="absolute inset-0 bg-linear-to-r from-main-color/40 to-transparent rounded-t-3xl" >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Logo />
                        </div>
                    </div>
                    <div className="absolute -bottom-14 left-8 p-1 bg-white rounded-full shadow-lg z-10">
                        <div className="relative w-28 h-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-4 border-white">
                            {userGoogle && currentUser?.image ? (
                                <Image
                                    src={currentUser.image}
                                    alt={currentUser.name || "User"}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-50">
                                    <AiOutlineUser size={48} className="text-gray-400" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="pt-20 pb-12 px-8 text-left">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-100">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-1">{currentUser?.name || "Member"}</h1>
                            <p className="text-gray-500 flex items-center justify-start gap-2 text-lg">
                                <AiOutlineMail className="text-main-color" />
                                {currentUser?.email}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => userGoogle ? signOut({ callbackUrl: "/" }) : logout()}
                                className="flex items-center gap-2 px-8 py-3.5 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all active:scale-95 border border-red-100 cursor-pointer shadow-sm"
                            >
                                <AiOutlineLogout size={22} />
                                Logout
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Cart Card */}
                        <div
                            onClick={() => router.push('/checkout')}
                            className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl hover:bg-white transition-all cursor-pointer group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-main-color transition-colors">
                                    <AiOutlineShopping size={32} className="text-main-color group-hover:text-white" />
                                </div>
                                <span className="text-4xl font-black text-gray-200 group-hover:text-main-color/20 transition-colors">
                                    {cartCount}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Shopping Cart</h3>
                            <p className="text-gray-500">You have {cartCount} items ready for checkout</p>
                        </div>

                        {/* Favorites Card */}
                        <div
                            onClick={() => router.push('/favo')}
                            className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl hover:bg-white transition-all cursor-pointer group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-red-500 transition-colors">
                                    <AiOutlineHeart size={32} className="text-red-500 group-hover:text-white" />
                                </div>
                                <span className="text-4xl font-black text-gray-200 group-hover:text-red-500/20 transition-colors">
                                    {favoCount}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Favorites</h3>
                            <p className="text-gray-500">You liked {favoCount} products</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProfilePage;
