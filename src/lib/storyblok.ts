"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/page";

import Header1 from "@/components/headers/header1";

const components = {
  page: Page,
  header1: Header1,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});

export default function StoryblokProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
