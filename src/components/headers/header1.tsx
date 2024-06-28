import Image from "next/image";
import Link from "next/link";

import { storyblokEditable } from "@storyblok/react/rsc";
import { Button } from "@/components/ui/button";

const Header1 = ({ blok }: any) => {
  return (
    <header className="py-12 md:py-24 lg:py-24">
      <div className="container flex px-[5%]">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1
              {...storyblokEditable(blok)}
              className="mb-5 max-w-xl text-balance text-3xl font-semibold md:mb-6 md:text-4xl lg:text-5xl"
            >
              {blok.heading}
            </h1>
            <p className="md:text-md max-w-2xl text-balance text-lg">
              {blok.description}
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {blok.buttons.map((blok: any, index: number) => (
                <Button
                  asChild
                  key={blok._uid}
                  variant={index === 1 ? "secondary" : "default"}
                >
                  <Link href={blok.link}>{blok.label}</Link>
                </Button>
              ))}
            </div>
          </div>
          <div>
            <Image
              src={blok.image.filename}
              className="w-full rounded-lg object-cover"
              alt={blok.image.alt}
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
