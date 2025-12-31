import { NextRequest, NextResponse } from "next/server";
import { getUniqueCategories, getAllProducts, getAllCategories } from "@/api/api";


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    const categoryQuery = searchParams.get('category');

    // 1. لو طلب الأصناف فقط
    if (type === 'categories') {
        const categories = getUniqueCategories();
        return NextResponse.json(categories, { status: 200 });
    }

    // 2. لو طلب منتجات صنف معين (أو الكل)
    if (categoryQuery) {
        const products = getAllCategories(categoryQuery);
        return NextResponse.json(products, { status: 200 });
    }

    // 3. الوضع الافتراضي: رجع كل المنتجات
    const allProducts = getAllProducts();
    return NextResponse.json(allProducts, { status: 200 });
}
