"use client"
import { Product } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={`/products/${product.id}`}
            className="group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative aspect-3/4 overflow-hidden bg-[#F3F3F3] mb-3">
                <Image
                    src={isHovered && product.image.length > 1 ? product.image[1] : product.image[0]}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Optional: Add a 'Quick Add' or 'Heart' icon here if needed */}
            </div>

            <div className="space-y-1">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-[12px] text-gray-500 uppercase font-medium">{product.type}</p>
                        <h3 className="text-sm font-semibold text-gray-900 truncate max-w-[150px]">
                            {product.title}
                        </h3>
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                        $ {product.price}
                    </div>
                </div>

                <div className="flex items-center gap-1.5 mt-2">
                    {product.colors.slice(0, 3).map((color, index) => (
                        <div
                            key={index}
                            className="w-3 h-3 border border-gray-200"
                            style={{ backgroundColor: color.toLowerCase() }}
                            title={color}
                        />
                    ))}
                    {product.colors.length > 3 && (
                        <span className="text-[10px] text-gray-500 font-medium">
                            +{product.colors.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
