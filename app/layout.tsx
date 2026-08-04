import type { Metadata } from "next";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "AI Travel Planner",
  description: "Plan AI-powered trips effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          {children}

          <Toaster
            position="top-right"
            richColors
            closeButton
          />
        </ClerkProvider>
      </body>
    </html>
  );
}