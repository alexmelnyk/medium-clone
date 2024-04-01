import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const user = await prisma.User.findUniqueOrThrow({
      where: {
        id: params.id,
      },
      include: {
        following: true,
        followedBy: true,
        _count: {
          select: {
            following: true,
            followedBy: true,
          },
        },
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
