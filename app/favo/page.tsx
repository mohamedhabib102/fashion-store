"use client";
import React, { useEffect, useState } from "react";
import CustomContainer from "@/components/ui/CustomContainer";
import { Product } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { handelFavo } from "@/actions/api";

const FavoritesPage = () => {
    const [favoItems, setFavoItems] = useState<Product[]>([]);

    useEffect(() => {
        const savedFavo = localStorage.getItem("Favo");
        if (savedFavo) {
            setFavoItems(JSON.parse(savedFavo));
        }
    }, []);

    const refreshFavo = () => {
        const savedFavo = localStorage.getItem("Favo");
        if (savedFavo) setFavoItems(JSON.parse(savedFavo));
    };

    return (
        <section className="py-12 bg-[#FAF9F6] min-h-screen">
            <CustomContainer>
                <div className="lg:w-[90%] w-auto mx-auto font-sans">
                    <div className="flex justify-between items-center mb-10 border-b border-[#E5E5E5] pb-6">
                        <h1 className="text-3xl font-semibold uppercase tracking-tight">Your Favorites</h1>
                        <p className="text-gray-500 uppercase text-sm tracking-widest">{favoItems.length} Items</p>
                    </div>

                    {favoItems.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {favoItems.map((item, index) => (
                                <div key={index} className="bg-white border border-[#E5E5E5] relative group transition-all duration-300 hover:shadow-sm">
                                    {/* Delete Button */}
                                    <button
                                        onClick={() => {
                                            handelFavo(item, "remove");
                                            refreshFavo();
                                        }}
                                        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm border border-[#E5E5E5] rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer"
                                        title="Remove from favorites"
                                    >
                                        <IoCloseOutline size={20} />
                                    </button>

                                    <Link href={`/products/${item.id}`} className="block">
                                        <div className="aspect-square bg-gray-100 overflow-hidden border-b border-[#E5E5E5]">
                                            <Image
                                                src={item.image[0]}
                                                alt={item.title}
                                                width={400}
                                                height={400}
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-semibold uppercase tracking-tight truncate flex-1">{item.title}</h3>
                                                <span className="text-sm font-bold ml-4">${item.price}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{item.type}</p>

                                            <button className="w-full py-3 bg-transparent border border-black text-black text-sm uppercase font-bold tracking-widest hover:bg-black hover:text-white transition-colors cursor-pointer">
                                                View Product
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-white border border-[#E5E5E5]">
                            <p className="text-gray-500 uppercase tracking-widest mb-6">Your favorites list is empty</p>
                            <Link
                                href="/products"
                                className="inline-block px-10 py-4 bg-black text-white uppercase font-bold tracking-widest hover:bg-[#333] transition-colors"
                            >
                                Shop Products
                            </Link>
                        </div>
                    )}
                </div>
            </CustomContainer>
        </section>
    );
};

export default FavoritesPage;
