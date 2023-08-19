import Posts from "@/models/Post";
import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
export const GET = async (reques, { params }) => {
  try {
    await connect();
    const post = await Posts.findById(params.id);

    return new NextResponse(JSON.stringify(post), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("DB error", {
      status: 404,
    });
  }
};

export const DELETE = async (reques, { params }) => {
  const { id } = params;

  try {
    await connect();
    await Posts.findByIdAndDelete(id);
    return new NextResponse("posst delteted success");
  } catch (error) {
    return new NextResponse("DB error " + error.message, {
      status: 404,
    });
  }
};
