"use client";
import { useEffect, useState } from "react";
import CustomContainer from "../ui/CustomContainer";
import { Product } from "@/lib/db";
import axiosInstance from "@/api/axios";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { handelCart } from "@/api/api";
import Link from "next/link";


const Collections: React.FC = () => {
    const year = new Date().getFullYear();
    const [category, setCategory] = useState<string>("");
    const [allCategories, setAllCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [showAll, setShowAll] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);
    const cat = category ? category : "all";
    const getProducts = async () => {
        setLoading(true);
        const res = await axiosInstance.get(`api/products/category/${cat}`);
        const data = await res.data;
        setProducts(data);
        setLoading(false);
    }

    const getCategories = async () => {
        const res = await axiosInstance.get("/api/products?type=categories");
        const data = await res.data;
        setAllCategories(data);
    }
    useEffect(() => {
        getProducts();
        getCategories()
    }, [category])
    const visibleProducts = showAll ? products : products.slice(4, 8)


    if (products.length === 0) {
        return <section className="py-8">
            <p>No products found</p>
        </section>
    }

    return (
        <section className="py-8">
            <CustomContainer>
                <div className="text-center">
                    <h4 className="text-left lg:text-7xl text-5xl font-bold uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]
                    relative">
                        <span className="block">XIV</span>
                        Collections <span className="block">24-{year.toString().split("20")[1]}</span>
                    </h4>
                    <ul className="flex items-center gap-2 mt-6
                    pb-2 border-b border-gray-300">
                        <li onClick={() => setCategory("all")}
                            className={
                                `
                            ${category === "all" || category === "" ? "text-[#262626] font-semibold" : "text-[#262626a4] font-medium"}
                            cursor-pointer text-lg uppercase transition duration-200 hover:text-[#2d2929]`
                            }
                        >{`(ALL)`}</li>
                        {allCategories.map((cat) => (
                            <li key={cat}
                                onClick={() => setCategory(cat)}
                                className={
                                    `
                                ${category === cat ? "text-[#262626] font-semibold" : "text-[#262626a4] font-medium"}
                                cursor-pointer text-lg uppercase transition duration-200 hover:text-[#2d2929]`
                                }
                            >{`(${cat})`}</li>
                        ))}
                    </ul>
                    <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-6 gap-4">
                        {visibleProducts.map((p) => (
                            <div
                                key={p.id}
                            >
                                <div className="group relative">
                                    <Link
                                        href={`/products/${p.id}`}
                                        className="block relative lg:aspect-4/5 aspect-2/2 w-full z-30 overflow-hidden mb-3 bg-[#e5e4e4]">
                                        <Image
                                            src={p.image[0]}
                                            width={500}
                                            height={500}
                                            title={p.title}
                                            alt={p.title}
                                            className='lg:h-[400px] h-full p-4 mx-auto object-contain transition-transform duration-500 group-hover:scale-105'
                                        />
                                    </Link>
                                    <FaPlus
                                        onClick={() => handelCart(p, "add")}
                                        size={35}
                                        className="cursor-pointer absolute bottom-10 left-1/2 -translate-x-1/2 text-white bg-main-color rounded-full p-2
                                         transition duration-300 scale-95 hover:scale-105 z-40"
                                    />
                                    <div className="text-left flex justify-between items-end">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">{p.type}</p>
                                            <h4 className="text-sm font-bold uppercase tracking-tight text-[#1a1a1a] mb-1">{p.title}</h4>
                                        </div>
                                        <p className="text-sm font-semibold text-main-color">${p.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="cursor-pointer mt-6 text-[#262626a4] text-center">
                        <span>{showAll ? "Less" : "More"}</span>
                        <IoIosArrowDown
                            size={20}
                            className={
                                `transition duration-300 mx-auto ${showAll ? "rotate-180" : "rotate-0"}`
                            } />
                    </button>
                </div>
            </CustomContainer>
        </section>
    )
}; export default Collections;
