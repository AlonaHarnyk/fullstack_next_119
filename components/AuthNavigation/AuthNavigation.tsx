"use client";

import { logout } from "@/lib/api";
import css from "../Header/Header.module.css";

import { useAuthStore } from "@/lib/store/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthNavigation = () => {
  const { isAuth, user, clearAuth } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    clearAuth();
    router.replace("/login");
  };

  return isAuth ? (
    <>
      <span>{user?.email}</span>
      <button onClick={handleLogout}>Logout</button>
    </>
  ) : (
    <>
      <li>
        <Link href="/register" className={css.link}>
          Register
        </Link>
      </li>
      <li>
        <Link href="/login" className={css.link}>
          Login
        </Link>
      </li>
    </>
  );
};

export default AuthNavigation;
