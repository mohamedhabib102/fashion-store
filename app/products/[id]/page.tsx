import axiosInstance from "@/api/axios";
import CustomContainer from "@/components/ui/CustomContainer";
import DetailsSection from "@/components/ui/DetailsSection";
import ImagesDetailsProduct from "@/components/ui/ImagesDetailsProduct";
import { Product } from "@/lib/db";
import Image from "next/image";
import { getProductDyId } from "@/api/api";

interface Props {
    params: Promise<{ id: string }>
}


const getProductById = async (id: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/products/${id}`, {
        cache: 'no-store' // لضمان جلب بيانات فريش دائماً
    });

    if (!res.ok) return null;

    const data = await res.json();
    console.log("Product from API:", data);
    return data;
}


const ProductDetails: React.FC<Props> = async ({ params }) => {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
        return (
            <div className="py-20 text-center text-2xl font-bold">
                Product Not Found (404)
            </div>
        )
    }




    return (
        <section className="py-12 bg-[#FAF9F6]">
            <CustomContainer>
                <div className="lg:w-[80%] w-auto mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
                    {/* Image Section */}
                    <ImagesDetailsProduct images={product.image} />

                    {/* Details Section */}
                    <DetailsSection product={product} />
                </div>
            </CustomContainer>
        </section>
    )
}; export default ProductDetails;
