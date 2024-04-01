import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request, { params }) {
  try {
    const follow = await prisma.$transaction(async (prisma) => {
      const user = await prisma.User.findUniqueOrThrow({
        where: {
          id: params.id,
        },
      });
      const followerId = request.headers.get("x-user-id");

      const follower = await prisma.User.findUniqueOrThrow({
        where: {
          id: followerId,
        },
      });

      const follow = await prisma.Follow.create({
        data: {
          followerId: follower.id,
          followingId: user.id,
        },
      });

      return follow;
    });

    return NextResponse.json(follow, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
