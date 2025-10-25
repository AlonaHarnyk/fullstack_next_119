"use client";

import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return <button onClick={handleGoBack}>Go back</button>;
};

export default GoBackButton;
