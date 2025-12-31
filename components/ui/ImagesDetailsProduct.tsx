"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImagesDetailsProductProps {
    images: string[];
}


const ImagesDetailsProduct: React.FC<ImagesDetailsProductProps> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState<number>(0);

    const handelImageSource = (index: number) => {
        setCurrentImage(index);
    }
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center lg:flex-row flex-col gap-6"
        >
            <div className="border border-[#E5E5E5] bg-gray-100 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Image
                            src={images[currentImage]}
                            alt=""
                            title=""
                            width={384}
                            height={384}
                            className="w-96 h-96 object-contain"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div
                className="flex lg:flex-col flex-row  items-center gap-2.5">
                {images.map((image, index) =>
                    <div
                        onClick={() => handelImageSource(index)}
                        className={`
            ${currentImage === index ? "border-[#a3a0a0]" : "border-[#E5E5E5] opacity-70"}
            border bg-gray-100 cursor-pointer
            `}
                        key={index}>
                        <Image
                            key={index}
                            src={image}
                            alt=""
                            title=""
                            width={56}
                            height={56}
                            className="w-14 h-14 object-contain" />
                    </div>
                )}
            </div>
        </motion.div>
    )
}; export default ImagesDetailsProduct
