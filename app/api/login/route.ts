import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";


export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
    const saveMessage = await prisma.user.findUnique({
        where:{
            email: body.email
        }
    });
    if(saveMessage?.password !== body.password){
        return Response.json({
            message: "Incorrect Credentials",
            user: null,
        });
    }
    else if(saveMessage?.password === body.password){
        return Response.json({
            message: "User found",
            user: saveMessage,
            status: 200,
        });
    }
}
