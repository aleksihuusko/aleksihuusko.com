import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { Blok } from "@/types/storyblok";

interface PageProps {
  blok: Blok & { body: Blok[] };
}

const Page: React.FC<PageProps> = ({ blok }) => (
  <main className="mx-[5%]" {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
