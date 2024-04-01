import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(request, event) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (!token && request.method !== "GET") {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }

  const response = NextResponse.next();

  if (token) {
    response.headers.set("x-user-id", token.sub);
  }

  return response;
}

export const config = {
  matcher: ["/api/posts/:path*", "/api/users/:path*"],
};
