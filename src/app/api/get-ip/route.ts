import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const userIp = request.headers.get("x-forwarded-for");

    return NextResponse.json({ ip: userIp }, { status: 200 });
  } catch (e) {
    console.log("error", e);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
};
