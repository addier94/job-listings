import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job listings with filtering",
  description: "Job listings with filtering using Next.js and Tailwind CSS",
  icons: [
    {
      url: "/images/favicon-32x32.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-heading">{children}</body>
    </html>
  );
}
