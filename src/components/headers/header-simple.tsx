export default function HeaderSimple({ blok }: any) {
  return (
    <div className="bg-background py-12 sm:py-24">
      <div className="container px-[5%]">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {blok.heading}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {blok.subheading}
          </p>
        </div>
      </div>
    </div>
  );
}
