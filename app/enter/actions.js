"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  AUTH_COOKIE,
  COOKIE_MAX_AGE,
  createAuthToken,
  isValidPassword,
  normalizeRedirectPath,
} from "../../lib/siteAuth";

export async function unlockSite(_previousState, formData) {
  const password = formData.get("password");
  const redirectTo = normalizeRedirectPath(formData.get("redirectTo"));

  if (!isValidPassword(password)) {
    return {
      error: "That password did not match. Please try again.",
    };
  }

  const token = await createAuthToken();
  const cookieStore = await cookies();

  cookieStore.set(AUTH_COOKIE, token, {
    httpOnly: true,
    maxAge: COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  redirect(redirectTo);
}
