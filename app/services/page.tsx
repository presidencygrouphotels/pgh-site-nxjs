import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { serviceList } from "./data";
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
        <Image
          src={image}
          alt={service}
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <Link
          href={anchor}
          className="absolute bottom-0 left-0 px-4 sm:px-6 py-3 font-bdo uppercase font-bold text-sm w-full bg-pgh-gray text-pgh-gold text flex justify-between items-center sm:text-base"
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
      <BaseSection classNames="-mh ph pt-48 flex flex-col" direction="rtl">
        <>
          <p className="uppercase font-zodiak font-semibold text-2xl py-5">
            Services
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 ">
            {serviceList.map((service) => (
              <CatalogueCard
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
      serviceName="In-house bakery"
      tagline="Fresh delights, daily"
      images={[
        "/img/webp/downtown-bakery.webp",
        "/img/webp/crossiont-tongs.webp",
      ]}
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
      serviceName="Catering"
      tagline="Culinary excellence for every occasion"
      images={[
        "/img/webp/catering-outside-bright.webp",
        "/img/webp/catering-woman-food.webp",
        "/img/webp/catering-woman-group.webp",
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
      tagline="Enjoy engaging experiences"
      images={[
        "/img/webp/men-singing-karaoke.webp",
        "/img/webp/man-with-a-guitar.webp",
      ]}
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
      serviceName="CORPORATE PARTIES"
      tagline="Business, bliss and beyond"
      images={["/img/webp/women-singing-karaoke.webp", "/img/webp/people.webp"]}
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
      tagline="Memorable intimate celebrations"
      images={[
        "/img/webp/birthday-cake.webp",
        "/img/webp/couple-at-the-bar.webp",
      ]}
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
      serviceName="LIVE SHOWS"
      tagline="Elevate your Experience"
      images={[
        "/img/webp/sathwik-magic-card.webp",
        "/img/webp/rose-singing.webp",
      ]}
    >
      Transform corporate gatherings with our expertly curated live events,
      fostering the perfect blend of professionalism, friendship and
      celebration.
    </ServicesSection>
  );
}

interface SectionProps {
  children: React.ReactNode;
  direction: "rtl" | "ltr";
  serviceName: string;
  tagline: string;
  images: string[];
}

function LiveScreeningSection() {
  return (
    <ServicesSection
      direction="ltr"
      serviceName="LIVE
SCREENING"
      tagline="Share the victory"
      images={[
        "/img/webp/raki-serious.webp",
        "/img/webp/liverpool-screening.webp",
      ]}
    >
      Immerse in the thrill of live sports with our captivating screenings,
      making every moment a shared victory.
    </ServicesSection>
  );
}

function ServicesSection({
  children,
  direction = "rtl",
  serviceName,
  tagline,
  images,
}: SectionProps) {
  return (
    <BaseSection classNames="" direction={direction}>
      <div className="flex-[2] flex flex-col gap-10 justify-start">
        <div className="flex flex-col justify-center items-center w-full sm:w-fit gap-1">
          <p className="font-bdo font-medium text-pgh-gold uppercase text-xs tracking-widest">
            {tagline}
          </p>
          <p className="font-zodiak uppercase text-3xl font-semibold text-nowrap">
            {serviceName}
          </p>
        </div>

        <div className="w-full h-full">{children}</div>
        <img src={images[0]} alt={images[0]} style={{ objectFit: "cover" }} />
      </div>
      <div className="flex-[3] flex flex-col sm:flex-row sm:gap-14 gap-5">
        {images.slice(1).map((image) => (
          <img
            src={image}
            alt={image}
            style={{ objectFit: "cover", overflow: "hidden" }}
          />
        ))}
      </div>
    </BaseSection>
  );
}

function BaseSection({
  children,
  classNames,
  direction = "ltr",
}: {
  children: React.ReactNode;
  classNames?: string;
  direction: "ltr" | "rtl";
}) {
  return (
    <>
      <div
        className={cn(
          "col-span-full gap-5 sm:gap-14 h-fit flex flex-col py-32 relative border-b-2 border-pgh-gold border-dashed",
          direction === "rtl" ? "sm:flex-row" : "sm:flex-row-reverse",
          classNames!
        )}
      >
        {children}
      </div>
    </>
  );
}
