"use client";

// import Link from 'next/link';
import { redirect } from "next/navigation";

const NotFound = () => {
  setTimeout(() => {
    redirect("/");
  }, 1000);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p>
      {/* <Link href="/">Go back home</Link> */}
    </div>
  );
};

export default NotFound;
