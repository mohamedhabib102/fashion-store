import { NextResponse, NextRequest } from "next/server";
import { getAllCategories, getAllProducts, getProductDyId } from "@/api/api";



export async function GET() {
    const allProducts = getAllProducts()
    const request = NextRequest
    return NextResponse.json(allProducts, {status: 200})
}

export async function GETBYID(id: number) {
    if (!id) {
        return NextResponse.json({error: "ID is required"}, {status: 404})
    }
    const product = getProductDyId(id)
    return NextResponse.json(product, {status: 200})
}
