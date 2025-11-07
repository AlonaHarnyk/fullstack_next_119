import { NextRequest, NextResponse } from "next/server";
import { api } from "../../api";
import { ApiError } from "../../types";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();
    const { data, headers } = await api.post(`/auth/register`, userData);
    const resCookies = headers["set-cookie"];
    if (!resCookies) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }
    const cookiesArray = Array.isArray(resCookies) ? resCookies : [resCookies];
    const cookiesData = await cookies();

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
        cookiesData.set("refreshToken", parsedCookieItem.refreshToken, options);
      }
    }
    return NextResponse.json(data);
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
