import Product from "@/lib/models/Product";
import Collection from "@/lib/models/collections";
import { connectToDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  await connectToDB();
  const { title, name, image, collections } = await req.json();

  if (!title || !name || !image || !collections || !Array.isArray(collections)) {
    return new NextResponse("Not enough data to create a product", {
      status: 400,
    });
  }

  try {
    const collectionIds = await Promise.all(
      collections.map(async (collectionName) => {
        let collection = await Collection.findOne({ name: collectionName });
        if (!collection) {
          collection = await Collection.create({ name: collectionName });
        }
        return collection._id;
      })
    );

    const product = await Product.create({
      title,
      name,
      collections: collectionIds,
    });

    await Promise.all(
      collectionIds.map(async (collectionId) => {
        await Collection.findByIdAndUpdate(collectionId, {
          $addToSet: { products: product._id },
        });
      })
    );

    return NextResponse.json(product, { status: 200 });
  } catch (err) {
    console.error("Error creating product", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
