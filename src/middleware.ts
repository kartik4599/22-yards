import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const path = request.url.split("/").pop();
  if (path !== "auth")
    return NextResponse.redirect(new URL("/auth", request.url));
};

export const config = {
  matcher: ["/((?!.*\\.).*)", "/favicon.ico"],
};
