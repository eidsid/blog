import connect from "@/app/utils/db";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  const { username, password, email } = await req.json();
  const crybtedPassword = await bcryptjs.hash(password, 5);
  await connect();
  try {
    const user = new User({ username, password: crybtedPassword, email });
    await user.save();
    return new NextResponse("user has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("errorhapped" + error.message, {
      status: 500,
    });
  }
};
