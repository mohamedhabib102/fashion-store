"use client";
import Image from "next/image";
import { useState } from "react";

interface ImagesDetailsProductProps {
    images: string[];
}


const ImagesDetailsProduct:React.FC<ImagesDetailsProductProps> = ({images}) => {
    const [currentImage, setCurrentImage] = useState<number>(0);

    const  handelImageSource = (index: number) => {
        setCurrentImage(index);
    }
    return (
    <div className="flex items-center lg:flex-row flex-col gap-6">
        <div className="border border-[#E5E5E5] bg-gray-100">
         <Image
         src={images[currentImage]}
         alt=""
         title=""
         width={384}
         height={384}
         className="w-96 h-96 object-contain"
         />
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
            className="w-14 h-14 object-contain"/>
            </div>
        )}
        </div>
    </div>
    )
};export default ImagesDetailsProduct