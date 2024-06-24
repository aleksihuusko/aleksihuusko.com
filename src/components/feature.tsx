import { storyblokEditable } from "@storyblok/react/rsc";
import { Blok } from "@/types/storyblok";

interface FeatureProps {
  blok: Blok & { name: string };
}

const Feature: React.FC<FeatureProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>{blok.name}</div>
);

export default Feature;
