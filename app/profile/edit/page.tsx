"use client";

import { useRouter } from "next/navigation";

const EditProfile = () => {
  const router = useRouter();

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
    </>
  );
};

export default EditProfile;
