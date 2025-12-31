import { NextRequest, NextResponse } from "next/server";
import { getUniqueCategories, getAllProducts } from "@/api/api";


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');

    if (type === 'categories') {
        const categories = getUniqueCategories();
        return NextResponse.json(categories, { status: 200 });
    }

    const allProducts = getAllProducts();
    return NextResponse.json(allProducts, { status: 200 });
}
