import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import withAuth from "@/lib/withAuth";

// export async function POST(req: NextRequest, res: NextResponse) {
  async function handler(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  
  const saveMessage = await prisma.test.create({
    data: {
      stream: body.stream,
    },
  });
  if (!saveMessage)
    return Response.json({
      message: "Error saving stream",
      status: 500,
    });
  return Response.json({
    message: body.stream,
    status: 200,
  });
}

export const POST = withAuth(handler, 'create', 'CreateTest');