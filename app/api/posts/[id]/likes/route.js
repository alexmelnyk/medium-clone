import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request, { params }) {
  const userId = request.headers.get("x-user-id");

  try {
    const like = await prisma.$transaction(async (prisma) => {
      const post = await prisma.Post.findUniqueOrThrow({
        where: {
          id: params.id,
        },
      });

      const user = await prisma.User.findUniqueOrThrow({
        where: {
          id: userId,
        },
      });

      const like = await prisma.Like.create({
        data: {
          userId: user.id,
          postId: post.id,
        },
      });

      return like;
    });
    return NextResponse.json({ like }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
