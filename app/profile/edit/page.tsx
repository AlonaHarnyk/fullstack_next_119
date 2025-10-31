"use client";

import { useCounter } from "@/lib/store/counter";
import { useRouter } from "next/navigation";

const EditProfile = () => {
  const router = useRouter();

  const { value } = useCounter();

  const handleGoBack = () => {
    const answer = confirm("Are you sure?");
    if (answer) {
      router.push("/profile");
    }
  };

  return (
    <>
      <button onClick={handleGoBack}>{"<"}Go back</button>
      <div>Edit</div>

      <p>Counter value: {value}</p>
    </>
  );
};

export default EditProfile;
