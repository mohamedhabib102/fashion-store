import { getAllCategories } from "@/api/api";
import { NextResponse } from "next/server";



export async function GET(
    req: Request,
    { params }: { params: Promise<{ category: string }> }
) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);


    const product = getAllCategories(decodedCategory);

    if (!product || !product.length) {
        return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }

    return NextResponse.json(product, { status: 200 })
}
