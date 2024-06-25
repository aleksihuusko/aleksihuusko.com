import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/lib/storyblok-provider";

export const metadata: Metadata = {
  title: "Aleksi Huusko",
  description: "Frontend Developer and UX/UI Designer",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
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
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className="min-h-screen bg-background antialiased">
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
