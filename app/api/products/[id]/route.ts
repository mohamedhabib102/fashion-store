import { getProductDyId } from "@/actions/api";
import { NextResponse } from "next/server";



export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const productId = Number(id)
  const product = getProductDyId(productId)



  if (!product) {
    return NextResponse.json(
      { message: "Product not found" },
      { status: 404 }
    )
  }

  return NextResponse.json(product, { status: 200 })
}