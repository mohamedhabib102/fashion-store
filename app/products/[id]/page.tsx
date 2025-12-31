import axiosInstance from "@/api/axios";
import CustomContainer from "@/components/ui/CustomContainer";
import DetailsSection from "@/components/ui/DetailsSection";
import ImagesDetailsProduct from "@/components/ui/ImagesDetailsProduct";
import { Product } from "@/lib/db";
import Image from "next/image";

interface Props {
    params: Promise<{id: string}>
}


const getProductById =  async (id: string) => {
    const ID = Number(id);
    const res = await axiosInstance.get(`api/products/${ID}`);
    const data = await res.data;
    console.log(data)
    return data;
}


const ProductDetails: React.FC<Props> = async ({ params }) => {
    const {id} = await params;
    const product:Product = await getProductById(id);




    return (
        <section className="py-12 bg-[#FAF9F6]">
            <CustomContainer>
              <div className="lg:w-[80%] w-auto mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
                {/* Image Section */}
                <ImagesDetailsProduct images={product.image}/>

                {/* Details Section */}
                 <DetailsSection product={product}/>
              </div>
            </CustomContainer>
        </section>
    )
}; export default ProductDetails;
