import { getProductDyId } from "@/api/api";
import { NextResponse } from "next/server";



export async function GET(
  req: Request
) {
  const url = new URL(req.url)
  const id = Number(url.pathname.split("/").pop())
  const product = getProductDyId(id)



  if (!product) {
    return NextResponse.json(
      { message: "Product not found" },
      { status: 404 }
    )
  }

  return NextResponse.json(product, { status: 200 })
}