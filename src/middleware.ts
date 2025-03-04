import { NextRequest, NextResponse } from "next/server";
import { getloggedInUser } from "./lib/database";

export const middleware = (request: NextRequest) => {
  const { login } = getloggedInUser(request.cookies.get("pb_auth")?.value);
  const path = request.url.split("/").pop();
  if (path !== "auth" && !login)
    return NextResponse.redirect(new URL("/auth", request.url));
  else if (path === "auth" && login)
    return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: ["/((?!.*\\.).*)", "/favicon.ico"],
};
