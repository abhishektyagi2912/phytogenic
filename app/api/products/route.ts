import Product from "@/lib/models/Product";
import { connectToDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  await connectToDB();
  const { title, name, collections } = await req.json();

  if (!title || !name || !collections) {
    return new NextResponse("Not enough data to create a product", {
      status: 400,
    });
  }
  
  try {
    const product = await Product.create({
      title,
      name,
      collections,
    });

    return NextResponse.json(product, { status: 200 });

  } catch (err) {

    console.error("Error creating product", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
