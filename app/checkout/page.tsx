"use client";
import React, { FormEvent, useEffect, useState } from "react";
import CustomContainer from "@/components/ui/CustomContainer";
import { Product } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { handelCart, removeAllCart } from "@/api/api";

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    const handleTotal = () => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        return total;
    }
    const refreshCart = () => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) setCartItems(JSON.parse(savedCart));
    };


    const handleRemoveAllCart = (e:FormEvent) => {
        e.preventDefault();
        removeAllCart();
    }

    return (
        <section className="py-12 bg-[#FAF9F6] min-h-screen">
            <CustomContainer>
                <div className="lg:w-[90%] w-auto mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">

                    {/* Left: Checkout Form */}
                    <div className="flex-1 w-full bg-white border border-[#E5E5E5] p-8">
                        <h2 className="text-2xl font-semibold uppercase mb-8 border-b border-[#E5E5E5] pb-4">
                            Shipping Details
                        </h2>

                        <form 
                        onSubmit={handleRemoveAllCart}
                        className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-600 uppercase">First Name</label>
                                    <input
                                        type="text"
                                        className="border border-[#E5E5E5] p-3 outline-none focus:border-gray-400 transition-colors"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-600 uppercase">Last Name</label>
                                    <input
                                        type="text"
                                        className="border border-[#E5E5E5] p-3 outline-none focus:border-gray-400 transition-colors"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-600 uppercase">Email Address</label>
                                <input
                                    type="email"
                                    className="border border-[#E5E5E5] p-3 outline-none focus:border-gray-400 transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-600 uppercase">Phone Number</label>
                                <input
                                    type="tel"
                                    className="border border-[#E5E5E5] p-3 outline-none focus:border-gray-400 transition-colors"
                                    placeholder="+1 234 567 890"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-600 uppercase">Address</label>
                                <textarea
                                    rows={3}
                                    className="border border-[#E5E5E5] p-3 outline-none focus:border-gray-400 transition-colors resize-none"
                                    placeholder="Apartment, Street, City..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="cursor-pointer w-full bg-black text-white py-4 px-8 uppercase font-bold tracking-widest hover:bg-[#333] transition-colors mt-4"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>

                    {/* Right: Order Summary */}
                    <div className="lg:w-[400px] w-full bg-white border border-[#E5E5E5] p-8">
                        <h2 className="text-xl font-semibold uppercase mb-6 border-b border-[#E5E5E5] pb-4">
                            Your Order
                        </h2>

                        <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 no-scrollbar">
                            {cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <div key={index} className="select-none flex gap-4 items-center border-b border-[#F0F0F0] pb-4 last:border-0">
                                        <div className="w-20 h-20 bg-gray-100 border border-[#E5E5E5] shrink-0">
                                            <Image
                                                src={item.image[0]}
                                                alt={item.title}
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-semibold uppercase truncate">{item.title}</h3>
                                            <p className="text-xs text-gray-500 mt-0.5">{item.type}</p>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-sm font-medium">${item.price}</span>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    handelCart(item, "remove");
                                                    refreshCart();
                                                }}
                                                className="text-xs text-gray-500 mt-0.5 cursor-pointer underline"
                                            >
                                                remove from cart
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
                            )}
                        </div>

                        {/* Totals Section (to be implemented by user) */}
                        <div className="mt-8 pt-6 border-t border-[#E5E5E5] space-y-3">
                            <div className="flex justify-between text-sm uppercase text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-semibold text-black">${handleTotal()}</span>
                            </div>
                            <div className="flex justify-between text-sm uppercase text-gray-600">
                                <span>Shipping</span>
                                <span className="font-semibold text-black">
                                    {
                                    handleTotal() > 0 ? "10" : "0"
                                    }
                                    </span>
                            </div>
                            <div className="flex justify-between text-lg font-bold uppercase border-t border-black pt-4 mt-2">
                                <span>Total</span>
                                <span>${handleTotal() > 0 ? handleTotal() + 10 : handleTotal()}</span>
                            </div>
                            <Link 
                            href="/products"
                            className="w-full bg-black text-white p-4 uppercase font-bold tracking-widest hover:bg-[#333] transition-colors mt-4
                            block text-center mx-auto">
                                Shopping Other Products
                            </Link>
                        </div>
                    </div>

                </div>
            </CustomContainer>
        </section>
    );
};

export default CheckoutPage;
