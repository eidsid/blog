import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    return new NextResponse(JSON.stringify({ name: "eid", password: 123 }));
  } catch (error) {
    return new NextResponse(error.message);
  }
};
