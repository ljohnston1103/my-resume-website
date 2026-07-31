import { NextResponse } from "next/server";
import {
  AUTH_COOKIE,
  normalizeRedirectPath,
  verifyAuthToken,
} from "./lib/siteAuth";

// Image files must stay reachable without the gate: Next's image optimizer
// fetches them server-side with no cookie, so gating them breaks every
// <Image> on the site. PDFs and everything else stay protected.
const PUBLIC_IMAGE = /\.(?:png|jpe?g|webp|avif|gif|svg|ico)$/i;

export async function proxy(request) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    PUBLIC_IMAGE.test(pathname)
  ) {
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
