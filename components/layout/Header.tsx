"use client"
import { useEffect, useState } from "react"
import CustomContainer from "../ui/CustomContainer"
import ToggleNavbar from "../ui/ToggleNavbar"
import Link from "next/link";
import Logo from "../ui/Logo";
import { IoIosHeartEmpty } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import OverlayHelp from "../ui/OverlayHelp";
import { CiLogin } from "react-icons/ci";
import { useSession } from "next-auth/react";
import { User } from "next-auth";
import { useAuth } from "@/utils/contextapi";
import { RiProfileFill } from "react-icons/ri";




interface UserSite {
    name: string;
    email: string;
}




const Header: React.FC = () => {
    const [toggle, setToggle] = useState(false)
    const [cart, setCart] = useState(0)
    const { data: session } = useSession()
    const userGoogle = session?.user ? (session.user as User) : null;
    const {user} = useAuth()
 const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

    useEffect(() => {
        const updateCart = () => {
            const cartData = localStorage.getItem("cart");
            if (cartData) {
                setCart(JSON.parse(cartData).length);
            } else {
                setCart(0);
            }
        };

        updateCart();

        window.addEventListener("cartUpdate", updateCart);
        return () => window.removeEventListener("cartUpdate", updateCart);
    }, []);

    return (
        <>
            <OverlayHelp toggle={toggle} setToggle={setToggle} />
            <header className="md:py-5 py-3">
                <CustomContainer>
                    <nav className="flex items-center justify-between">
                        <div className="flex gap-8">
                            <ToggleNavbar toggle={toggle} setToggle={setToggle} />
                            <ul className="gap-8 md:flex hidden">
                                <li>
                                    <Link href="/"
                                        className="text-main-color text-sm font-semibold"
                                    >Home</Link>
                                </li>
                                <li>
                                    <Link href="/collections"
                                        className="text-main-color text-sm font-semibold"
                                    >Collections</Link>
                                </li>
                                <li>
                                    <Link href="/new"
                                        className="text-main-color text-sm font-semibold"
                                    >New</Link>
                                </li>
                                <li>
                                    <Link href="/contact"
                                        className="text-main-color text-sm font-semibold"
                                    >Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <Logo />
                        <div className="flex items-center md:gap-8 gap-2.5">
                            <Link
                                href="/favo"
                                className="cursor-pointer text-white bg-main-color hover:bg-main-hover p-3 rounded-full
                    md:flex hidden transition-colors duration-200">
                                <IoIosHeartEmpty
                                    size={20}
                                    className="text-white -rotate-45"
                                />
                            </Link>
                            <Link
                                href="/checkout"
                                className="text-main-color cursor-pointer flex items-center group relative">
                                <span className="bg-main-color group-hover:bg-main-hover py-3 px-6 rounded-[20px] text-white md:flex hidden transition-colors duration-200">Cart</span>
                                <span className="-ml-1 text-main-color  border-4 border-[#333] p-2 rounded-full group-hover:border-main-hover transition-colors duration-200">
                                    <CgShoppingBag size={20} />
                                </span>
                                <span className="absolute -top-1.5 -right-2 font-semibold bg-[#333] text-white rounded-full w-6 h-6 flex items-center justify-center
                                text-sm group-hover:bg-main-hover">{cart}</span>
                            </Link>
                            {mounted && (userGoogle || user?.id) && (
                                <Link href="/profile">
                                    <button className="cursor-pointer text-white bg-main-color hover:bg-main-hover p-3 rounded-full transition-colors duration-200">
                                        <RiProfileFill size={20} />
                                    </button>
                                </Link>
                            ) }
                            
                         
                            {mounted && (!userGoogle && !user?.id) && (
                                <Link href="/auth/register">
                                    <button className="cursor-pointer text-white bg-main-color hover:bg-main-hover p-3 rounded-full transition-colors duration-200">
                                        <FiUser size={20} />
                                    </button>
                                </Link>
                            )}
                           

                        </div>

                    </nav>
                </CustomContainer>
            </header>
        </>
    )
}; export default Header
