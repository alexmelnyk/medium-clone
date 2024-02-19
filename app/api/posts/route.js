import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const page = request.nextUrl.searchParams.get("page") || 1;
    const take = 10;
    const skip = (page - 1) * take;
    const [posts, postsCount] = await prisma.$transaction([
      prisma.Post.findMany({
        skip,
        take,
        include: {
          user: true,
        },
      }),
      prisma.Post.count(),
    ]);
    const pagesCount = Math.floor(postsCount / take);

    return NextResponse.json({ posts, pagesCount }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
