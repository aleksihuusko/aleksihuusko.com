"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/page";
import Post from "@/components/post";
import Header1 from "@/components/headers/header1";
import HeaderSimple from "@/components/headers/header-simple";

const components = {
  page: Page,
  post: Post,
  header1: Header1,
  header_simple: HeaderSimple,
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
