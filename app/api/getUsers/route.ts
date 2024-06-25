import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import withAuth from "@/lib/withAuth";

export const revalidate = 0;
async function handler(req: Request) {

  const getMessages = await prisma.user.findMany({});
  const res = await getMessages;
  return NextResponse.json(res);
}

export const GET = withAuth(handler, 'read', 'GetStudents');