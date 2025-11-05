import { NextRequest, NextResponse } from "next/server";
import { api } from "../../api";
import { ApiError } from "../../types";

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();
    const { data } = await api.post(`/auth/register`, userData);
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
