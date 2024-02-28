import { NextResponse } from "next/server";
import { Draft07 } from "json-schema-library";
import prisma from "@/lib/prisma";
import PostSchema from "@/schemas/post.schema.json";

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
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.Post.count(),
    ]);
    const pagesCount = Math.ceil(postsCount / take);

    return NextResponse.json({ posts, pagesCount }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const jsonSchema = new Draft07(PostSchema);
    const errors = jsonSchema.validate(body);

    if (errors.length) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const user = await prisma.User.findUniqueOrThrow({
      where: {
        id: body.userId,
      },
    });

    const post = await prisma.Post.create({
      data: {
        ...body,
        userId: user.id,
      },
    });

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
