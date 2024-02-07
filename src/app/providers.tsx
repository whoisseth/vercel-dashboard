/** @format */

// app/providers.jsx

"use client";

import { ThemeProvider } from "next-themes";

export function Providers({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
