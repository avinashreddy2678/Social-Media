import { connect } from "@/app/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Posts from "@/app/models/PostModal";

connect();

export async function GET(request: NextRequest) {
  try {
    const allPosts = await Posts.find({}).sort({ createdAt: -1 }).populate({
      path: "userid",
      select: "name",
    });

    return NextResponse.json({ allPosts });
  } catch (error) {
    console.error("Error fetching posts:", error);

    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
