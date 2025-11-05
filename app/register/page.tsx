"use client";

import { register, RegisterData } from "@/lib/api";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const handleSubmit = async (formdata: FormData) => {
    const userdata = Object.fromEntries(formdata) as unknown as RegisterData;
    const user = await register(userdata);
    if (user) {
      router.push("/login");
    }
  };

  return (
    <form action={handleSubmit}>
      <label>
        Name <input type="text" name="username" />
      </label>
      <label>
        Email <input type="email" name="email" />
      </label>
      <label>
        Password <input type="password" name="password" />
      </label>
      <button>Register</button>
    </form>
  );
};

export default Register;
