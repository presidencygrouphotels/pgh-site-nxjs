import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { serviceList } from "./data";
import ExportedImage from "next-image-export-optimizer";
function ServicesPage() {
  return (
    <>
      <main
        className="grid grid-cols-4 sm:grid-cols-12 ph min-h-screen"
        style={{ background: "url(/pattern.svg)" }}
      >
        <CatalogueSection />
        <BakerySection />
        <CateringSection />
        <LiveEventsSection />
        <CorporateSection />
        <PrivateEventsSection />
        <LiveShowsSection />
        <LiveScreeningSection />
      </main>
    </>
  );
}

export default ServicesPage;

interface CatalogueCardProps {
  image: StaticImageData;
  anchor: string;
  service: string;
}

function CatalogueCard({ image, anchor, service }: CatalogueCardProps) {
  return (
    <>
      <div className="bg-black relative aspect-square">
        <ExportedImage
          src={image}
          alt={service}
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <Link
          href={anchor}
          className="absolute bottom-0 left-0 px-4 sm:px-6 py-3 font-bdo uppercase font-bold text-sm w-full bg-pgh-gray text-pgh-gold text flex justify-between items-center sm:text-base hover:text-white"
        >
          <p className="">{service}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z" />
          </svg>
        </Link>
      </div>
    </>
  );
}

function CatalogueSection() {
  return (
    <>
      <BaseSection
        classNames="-mh ph pt-48 flex flex-col"
        direction="rtl"
        anchor=""
      >
        <>
          <p className="uppercase font-zodiak font-semibold text-2xl py-5">
            Services
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 ">
            {serviceList.map((service) => (
              <CatalogueCard
                key={service.service}
                service={service.service}
                image={service.image}
                anchor={service.anchor}
              />
            ))}
          </div>
        </>
      </BaseSection>
    </>
  );
}

function BakerySection() {
  return (
    <ServicesSection
      direction="ltr"
      anchor="bakery"
      serviceName="In-house bakery"
      tagline="Fresh delights, daily"
      images={["/img/downtown-bakery.webp", "/img/crossiont-tongs.webp"]}
    >
      Savor the irresistible charm of having our own bakery, where each day is
      crafted with the warmth of freshly baked delights.
    </ServicesSection>
  );
}

function CateringSection() {
  return (
    <ServicesSection
      direction="rtl"
      anchor="catering"
      serviceName="Corporate Catering"
      tagline="Culinary excellence"
      images={[
        "/img/catering-outside-bright.webp",
        "/img/catering-woman-food.webp",
        "/img/catering-woman-group.webp",
      ]}
    >
      Enrich your events with our exquisite catering services, where culinary
      artistry meets unparalleled sophistication.
    </ServicesSection>
  );
}

function LiveEventsSection() {
  return (
    <ServicesSection
      direction="ltr"
      serviceName="Live Events"
      anchor="live-events"
      tagline="engaging experiences"
      images={["/img/men-singing-karaoke.webp", "/img/man-with-a-guitar.webp"]}
    >
      <div className="py-2">
        <p className="font-zodiak font-semibold text-lg">Karaoke</p>
        Unleash your inner rock-star at our live karaoke events, where every
        note becomes a memory.
      </div>
      <div className="py-2">
        <p className="font-zodiak font-semibold text-lg">Open Mic</p>
        Unleash your inner rock-star at our live karaoke events, where every
        note becomes a memory.
      </div>
    </ServicesSection>
  );
}

function CorporateSection() {
  return (
    <ServicesSection
      direction="rtl"
      anchor="corporate"
      serviceName="Corporate events"
      tagline="Business, bliss and beyond"
      images={["/img/women-singing-karaoke.webp", "/img/people.webp"]}
    >
      Transform corporate gatherings with our expertly curated live events,
      fostering the perfect blend of professionalism, friendship and
      celebration.
    </ServicesSection>
  );
}

