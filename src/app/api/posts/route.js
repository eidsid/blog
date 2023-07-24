import Posts from "@/models/posts";
import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/utils/db";
export const GET = async () => {
  try {
    await connect();
    const posts = await Posts.find();
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("DB error", {
      status: 404,
    });
  }
};

export const POST = async (req) => {
  try {
    const { title, description, content, img, authorName } = await req.json();
    await connect();
    const createdPost = await Posts.create({
      title,
      description,
      content,
      img,
      authorName,
    });
    return new NextResponse(createdPost, { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
