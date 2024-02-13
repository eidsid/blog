import connect from "@/app/utils/db";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  const { name, password, email } = await req.json();
  const crybtedPassword = await bcryptjs.hash(password, 5);
  try {
    await connect();

    // check is user is exist
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("User Already registered");
    } else {
      const newUser = new User({ name, password: crybtedPassword, email });
      await newUser.save();
      return new NextResponse("user has been created", { status: 201 });
    }
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
