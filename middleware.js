import { NextResponse } from "next/server";

export default function middleware(request, event) {
  request.headers.set("x-url", request.url);

  return NextResponse.next({ request });
}
