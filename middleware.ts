import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { checkServerSession } from "./lib/serverApi";
import { parse } from "cookie";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const privateRoutes = ["/notes", "/profile"];
const publicRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const cookiesData = await cookies();

  const { pathname } = request.nextUrl;
  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPrivateRoute) {
    const { headers } = await checkServerSession();
    const resCookies = headers["set-cookie"];

    if (resCookies) {
      const cookiesArray = Array.isArray(resCookies)
        ? resCookies
        : [resCookies];
      for (const cookieItem of cookiesArray) {
        if (cookieItem) {
          const parsedCookieItem = parse(cookieItem);
          const options: Partial<ResponseCookie> = {
            maxAge: Number(parsedCookieItem["Max-Age"]),
            path: parsedCookieItem.path,
            expires: parsedCookieItem.expires
              ? new Date(parsedCookieItem.expires)
              : undefined,
          };
          if (parsedCookieItem.accessToken) {
            cookiesData.set(
              "accessToken",
              parsedCookieItem.accessToken,
              options
            );
          }
          if (parsedCookieItem.refreshToken) {
            cookiesData.set(
              "refreshToken",
              parsedCookieItem.refreshToken,
              options
            );
          }
        }
      }
      return NextResponse.next({
        headers: {
          Cookie: cookiesData.toString(),
        },
      });
    }
    return NextResponse.redirect(new URL("/login", request.nextUrl.origin));
  }

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPublicRoute) {
    const accessToken = cookiesData.get("accessToken")?.value;
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.nextUrl.origin));
    }
    const refreshToken = cookiesData.get("refreshToken")?.value;

    if (refreshToken) {
      const { headers } = await checkServerSession();
      const resCookies = headers["set-cookie"];

      if (resCookies) {
        const cookiesArray = Array.isArray(resCookies)
          ? resCookies
          : [resCookies];
        for (const cookieItem of cookiesArray) {
          if (cookieItem) {
            const parsedCookieItem = parse(cookieItem);
            const options: Partial<ResponseCookie> = {
              maxAge: Number(parsedCookieItem["Max-Age"]),
              path: parsedCookieItem.path,
              expires: parsedCookieItem.expires
                ? new Date(parsedCookieItem.expires)
                : undefined,
            };
            if (parsedCookieItem.accessToken) {
              cookiesData.set(
                "accessToken",
                parsedCookieItem.accessToken,
                options
              );
            }
            if (parsedCookieItem.refreshToken) {
              cookiesData.set(
                "refreshToken",
                parsedCookieItem.refreshToken,
                options
              );
            }
          }
        }
        return NextResponse.redirect(new URL("/", request.nextUrl.origin));
      }

      return NextResponse.next();
    }
  }
}
export const config = {
  matcher: [
    "/profile",
    "/notes/filter/:path*",
    "/notes/:path*",
    "/notes/actions/create",
    "/login",
    "/register",
  ],
};
