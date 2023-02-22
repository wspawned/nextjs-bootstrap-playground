import { NextResponse } from "next/server";
import { authRoutes, protectedRoutes } from "./router/routes";

export const middleware = (request) => {
  console.log("hey")

  const currentUser = request.cookies.get("userName")?.value;
  if(
    protectedRoutes.includes(request.nextUrl.pathname) &&
    !currentUser
  ) {
    const response = NextResponse.redirect(new URL("/admin/login", request.url))

    return response;
  }

  if(
    authRoutes.includes(request.nextUrl.pathname) &&
    currentUser
  ) {
    return NextResponse.redirect(new URL("/admin/profile", request.url))
  }
}