import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "../../types";
import { api } from "../../api";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const { data } = await api.get(`/notes/${id}`);
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
