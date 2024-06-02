import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Collection from "@/lib/models/collections";

export const POST = async (req: NextRequest) => {
  try {

    // await connectToDB();

    const { name } = await req.json()

    const existingCollection = await Collection.findOne({ name })

    if (existingCollection) {
      return new NextResponse("Collection already exists", { status: 400 })
    }

    if (!name) {
      return new NextResponse("Name are required", { status: 400 })
    }

    const newCollection = await Collection.create({
      name
    })

    await newCollection.save()

    return NextResponse.json(newCollection, { status: 200 })
  } catch (err) {
    console.log("[collections_POST]", err)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB()

    const collections = await Collection.find().sort({ createdAt: "desc" })

    return NextResponse.json(collections, { status: 200 })
  } catch (err) {
    console.log("[collections_GET]", err)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

export const dynamic = "force-dynamic";
