import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(request, event) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  console.log("token", token);

  return NextResponse.next({ request });
}

export const config = {
  matcher: ["/api/posts/"],
};
