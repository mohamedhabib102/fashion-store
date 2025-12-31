"use client"
import axiosInstance from "@/api/axios";
import { Product } from "@/lib/db";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";



const SearchProducts: React.FC<{ found: boolean, size?: string }> = ({ found, size }) => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    const getProducts = async () => {
        try {
            const req = await axiosInstance.get("api/products")
            setProducts(req.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="w-full">
            <div className={`relative mt-2 ${size === "lg" ? "w-full max-w-lg" : "w-68"}`}>
                <LuSearch
                    size={20}
                    className="text-gray-400 absolute top-1/2 left-4 -translate-y-1/2"
                />
                <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="bg-[#e8e7e7] py-3.5 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 placeholder:font-normal
                               w-full outline-none border-none focus:ring-1 focus:ring-gray-300 transition-all"
                />
                {search && (
                    <ul className="absolute top-full left-0 w-full bg-white rounded-b-md
                         z-20 max-h-72 overflow-y-auto shadow-2xl border border-gray-100 mt-1">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <li key={product.id}>
                                    <Link href={`/product/${product.id}`} className="text-gray-700 capitalize
                                       font-medium py-3 px-5 block border-b border-gray-50 transition hover:text-black
                                       hover:bg-gray-50">{product.title}</Link>
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-500 text-center py-4">No products found</li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}; export default SearchProducts
