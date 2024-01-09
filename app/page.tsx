import Image from "next/image";

import heroImage from "@/public/img/webp/hero.webp";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="grid grid-cols-4 sm:grid-cols-12 ph min-h-screen"
      style={{ background: "url(/pattern.svg)" }}
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}

function HeroSection() {
  return (
    <>
      <div className="col-span-full relative h-[80vh] sm:h-screen -mh ph">
        <Image
          alt="Launch Group Image"
          src={heroImage}
          fill
          placeholder="blur"
          priority
          style={{
            objectFit: "cover",
            filter: "brightness(87%)",
            overflow: "clip",
          }}
        />
        <div className="relative w-full h-full">
          <div className="bg-pgh-black absolute bottom-[20%] left-0 text-white p-5 w-full sm:w-fit inline-block ">
            <div className="font-zodiak uppercase font-semibold w-[19ch] text-2xl sm:text-3xl">
              Transforming Places into{" "}
              <span className="text-pgh-gold italic">legacies</span>
            </div>
            <div className="flex py-2 pb-8 font-bdo font-medium text-sm text-pgh-white text-opacity-80">
              <div className="sm:hidden flex-grow w-0">
                Top-notch infrastructure and integrated hospitality services.
              </div>
              <div className="hidden sm:flex flex-grow w-0 text-xs">
                We specialize in delivering an experience that embraces vibrant
                culture, offering top-notch infrastructure and seamlessly
                integrated hospitality services.
              </div>
            </div>
            <Link
              href={"/services"}
              className="bg-pgh-gray w-full flex p-3 justify-between items-center text-pgh-gold font-bdo uppercase font-bold"
            >
              <p>See Services</p>
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
        </div>
      </div>
    </>
  );
}

function ServicesSection() {
  return (
    <>
      <div className="col-span-full w-full h-fit flex flex-col sm:flex-row py-32 gap-10 sm:gap-20">
        <div className="flex-[2] flex flex-col gap-5 justify-start">
          <div className="flex flex-col justify-start items-center w-full sm:w-fit gap-1">
            <p className="font-bdo font-medium text-pgh-gold uppercase text-xs tracking-widest">
              Our services
            </p>
            <p className="font-zodiak uppercase text-3xl font-semibold text-nowrap">
              What do we do?
            </p>
          </div>
          <div className="w-full">
            Our Services primarily include hospitality. We curate everything
            from catering to Live Events for guests ranging from private groups
            and individuals to large corporate gatherings.
          </div>
          <Link
            href={"/services"}
            className="bg-pgh-gray w-full flex p-3 justify-between items-center text-pgh-gold font-bdo uppercase font-bold"
          >
            <p>See Services</p>
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
        <div className="flex-[3] w-full relative">
          <div className="h-[400px]">{""}</div>
          <Image
            src={"/img/webp/services.webp"}
            alt="About us"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
}

function AboutSection() {
  return (
    <>
      <div className="col-span-full w-full h-fit flex flex-col sm:flex-row py-32 gap-10 sm:gap-20 border-b-2 border-pgh-gold border-dashed">
        <div className="flex-[2] flex flex-col gap-5 justify-start">
          <div className="flex flex-col justify-start items-center w-full sm:w-fit gap-1">
            <p className="font-bdo font-medium text-pgh-gold uppercase text-xs tracking-widest">
              From vision to mission
            </p>
            <p className="font-zodiak uppercase text-3xl font-semibold text-nowrap">
              Who are we?
            </p>
          </div>
          <div className="w-full">
            Presidency Group Hotels epitomizes refined luxury and warm
            hospitality. Their vision is to set new standards in the industry by
            seamlessly blending opulence with personalized care. Committed to
            excellence, their mission is to offer impeccable service,
            sophisticated catering, and an authentic experience that captures
            the essence of Bengaluru's vibrant culture. With a focus on
            innovation and guest satisfaction, Presidency Group Hotels stands as
            a premier choice for those seeking a distinctive and indulgent
            experiences.
          </div>
        </div>
        <div className="flex-[3] w-full relative">
          <div className="h-[400px]">{""}</div>
          <Image
            src={"/img/webp/ambica.webp"}
            alt="About us"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
}
