import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request, { params }) {
  try {
    const followerId = request.headers.get("x-user-id");
    const follow = await prisma.Follow.delete({
      where: {
        id: params.followId,
        followerId,
        followingId: params.id,
      },
    });

    return NextResponse.json(follow, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
