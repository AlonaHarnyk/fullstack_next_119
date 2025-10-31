import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanstackProvider from "@/components/TanstackProvider/TanstackProvider";


const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notes App",
  description: "App for creating and storing notes",
};

export default function RootLayout({
  children,
  details,
}: Readonly<{
  children: React.ReactNode;
  details: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.variable}`}>
        <TanstackProvider>
          <Header />
          {children}
          {details}
        </TanstackProvider>
      </body>
    </html>
  );
}
