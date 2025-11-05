import { NextResponse } from "next/server";
import { api } from "../api";
import { ApiError } from "../types";

export async function GET() {
  try {
    const { data } = await api.get(`/categories`);
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
