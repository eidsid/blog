import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import contacts from "@/models/contact";

export const DELETE = async (reques, { params }) => {
  const { id } = params;
  try {
    await connect();
    await contacts.findByIdAndDelete(id);
    return new NextResponse("posst delteted success");
  } catch (error) {
    return new NextResponse("DB error " + error.message, {
      status: 404,
    });
  }
};
