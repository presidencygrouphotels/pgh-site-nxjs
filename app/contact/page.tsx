import Link from "next/link";
import { Children, ReactNode } from "react";

function ContactPage() {
  return (
    <>
      <main
        className="grid grid-cols-4 sm:grid-cols-12 min-h-screen ph"
        style={{ background: "url(/pattern.svg)" }}
      >
        <ContactSection />
      </main>
    </>
  );
}

function ContactSection() {
  return (
    <>
      <div className="h-full w-full col-span-full pt-36 ">
        <p className="font-zodiak font-medium text-2xl uppercase">Contact us</p>
        <div className="sm:grid sm:grid-cols-3 w-full flex flex-col gap-2 py-10">
          <ContactCard
            name="Downtown"
            type="Front desk"
            phoneno="919620535124"
            email="ravik@downtownpub.in"
            site="downtownpub.in"
          >
            Residency Plaza, Residency Rd, Bengaluru
          </ContactCard>
          <ContactCard
            type="Corporate Office"
            name="Ambica constructions & Contractors"
            phoneno="08041488868"
            email="admin@ambicaconstructions.co"
            site="ambicainc.com"
          >
            910, 9th floor Barton Center #84 M.G.Road, Bangalore - 560 001{" "}
          </ContactCard>
          <ContactCard
            type="Registered Office"
            name="Ambica constructions & Contractors"
            phoneno="08025588868"
            email="admin@ambicaconstructions.co"
            site="ambicainc.com"
          >
            57/6, Dinnepalya, Hundanahalli Grama, Begur, Hobli, Gottigere post,
            Bannerghata road, Bangalore - 560 083 Your Request
          </ContactCard>
        </div>
      </div>
    </>
  );
}

interface ContactCardProps {
  name: string;
  type: string;
  children: ReactNode;
  phoneno: string;
  email: string;
  site: string;
}
function ContactCard({
  name,
  type,
  phoneno,
  email,
  children,
  site,
}: ContactCardProps) {
  return (
    <>
      <div className="w-full col-span-1 flex flex-col h-full bg-black border-pgh-gold border-[1px] rounded-sm p-5">
        <p className="uppercase font-semibold text-pgh-white tracking-widest text-xs text-opacity-75 pb-1">
          {type}
        </p>
        <p className="heading text-pgh-gold text-2xl pb-4">{name}</p>
        <p className="text-pgh-white font-medium text-opacity-65 pb-2">
          {children}
        </p>
        <Link
          href={`tel:${phoneno}`}
          className="bg-pgh-gray w-full flex p-3 mb-3 justify-between items-center text-pgh-gold font-bdo uppercase font-bold"
        >
          {phoneno}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link
          href={`mailto:${email}`}
          className="bg-pgh-gray w-full flex p-3 mb-3 justify-between items-center text-pgh-gold font-bdo uppercase font-bold gap-10"
        >
          <p className="text-ellipsis overflow-hidden">{email}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        </Link>
        <Link
          href={`https://${site}`}
          className="bg-pgh-gray w-full flex p-3 justify-between items-center text-pgh-gold font-bdo uppercase font-bold"
        >
          {site}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        </Link>
      </div>
    </>
  );
}

export default ContactPage;
