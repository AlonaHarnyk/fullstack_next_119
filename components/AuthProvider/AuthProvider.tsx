"use client";

import { checkSession, getUser } from "@/lib/api";
import { useAuthStore } from "@/lib/store/auth";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  useEffect(() => {
    const fetchSession = async () => {
      const isActiveSession = await checkSession();
      if (isActiveSession) {
          const user = await getUser();
        setAuth(user);
      } else {
        clearAuth();
      }
    };

    fetchSession();
  }, [setAuth, clearAuth]);

  return children;
};

export default AuthProvider;
