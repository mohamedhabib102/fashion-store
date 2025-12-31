import { getAllCategories } from "@/api/api";
import { NextResponse } from "next/server";



export async function GET(
    req: Request
 ){
    const url = new URL(req.url)
    const category = url.pathname.split("/").pop();
    const decodedCategory = decodeURIComponent(category!);


    const product = getAllCategories(decodedCategory);

    if (!product.length) {
        return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }

    return NextResponse.json(product, { status: 200 })
 }
