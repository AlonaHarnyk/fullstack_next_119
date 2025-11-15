import { cookies } from "next/headers";
import { api, SuccessState } from "./api";

export const checkServerSession = async () => {
  const cookiesData = await cookies();
  const res = await api.get<SuccessState>(`/auth/session`, {
    headers: {
      Cookie: cookiesData.toString(),
    },
  });
  return res;
};
