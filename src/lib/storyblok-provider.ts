"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/page";
import Grid from "@/components/grid";
import Feature from "@/components/feature";
import Teaser from "@/components/teaser";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});

export default function StoryblokProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
