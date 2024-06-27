import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/lib/storyblok";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Aleksi Huusko",
  description: "Frontend Developer and UX/UI Designer",
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${GeistSans.variable} ${GeistMono.variable}`}
      >
        <body className="min-h-screen bg-background antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </StoryblokProvider>
  );
}
