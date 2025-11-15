import { NextResponse } from "next/server";
import { ApiError } from "../../types";
import { api } from "../../api";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function GET() {
  try {
    const cookiesData = await cookies();
    const { data, headers } = await api.get(`/auth/session`, {
      headers: { Cookie: cookiesData.toString() },
    });

    const resCookies = headers["set-cookie"];
    if (resCookies) {
      const cookiesArray = Array.isArray(resCookies)
        ? resCookies
        : [resCookies];

      for (const cookieItem of cookiesArray) {
        const parsedCookieItem = parse(cookieItem);

        const options: Partial<ResponseCookie> = {
          maxAge: Number(parsedCookieItem["Max-Age"]),
          path: parsedCookieItem.path,
          expires: parsedCookieItem.expires
            ? new Date(parsedCookieItem.expires)
            : undefined,
        };

        if (parsedCookieItem.accessToken) {
          cookiesData.set("accessToken", parsedCookieItem.accessToken, options);
        }
        if (parsedCookieItem.refreshToken) {
          cookiesData.set(
            "refreshToken",
            parsedCookieItem.refreshToken,
            options
          );
        }
      }

      return NextResponse.json(data);
    }

    return NextResponse.json({ success: false });
  } catch (error) {
    const resErr = error as ApiError;
    return NextResponse.json(
      {
        error: resErr.response?.data?.error ?? resErr.message,
      },
      { status: resErr.status }
    );
  }
}
