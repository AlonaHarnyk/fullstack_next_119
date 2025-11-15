import { NextResponse } from "next/server";
import { ApiError } from "../../types";
import { api } from "../../api";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookiesData = await cookies();
    const { data } = await api.post(
      `/auth/logout`,
      {},
      {
        headers: { Cookie: cookiesData.toString() },
      }
    );

    cookiesData.delete("accessToken");
    cookiesData.delete("refreshToken");

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
