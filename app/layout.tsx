import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supermicro Project Overview",
  description: "Feature Overview and Implementation Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
