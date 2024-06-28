"use client";

import Image from "next/image";

import { renderRichText } from "@storyblok/react";
import { formatDate } from "@/utils/formatters";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Post({ blok }: any) {
  return (
    <div className="py-12 md:py-24 lg:py-24">
      <div className="container flex px-[5%]">
        <article className="mx-auto max-w-3xl text-base leading-7">
          <div className="mb-6 flex items-center gap-x-4 text-xs">
            <Badge variant="outline">{blok.category}</Badge>
          </div>
          <h1 className="mt-2 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {blok.title}
          </h1>
          <p className="mb-6 mt-4 text-balance text-lg leading-8">
            {blok.description}
          </p>

          <div className="flex justify-between">
            {blok.author.map((author: any) => (
              <div
                key={author._uid}
                className="relative mt-8 flex items-center gap-x-4"
              >
                <Avatar>
                  <AvatarImage
                    src={author.image.filename}
                    alt={author.image.alt}
                  />
                  <AvatarFallback>
                    {author.name
                      .split(" ")
                      .map((word: string) => word[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {author.name}
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-muted-foreground">
                    <time dateTime={new Date(blok.date).toISOString()}>
                      {formatDate(blok.date)}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{blok.read_time} read time</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Image
            className="mb-8 mt-12 rounded-lg"
            src={blok.image.filename}
            alt={blok.image.alt}
            width={1000}
            height={600}
            priority
          />

          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: renderRichText(blok.body) }}
          />
        </article>
      </div>
    </div>
  );
}
