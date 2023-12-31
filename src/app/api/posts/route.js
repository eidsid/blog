import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Posts from "@/models/Post";
export const GET = async () => {
  console.log("ask for data");
  try {
    await connect();
    const posts = await Posts.find();
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
    });
  } catch (error) {
    console.log(error.message);

    return new NextResponse("DB error " + error.message, {
      status: 404,
    });
  }
};

export const POST = async (req) => {
  try {
    const { title, description, content, img, authorName } = await req.json();
    console.log({ title, description, content, img, authorName });
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
