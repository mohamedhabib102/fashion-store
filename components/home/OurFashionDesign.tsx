import Image from "next/image"
import CustomContainer from "../ui/CustomContainer"
import Slider from "../ui/Slider";


const images:string[] = [
    "/images/home.jpeg",
    "/images/home1.png",
    "/images/home2.png",
    "/images/home3.png",
]


const OurFashionDesign:React.FC = () => {
    return (
        <section className="py-8">
            <CustomContainer>
                <div className="lg:mb-20 mb-12">
                    <h5 className="text-center lg:text-5xl text-4xl leading-10 uppercase tracking-tighter text-[#1a1a1a]
                    relative mb-2">Our Approach to Fashion Design</h5>
                    <p className="text-center text-sm text-[#555] font-medium mb-12">Discover our innovative approach to fashion design, where creativity meets functionality.</p>
                </div>
                <div className="lg:flex hidden items-center justify-center lg:gap-10 md:gap-8 gap-4">
                    {images.map((image,index)=>(
                        <div key={index}
                        className="group"
                        >
                            <Image
                                src={image}
                                width={500}
                                height={500}
                                alt="home"
                                className={`
                                    ${index === 0 ? "lg:-translate-y-12" : ""}
                                    ${index === 2 ? "lg:-translate-y-12" : ""}
                                    h-[400px] w-full mx-auto object-contain transition-transform duration-500 group-hover:scale-105
                                    `}
                            />
                        </div>
                    ))}
                </div>
                <div className="lg:hidden block">
                <Slider
                products={images}
                nextEl="nextEl"
                prevEl="prevEl"
                size={2}
                />
                </div>
            </CustomContainer>
        </section>
    )
};export default OurFashionDesign
