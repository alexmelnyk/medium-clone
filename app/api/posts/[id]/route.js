import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const post = await prisma.Post.findUniqueOrThrow({
      where: {
        id: params.id,
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
