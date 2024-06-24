import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { Blok } from "@/types/storyblok";

interface GridProps {
  blok: Blok & { columns: Blok[] };
}

const Grid: React.FC<GridProps> = ({ blok }) => (
  <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
    {blok.columns.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default Grid;
