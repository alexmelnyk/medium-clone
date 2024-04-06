import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request, { params }) {
  const userId = request.headers.get("x-user-id");

  try {
    const like = await prisma.Like.delete({
      where: {
        id: params.likeId,
        userId,
        postId: params.id,
      },
    });

    return NextResponse.json({ like }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
