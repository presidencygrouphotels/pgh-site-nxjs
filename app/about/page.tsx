import Image from "next/image";
import Link from "next/link";
import pubLogo from "@/public/logos/pub-black.png";
import dinerLogo from "@/public/logos/diner-black.png";

import heroImage from "@/public/img/webp/presidency-collage.webp";
import { cn } from "@/utils/cn";

function AboutPage() {
  return (
    <>
      <main
        className="grid grid-cols-4 sm:grid-cols-12 ph min-h-screen"
        style={{ background: "url(/pattern.svg)" }}
      >
        <HeroSection />
        <DownTownSection />
        <PubSection />
        <DinerSection />
        <OtherVenturesSection />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <>
      <div className="col-span-full relative h-[40vh] sm:h-[75vh] -mh ph">
        <Image
          alt="Launch Group Image"
          src={heroImage}
          fill
          priority
          style={{
            objectFit: "cover",
            filter: "brightness(87%)",
            overflow: "clip",
          }}
        />

        <div className="relative w-full h-full">
          <div className="absolute bg-pgh-black w-full bottom-0 translate-y-[50%] uppercase h-fit flex flex-col text-center items-center justify-center py-5 gap-1">
            <p className="text-xs font-semibold text-pgh-gold tracking-widest">
              Crafting Experiences
            </p>
            <p className="text-pgh-white font-2xl font-zodiak tracking-wide">
              About Us
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function DownTownSection() {
  return (
    <>
      <Section
        direction="rtl"
        images={["/img/webp/chefs.webp"]}
        serviceName="Downtown"
        tagline="Pub & Diner"
      >
        <div className="flex flex-col gap-5 w-fit h-full font-medium">
          Located in the heart of the silicon city, Bengaluru, Downtown Pub and
          Diner caters to around 8,000 customers every month - serving the
          finest food, beverages, and drinks in an ambiance crafted to
          perfection.
          <Link
            href={"https://maps.app.goo.gl/GXtNMyVsqzjanQfu5"}
            className="bg-pgh-gray w-full flex p-3 justify-between items-center text-pgh-gold font-bdo uppercase font-bold"
          >
            <p>Locate Us</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z" />
            </svg>
          </Link>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.983249383719!2d77.60596247561004!3d12.972923087342586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1680a56a367b%3A0xe83b7308cd3c667b!2sDowntown%20Pub!5e0!3m2!1sen!2sin!4v1704787917271!5m2!1sen!2sin"
            height={"100%"}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Section>
    </>
  );
}

function PubSection() {
  const imageList = [
    "/img/webp/downtown-bar-counter.webp",
    "/img/webp/downtown-corner-sofas.webp",
    "/img/webp/downtown-tables.webp",
  ];

  return (
    <>
      <div className="col-span-full gap-5 sm:gap-10  flex flex-col py-32 relative border-b-2 border-pgh-gold border-dashed">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="font-medium text-pgh-gold text-center uppercase tracking-widest">
            In the neighbourhood since 1992
          </p>
          <Image
            src={pubLogo}
            alt="Downtown Taproom Pub"
            className="sm:w-[60%]"
          />
        </div>

        <div className="w-full h-full flex sm:flex-row flex-col gap-3 ">
          {imageList.map((image) => (
            <div className="object-cover h-full">
              <img src={image} alt={image} className="" />
            </div>
          ))}
        </div>

        <p className="w-full sm:text-center sm:font-medium font-semibold">
          Hanging out with you since 31 years, that simple neighbourhood pub is
          back with a new look, menu, comfortable setting and great beer!
        </p>
        <hr className="w-full h-1 bg-pgh-gold bg-opacity-25"></hr>
        <Link
          href={"https://downtownpub.in"}
          className="w-full text-center font-zodiak font-medium text-lg text-pgh-gold"
        >
          downtownpub.in
        </Link>
      </div>
    </>
  );
}

function DinerSection() {
  const imageList = [
    "/img/webp/diner-facing-kitchen.webp",
    "/img/webp/diner-route-66-projector.webp",
    "/img/webp/diner-wonder-woman-pillar.webp",
  ];

  return (
    <>
      <div className="col-span-full gap-5 sm:gap-10  flex flex-col py-32 relative border-b-2 border-pgh-gold border-dashed">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="font-medium text-pgh-gold text-center uppercase tracking-widest">
            Classic American dining
          </p>
          <Image
            src={dinerLogo}
            alt="Downtown Taproom Pub"
            className="sm:w-[60%]"
          />
        </div>

        <div className="w-full h-full flex sm:flex-row flex-col gap-3 ">
          {imageList.map((image) => (
            <div className="object-cover h-full w-full">
              <img src={image} alt={image} className="" />
            </div>
          ))}
        </div>

        <p className="w-full sm:text-center sm:font-medium font-semibold">
          An All-American-Themed Diner bringing back that wholesome family fun
          diner experience, colourful interiors, and classic comfort food.
        </p>
      </div>
    </>
  );
}

interface SectionProps {
  children: React.ReactNode;
  direction: "rtl" | "ltr";
  serviceName: string;
  tagline: string;
  images: string[];
}

function OtherVenturesSection() {
  const ventureList = [
    {
      name: "AMBICA CONSTRUCTIONS & CONTRACTORS",
      description:
        "Executed major industrial, institutional and residential projects since 2011. 20+ international and domestic infrastructure projects in India and GCC Countries.",
      image: "/img/webp/ambica.webp",
    },
    {
      name: "GANBEI RESTAURANTS",
      description:
        " An upcoming brewery in Koramangala, Bengaluru, promises a unique and vibrant experience for beer enthusiasts. Situated in the heart of the city, it blends modern aesthetics and a trendy ambiance.",
      image: "/img/webp/ganbeii.webp",
    },
    {
      name: "PRESIDENCY HOSPITALITY AND RESORTS",
      description:
        " Premier hospitality company specializing in five-star category hostels and PG accommodations, redefining urban living with luxurious amenities.",
      image: "/img/webp/presidency-dorm.webp",
    },
  ];

  return (
    <>
      <div className="col-span-full gap-5 sm:gap-10  flex flex-col py-32 relative border-b-2 border-pgh-gold border-dashed">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="font-bdo font-medium text-pgh-gold uppercase text-xs tracking-widest">
            Beyond Exuberance
          </p>
          <p className="font-zodiak uppercase text-3xl font-semibold text-nowrap">
            other ventures
          </p>
        </div>

        <div className="w-full h-full flex sm:flex-row flex-col gap-3 ">
          {ventureList.map((venture) => (
            <div className="object-cover overflow-hidden w-full h-full flex-col flex gap-5 sm:py-0 py-5">
              <img
                src={venture.image}
                alt={venture.image}
                className="h-56 object-cover"
              />
              <div className="w-full flex flex-col">
                <p className="font-zodiak sm:text-center font-medium text-pgh-gold">
                  {venture.name}
                </p>
                <p className="w-full sm:font-medium font-semibold text-left">
                  {venture.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Section({
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
      </div>
      <div className="flex-[3] flex flex-col sm:flex-row sm:gap-14 gap-5">
        {images.slice(0, 1).map((image) => (
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

export default AboutPage;
