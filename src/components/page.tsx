import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok }: any) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((blok: any) => (
      <StoryblokComponent blok={blok} key={blok._uid} />
    ))}
  </main>
);

export default Page;
