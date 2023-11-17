import Posts from "@/app/models/PostModal";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
interface RequestBody {
  userId: string;
  postId: string;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { postId?: string } }
) {
  try {
    const body: RequestBody = await request.json();
    const { postId } = body;
    if (postId && typeof postId === "string") {
      const postalllikes = await Posts.findOne({
        _id: postId,
      });
      const alllikes = await postalllikes.isLiked;
      return NextResponse.json({ likes: alllikes, postId });
    }
    return NextResponse.json({ data: "fda" });
  } catch (error) {
    console.error("Error handling GET request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();

    const { userId, postId } = body;
    const postLike = await Posts.findById({ _id: postId });
    await postLike.isLiked.push(userId);
    await postLike.save();
    return NextResponse.json({ message: "POST Like successful" });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { userId, postId } = body;
    const deleteLike = await Posts.findById({ _id: postId });
    const index = deleteLike.isLiked.indexOf(userId);
    await deleteLike.isLiked.splice(index, 1);
    await deleteLike.save();
    return NextResponse.json({ message: "DELETE request successful" });
  } catch (error) {
    console.error("Error handling DELETE request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
