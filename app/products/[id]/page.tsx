import axiosInstance from "@/api/axios";
import CustomContainer from "@/components/ui/CustomContainer";
import DetailsSection from "@/components/ui/DetailsSection";
import ImagesDetailsProduct from "@/components/ui/ImagesDetailsProduct";
import { getProductDyId } from "@/api/api";
import { Metadata } from "next";

interface Props {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = getProductDyId(Number(id));

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: product.title,
            description: product.description,
            images: [
                {
                    url: product.image[0],
                    alt: product.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: product.title,
            description: product.description,
            images: [product.image[0]],
        },
    };
}


const ProductDetails: React.FC<Props> = async ({ params }) => {
    const { id } = await params;
    const product = getProductDyId(Number(id));

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
