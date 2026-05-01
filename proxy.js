import { NextResponse } from "next/server";
import {
  AUTH_COOKIE,
  normalizeRedirectPath,
  verifyAuthToken,
} from "./lib/siteAuth";

export async function proxy(request) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/_next/") || pathname === "/favicon.ico") {
    return NextResponse.next();
  }

  const token = request.cookies.get(AUTH_COOKIE)?.value;
  const hasAccess = token ? await verifyAuthToken(token) : false;

  if (pathname === "/enter") {
    if (!hasAccess) {
      return NextResponse.next();
    }

    const redirectTo = normalizeRedirectPath(
      request.nextUrl.searchParams.get("redirect"),
    );

    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  if (hasAccess) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/enter", request.url);

  loginUrl.searchParams.set(
    "redirect",
    `${pathname}${request.nextUrl.search}`,
  );

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
