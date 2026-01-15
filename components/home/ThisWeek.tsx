"use client"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import CustomContainer from "../ui/CustomContainer";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { FaPlus } from "react-icons/fa6";
import { Product } from "@/lib/db";
import axiosInstance from "@/utils/axios";
import { handelCart } from "@/actions/api";
import Link from "next/link";
import { motion } from "framer-motion";




const ThisWeek: React.FC = () => {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [products, setProducts] = useState<Product[]>([]);

    const getAllProducts = async () => {
        const req = await axiosInstance.get("/api/products")
        const data = await req.data;
        setProducts(data);
    }
    useEffect(() => {
        getAllProducts();
    }, [])


    if (products.length === 0) {
        return <section className="py-8">
            <p>No products found</p>
        </section>
    }


    return (
        <section className="py-8">
            <CustomContainer>
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex lg:flex-row flex-col justify-between lg:items-end items-start lg:mb-8 mb-6 gap-3"
                    >
                        <h2 className="lg:text-7xl text-5xl font-bold uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]
                        relative">
                            <span className="block">New</span> This Week
                            <span className="text-blue-900 absolute text-[30px] top-8 lg:-right-11 -right-14">{`( ${products.length} )`}</span>
                        </h2>
                        <div className="flex gap-2">
                            <button
                                onClick={() => swiper?.slidePrev()}
                                className="border border-[#d4d4d4] bg-transparent p-3 text-[#1a1a1a] hover:bg-black hover:text-white transition-all cursor-pointer disabled:opacity-30"
                            >
                                <HiChevronLeft className="text-xl" />
                            </button>
                            <button
                                onClick={() => swiper?.slideNext()}
                                className="border border-[#d4d4d4] bg-transparent p-3 text-[#1a1a1a] hover:bg-black hover:text-white transition-all cursor-pointer disabled:opacity-30"
                            >
                                <HiChevronRight className="text-xl" />
                            </button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Swiper
                            onSwiper={(s) => setSwiper(s)}
                            modules={[Navigation]}
                            spaceBetween={20}
                            observeParents={true}
                            observer={true}
                            breakpoints={{
                                640: { slidesPerView: 2, spaceBetween: 15 },
                                1024: { slidesPerView: 3, spaceBetween: 20 },
                                1280: { slidesPerView: 4, spaceBetween: 20 },
                            }}
                            className='w-full mb-8'
                        >
                            {products.map((p) => (
                                <SwiperSlide key={p.id}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="group relative"
                                    >
                                        <Link
                                            href={`/products/${p.id}`}
                                            className="block relative lg:aspect-4/5 aspect-6/4 w-full overflow-hidden mb-3 bg-emerald-600/10">
                                            <Image
                                                src={p.image[0]}
                                                fill
                                                title={p.title}
                                                alt={p.title}
                                                className='p-4 mx-auto object-contain transition-transform duration-500 group-hover:scale-105'
                                            />
                                        </Link>
                                        <FaPlus
                                            onClick={() => handelCart(p, "add")}
                                            size={35}
                                            className="cursor-pointer absolute bottom-10 left-1/2 -translate-x-1/2 text-white bg-main-color rounded-full p-2
                                            transition duration-300 scale-95 hover:scale-105 z-20"
                                        />
                                        <div className="text-left flex justify-between items-end">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">{p.type}</p>
                                                <h4 className="text-sm font-bold uppercase tracking-tight text-[#1a1a1a] mb-1">{p.title}</h4>
                                            </div>
                                            <p className="text-sm font-semibold text-main-color">${p.price}</p>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </CustomContainer>
        </section>
    )
};

export default ThisWeek;
