import { NextRequest, NextResponse } from "next/server";
import { api } from "../api";
import { ApiError } from "../types";

export async function GET(request: NextRequest) {
  try {
    const categoryId = request.nextUrl.searchParams.get("categoryId");
    const title = request.nextUrl.searchParams.get("title");
    const { data } = await api.get(`/notes`, { params: { categoryId, title } });
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

export async function POST(request: NextRequest) {
  try {
    const noteData = await request.json();
    const { data } = await api.post(`/notes`, noteData);
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
