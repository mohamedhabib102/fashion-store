"use client"
import { IconType } from "react-icons";
import { MdOutlineHomeMax } from "react-icons/md";
import { FaMosque, FaHandHoldingHeart, FaUser } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa";
import { MdNewspaper } from "react-icons/md";









interface OverlayMessage {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Navbar {
    id: number;
    title: string;
    link: string;
    icon: IconType;
}

const NavbarText: Navbar[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        icon: MdOutlineHomeMax
    },
    {
        id: 2,
        title: "Products",
        link: "/products",
        icon: FaProductHunt
    },
    {
        id: 3,
        title: "Collections",
        link: "/collections",
        icon: AiFillProduct
    },
    {
        id: 4,
        title: "New",
        link: "/new",
        icon: MdNewspaper
    },
    {
        id: 5,
        title: "Contact",
        link: "/contact",
        icon: BsFillChatSquareTextFill
    }
]


const OverlayHelp: React.FC<OverlayMessage> = ({ toggle, setToggle }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setToggle(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return (
        <>
            <div className={`${toggle ? "opacity-100 visible" : "opacity-0 invisible"} fixed top-0 left-0 inset-0 z-40 bg-black/40 backdrop-blur-sm`}></div>
            <div ref={ref} className={`${toggle ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-0"}
        transition-all duration-300 fixed top-1/2 left-1/2 -translate-1/2 z-50 lg:w-96 w-10/12 m-auto bg-gray-100 dark:bg-gray-800 py-6 px-4 rounded-lg`}>
                <button onClick={() => setToggle(false)} className="cursor-pointer transition duration-200 hover:text-main-color dark:text-gray-200 absolute top-2 right-2">
                    <MdClose size={30} />
                </button>
                <ul className="text-right flex justify-end flex-col gap-3 mt-7">
                    {NavbarText.map((nav) => (
                        <li key={nav.id} className="">
                            <Link href={nav.link}
                                className="flex items-center gap-2 justify-start flex-row
                    p-2 bg-main-color rounded-lg hover:bg-main-hover text-white cursor-pointer"
                                onClick={() => setToggle(!toggle)}
                            >
                                <nav.icon size={20} />
                                <span>{nav.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default OverlayHelp;