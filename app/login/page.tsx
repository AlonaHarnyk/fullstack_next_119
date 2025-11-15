"use client";

import { login, LoginData } from "@/lib/api";
import { useAuthStore } from "@/lib/store/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const {setAuth} = useAuthStore()
  const handleSubmit = async (formdata: FormData) => {
    const userdata = Object.fromEntries(formdata) as unknown as LoginData;
      const user = await login(userdata);
      setAuth(user)
    if (user) {
      router.push("/profile");
    }
  };

  return (
    <form action={handleSubmit}>
      <label>
        Email <input type="email" name="email" />
      </label>
      <label>
        Password <input type="password" name="password" />
      </label>
      <button>Login</button>
    </form>
  );
};

export default Login;
