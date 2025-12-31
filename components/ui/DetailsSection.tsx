"use client";
import { handelCart, handelFavo } from "@/api/api";
import { Product } from "@/lib/db";
import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
 import { ToastContainer, toast } from 'react-toastify';

interface DetailsSectionProps {
    product: Product;
}


const DetailsSection: React.FC<DetailsSectionProps> = ({product}) => {
    const [selectedColor, setSelectedColor] = useState<number>(0);
    const [selectedSize, setSelectedSize] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const handelAddToCart = async(product:Product, action: "add" | "remove") => {
        setLoading(true);
        setTimeout(() => {
            handelCart(product, action);
            setLoading(false);
        }, 1000)
    }
    return (
           <div className="border border-[#E5E5E5] p-8 pb-4 lg:w-[340px] w-auto relative">
                   <div 
                   onClick={() => handelFavo(product, "add")}
                   className="cursor-pointer absolute top-0 right-0 bg-white p-3">
                     <IoIosHeartEmpty
                     size={25}
                     className="-rotate-45"
                     />
                   </div>
                   <div className="mb-8">
                      <h2 className="text-lg uppercase font-semibold mb-1">{product.title}</h2>
                      <p className="text-sm font-semibold">${product.price}</p>
                      <p className="text-gray-500 mt-1 mb-8">{product.type}</p>
                      <p className="text-lg font-semibold">{product.description}</p>
                   </div>

                   <div className="mb-4">
                    <span className="block text-lg text-gray-500 mb-1">Color</span>
                    {product.colors.map((color, index) => 
                    <button 
                    key={index}
                    className={`
                        w-8 h-8 mx-1 cursor-pointer border
                        ${selectedColor === index ? "border border-black" : "border-[#E5E5E5]"}
                        `}
                    style={{backgroundColor: color}}
                    onClick={() => setSelectedColor(index)}
                    ></button>
                    )}
                   </div>
                   <div className="mb-4">
                    <span className="block text-lg text-gray-500 mb-1">Size</span>
                    {product.sizes.map((size, index) => 
                    <button 
                    key={index}
                    className={`w-9 h-9 mx-1 cursor-pointer border 
                    ${selectedSize === index ? "border border-black" : "border-[#E5E5E5]"}
                    `}
                    onClick={() => setSelectedSize(index)}
                    >{size}</button>)}
                   </div>
                   <p className="text-sm text-gray-500 uppercase">Find Your Size | Measurement Guide</p>
                   <button 
                   onClick={() => handelAddToCart(product, "add")}
                   disabled={loading}
                   className="cursor-pointer mt-2 w-full bg-gray-300 text-black py-2 uppercase font-semibold">
                    {loading ? "Adding to cart..." : "Add"}
                    </button>
                </div>
    )
}; export default DetailsSection