import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/utils/formatters";

export const PostCard = (props: any) => {
  const post = props.story.content;

  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg bg-foreground px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
      <Link href={`/${props.story.full_slug}`}>
        <Image
          src={post.image.filename}
          alt={post.image.alt}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground via-foreground/40" />
        <div className="absolute inset-0 -z-10 rounded-lg ring-1 ring-inset ring-foreground/10" />

        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-muted/60">
          <time dateTime={new Date(post.date).toISOString()} className="mr-8">
            {formatDate(post.date)}
          </time>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-background">
          <span className="absolute inset-0" />
          {post.title}
        </h3>
      </Link>
    </article>
  );
};
