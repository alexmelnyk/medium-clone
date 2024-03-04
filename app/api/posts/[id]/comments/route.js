import CommentSchema from "@/schemas/comment.schema.json";
import { Draft07 } from "json-schema-library";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request, { params }) {
  try {
    const body = await request.json();
    const jsonSchema = new Draft07(CommentSchema);
    const errors = jsonSchema.validate(body);

    if (errors.length) {
      throw errors;
    }

    const comment = await prisma.$transaction(async (prisma) => {
      const post = await prisma.Post.findUniqueOrThrow({
        where: {
          id: params.id,
        },
      });

      const user = await prisma.User.findUniqueOrThrow({
        where: {
          id: body.userId,
        },
      });

      const comment = await prisma.Comment.create({
        data: {
          content: body.content,
          userId: user.id,
          postId: post.id,
        },
      });

      return comment;
    });

    return NextResponse.json({ comment }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
