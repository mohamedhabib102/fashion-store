"use client"
import axiosInstance from "@/api/axios";
import AccordionItem from "@/components/ui/Accordion";
import CustomContainer from "@/components/ui/CustomContainer";
import SearchProducts from "@/components/ui/SearchProducst";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/lib/db";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
    { id: 1, name: "all" },
    { id: 2, name: "men" },
    { id: 3, name: "women" },
    { id: 4, name: "kids" },
]
const sizes = [
    { id: 1, name: "XS" },
    { id: 2, name: "S" },
    { id: 3, name: "M" },
    { id: 4, name: "L" },
    { id: 5, name: "XL" },
    { id: 6, name: "XXL" },
]

const tags = [
    "NEW", "BEST SELLERS", "SHIRTS", "T-SHIRTS", "POLO SHIRTS", "JEANS", "SHORTS", "JACKETS", "SUITS", "COATS"
]

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [showInStock, setShowInStock] = useState<boolean>(false)
    const [showOutOfStock, setShowOutOfStock] = useState<boolean>(false)
    const [category, setCategory] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<number>(12000);
    const [minPrice, setMinPrice] = useState<number>(0);
    const cat = category ? category : "all";
    const getProducts = async () => {
        try {
            const res = await axiosInstance.get(`/api/products?category=${cat}`);
            const data = await res.data;
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [category])

    const colors = Array.from(new Set(products.map((p) => p.colors).flat()))

    const filterBySize = (size: string) => {
        setSelectedSize(prev => prev === size ? null : size)
    }




    const filterProducts = products.filter((p) => {
        const matchesSize = selectedSize ?
            p.sizes.includes(selectedSize) : true

        let availability = true

        if (showInStock && !showOutOfStock) {
            availability = p.stock > 0
        } else if (!showInStock && showOutOfStock) {
            availability = p.stock === 0
        }
        const matchesCategory = cat === "all" || p.category === cat
        const matchesColor = color ? p.colors.includes(color) : true
        const matchesPrice = p.price >= minPrice && p.price <= maxPrice

        return matchesSize && availability && matchesCategory && matchesColor && matchesPrice
    })
    return (
        <section className="py-12 bg-[#FAF9F6]">
            <CustomContainer>
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar Filters */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-[280px] shrink-0"
                    >
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Filters</h2>

                                <span
                                    onClick={() => {
                                        setSelectedSize(null)
                                        setShowInStock(false)
                                        setShowOutOfStock(false)
                                        setCategory("all")
                                        setColor("")
                                        setMinPrice(0)
                                        setMaxPrice(12000)
                                    }}
                                    className="block text-sm font-bold uppercase mb-4 tracking-wider cursor-pointer">Reset Filters</span>

                                <div className="space-y-6">
                                    {/* Size Filter */}
                                    <div className="pb-6 border-b border-gray-100">
                                        <h3 className="text-sm font-bold uppercase mb-4 tracking-wider">Size</h3>
                                        <div className="grid grid-cols-5 gap-2">
                                            {sizes.map((s) => (
                                                <button
                                                    key={s.id}
                                                    onClick={() => filterBySize(s.name)}
                                                    className={`cursor-pointer aspect-square border flex items-center justify-center text-[12px] font-semibold transition-colors ${selectedSize === s.name
                                                        ? 'bg-black text-white border-black'
                                                        : 'border-gray-200 hover:bg-black hover:text-white'
                                                        }`}
                                                >
                                                    {s.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Availability */}
                                    <AccordionItem title="Availability">
                                        <div className="space-y-3 pt-2">
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={showInStock}
                                                    onChange={() => setShowInStock(!showInStock)}
                                                    className="w-4 h-4 border-gray-300 rounded-sm focus:ring-0 checked:bg-black cursor-pointer"
                                                />
                                                <span className="text-[14px] text-gray-600 group-hover:text-black">In Stock <span className="text-gray-400 ml-1">({products.filter(p => p.stock > 0).length})</span></span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={showOutOfStock}
                                                    onChange={() => setShowOutOfStock(!showOutOfStock)}
                                                    className="w-4 h-4 border-gray-300 rounded-sm focus:ring-0 checked:bg-black cursor-pointer"
                                                />
                                                <span className="text-[14px] text-gray-600 group-hover:text-black">Out of Stock <span className="text-gray-400 ml-1">({products.filter(p => p.stock === 0).length})</span></span>
                                            </label>
                                        </div>
                                    </AccordionItem>

                                    {/* Category */}
                                    <AccordionItem title="Category">
                                        <div className="space-y-2 pt-2">
                                            {categories.map((c) => (
                                                <label key={c.id}
                                                    onClick={() => setCategory(c.name)}
                                                    className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={category === c.name}
                                                        onChange={() => setCategory(c.name)}
                                                        className="w-4 h-4 border-gray-300 rounded-sm focus:ring-0 checked:bg-black" />
                                                    <span className="text-[14px] text-gray-600 group-hover:text-black uppercase">{c.name}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </AccordionItem>

                                    {/* Colors */}
                                    <AccordionItem title="Colors">
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {colors.map((c, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setColor(c)}
                                                    className="w-8 h-8 rounded-full border border-gray-100 ring-offset-2 hover:ring-1 ring-gray-300 transition-all"
                                                    style={{ backgroundColor: c.toLowerCase() }}
                                                    title={c}
                                                />
                                            ))}
                                        </div>
                                    </AccordionItem>

                                    {/* Price Range */}
                                    <AccordionItem title="Price Range">
                                        <div className="pt-4 px-1">
                                            <input
                                                type="range"
                                                name="maxPrice"
                                                min={0}
                                                max={12000}
                                                value={minPrice}
                                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                                            />
                                            <div className="flex justify-between mt-2 text-xs text-secondary font-medium">
                                                <span>{minPrice}</span>
                                                <span>{maxPrice}</span>
                                            </div>
                                        </div>
                                    </AccordionItem>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        {/* Header Section */}
                        <div className="mb-10">
                            <nav className="text-[12px] font-medium text-gray-400 uppercase mb-4 tracking-widest">
                                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                                <span className="mx-2">/</span>
                                <span className="text-black">Products</span>
                            </nav>

                            <h1 className="text-5xl font-black uppercase mb-8 tracking-tighter">Products</h1>

                            <div className="space-y-6">
                                <SearchProducts found={false} size="lg" />

                                {/* Tag Filters */}
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <button
                                            key={tag}
                                            className="px-4 py-2 border border-gray-100 text-[10px] font-bold tracking-widest hover:bg-black hover:text-white hover:border-black transition-all bg-white"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12"
                        >
                            <AnimatePresence mode="popLayout">
                                {filterProducts.length > 0 ? (
                                    filterProducts.map((product) => (
                                        <motion.div
                                            layout
                                            key={product.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ProductCard product={product} />
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="col-span-full py-20 text-center text-gray-400 font-medium">
                                        Loading amazing products...
                                    </div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                </div>
            </CustomContainer>
        </section>
    );
};

export default Products;
