import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Blok } from "@/types/storyblok";

interface TeaserProps {
  blok: Blok & { headline: string };
}

const Teaser: React.FC<TeaserProps> = ({ blok }) => (
  <h2
    className="font-semibold text-4xl text-balance"
    {...storyblokEditable(blok)}
  >
    {blok.headline}
  </h2>
);

export default Teaser;
