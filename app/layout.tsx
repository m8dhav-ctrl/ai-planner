import type { Metadata } from "next";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import ThemeProvider from "@/components/theme/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClerkProvider>
          <ThemeProvider>

            {children}

            <Toaster
              position="top-right"
              richColors
              closeButton
            />

          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}