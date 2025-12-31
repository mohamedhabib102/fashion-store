"use client"
import { Product } from "@/lib/db";
import Slider from "./Slider";
import { HiOutlineArrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import axiosInstance from "@/api/axios";
import Link from "next/link";



const NewCollection: React.FC = () => {
    const year = new Date().getFullYear();
    const [products, setProducts] = useState<Product[]>([]);

    const getAllProducts = async() => {
        const req = await axiosInstance.get("api/products");
        const data = req.data;
        setProducts(data);
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    if (products.length === 0){
        return <section className="py-8">
            <p>No products found</p>
        </section>
    }

    const productCount = products.slice(6, 12);

    return (
        <section className="py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

                {/* Left Side: Content and controls */}
                <div className="w-full lg:w-[40%] flex flex-col justify-between self-stretch py-4">
                    <div>
                        <h1 className="lg:text-7xl text-5xl font-bold uppercase leading-[0.9] tracking-tighter text-[#1a1a1a] mb-6">
                            New <br /> Collection
                        </h1>
                        <div className="text-lg text-[#555] font-medium mb-12">
                            <p>Summer</p>
                            <p>{year}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                        <Link href="/products" className="bg-[#d4d4d4] hover:bg-[#c0c0c0] text-[#1a1a1a] px-8 py-4 flex items-center justify-between min-w-[200px] transition-all duration-300">
                            <span className="font-semibold text-sm uppercase tracking-wider">Go To Shop</span>
                            <HiOutlineArrowRight className="text-xl" />
                        </Link>

                        <div className="flex gap-2">
                            <button id="slider-prev" className="nav-prev border border-[#d4d4d4] bg-transparent p-3 text-[#1a1a1a] hover:bg-white transition-all cursor-pointer disabled:opacity-30">
                                <HiChevronLeft className="text-xl" />
                            </button>
                            <button id="slider-next" className="nav-next border border-[#d4d4d4] bg-transparent p-3 text-[#1a1a1a] hover:bg-white transition-all cursor-pointer disabled:opacity-30">
                                <HiChevronRight className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Slider */}
                <div className="w-full lg:w-[60%]">
                    <Slider
                        products={productCount}
                        nextEl="slider-next"
                        prevEl="slider-prev"
                    />
                </div>

            </div>
        </section>
    );
};

export default NewCollection;