function PrivateEventsSection() {
  return (
    <ServicesSection
      direction="rtl"
      serviceName="Private Dining"
      anchor="private"
      tagline="intimate celebrations"
      images={["/img/birthday-cake.webp", "/img/couple-at-the-bar.webp"]}
    >
      <div className="py-2">
        <p className="font-zodiak font-semibold text-lg">Anniversaries</p>
        Elevate your anniversary celebration with an intimate private dining
        experience, where every moment is tailored to create lasting memories.
      </div>
      <div className="py-2">
        <p className="font-zodiak font-semibold text-lg">Birthdays</p>
        Indulge in an exquisite private dining experience, curated for the
        perfect birthday celebration in an intimate setting.
      </div>
    </ServicesSection>
  );
}

function LiveShowsSection() {
  return (
    <ServicesSection
      direction="rtl"
      anchor="live-shows"
      serviceName="LIVE SHOWS"
      tagline="Elevate your Experience"
      images={["/img/sathwik-magic-card.webp", "/img/rose-singing.webp"]}
    >
      Transform corporate gatherings with our expertly curated live events,
      fostering the perfect blend of professionalism, friendship and
      celebration.
    </ServicesSection>
  );
}

function LiveScreeningSection() {
  return (
    <ServicesSection
      anchor="screenings"
      direction="ltr"
      serviceName="LIVE
SCREENING"
      tagline="Share the victory"
      images={["/img/raki-serious.webp", "/img/liverpool-screening.webp"]}
    >
      Immerse in the thrill of live sports with our captivating screenings,
      making every moment a shared victory.
    </ServicesSection>
  );
}

interface SectionProps {
  children: React.ReactNode;
  direction: "rtl" | "ltr";
  serviceName: string;
  tagline: string;
  images: string[];
  anchor: string;
}

function ServicesSection({
  children,
  direction = "rtl",
  serviceName,
  tagline,
  images,
  anchor,
}: SectionProps) {
  return (
    <BaseSection classNames="" direction={direction} anchor={anchor}>
      <div className="flex-[2] flex flex-col gap-20 h-full w-full">
        <div className="h-fit w-full flex gap-2 flex-col">
          <div className="flex flex-col h-fit justify-center items-center w-full sm:w-fit gap-1">
            <p className="font-bdo font-medium text-pgh-gold uppercase text-xs tracking-widest">
              {tagline}
            </p>
            <p className="font-zodiak uppercase text-3xl font-semibold text-nowrap">
              {serviceName}
            </p>
          </div>
          <div className="w-full h-fit">{children}</div>
        </div>
        <ExportedImage
          src={images[0]}
          alt={images[0]}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <div className="flex-[3] flex h-full w-full flex-col sm:flex-row sm:gap-14 gap-5">
        {images.slice(1).map((image) => (
          <>
            <div className="relative w-full h-full hidden sm:block">
              <ExportedImage
                src={image}
                alt={image}
                key={image}
                fill
                className="object-cover"
              />
            </div>
            <div className="sm:hidden">
              <ExportedImage
                src={image}
                alt={image}
                key={image}
                width="0"
                height="0"
                sizes="16vw, 32vw, 48vw, 64vw, 96vw, 128vw, 256vw, 384vw"
                className="w-full h-auto"
              />
            </div>
          </>
        ))}
      </div>
    </BaseSection>
  );
}

function BaseSection({
  children,
  classNames,
  direction = "ltr",
  anchor,
}: {
  children: React.ReactNode;
  classNames?: string;
  direction: "ltr" | "rtl";
  anchor: string;
}) {
  return (
    <>
      <div
        id={anchor}
        className={cn(
          "col-span-full gap-5 sm:gap-14 h-full flex flex-col py-32 relative border-b-2 border-pgh-gold border-dashed",
          direction === "rtl" ? "sm:flex-row" : "sm:flex-row-reverse",
          classNames!
        )}
      >
        {children}
      </div>
    </>
  );
}
