import type { Metadata } from "next";
import "../styles/global-tailwind-css/globals.tailwind.css"

export const metadata: Metadata = {
  title: "Learning together",
  description: "We support learning Japanese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-screen overflow-x-hidden text-[calc(10/16*1rem)]">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="max-w-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
