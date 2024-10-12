import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "@/providers/TanStackQueryClientProvider";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Find Your Home in Korea",
  description:
    "Discover homes, valuable insights, and essential information for living in Korea. Your guide to settling in comfortably.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} font-pretendard`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
