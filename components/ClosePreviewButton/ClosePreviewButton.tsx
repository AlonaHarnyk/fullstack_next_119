"use client";

import { usePathname, useRouter } from "next/navigation";

const ClosePreviewButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleGoBack = () => {
    if (pathname.includes("notes")) {
      router.push("/notes/filter/all");
      setTimeout(() => window.location.reload(), 700);
    } else {
      window.location.reload();
    }
  };

  return <button onClick={handleGoBack}>Go back</button>;
};

export default ClosePreviewButton;
