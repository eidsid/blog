import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import contacts from "@/models/contact";

export const GET = async () => {
  console.log("ask for contacts data");
  try {
    await connect();
    const contactsDate = await contacts.find();
    return new NextResponse(JSON.stringify(contactsDate), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("DB error " + error.message, {
      status: 404,
    });
  }
};

export const POST = async (req) => {
  try {
    const { name, email, message } = await req.json();
    await connect();
    const createdPost = await contacts.create({
      name,
      email,
      message,
    });
    return new NextResponse(createdPost, { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
