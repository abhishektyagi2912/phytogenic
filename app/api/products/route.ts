import { connectToDB } from "@/lib/mongodb";

export async function GET(request: Request) {
    await connectToDB();
    console.log('hello');
}
