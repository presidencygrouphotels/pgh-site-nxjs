"use client";
import Link from "next/link";
import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ReactNode, useState, useEffect, useRef } from "react";
import logo from "@/public/logo.svg";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

const itemsLeft: Item[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];
const itemsRight: Item[] = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

interface Item {
  name: string;
  href: string;
}
interface NavBarProps {
  Logo?: ReactNode;
  text?: string;
}

function NavBar({ text }: NavBarProps) {
  const previousScrollY = useRef(window.scrollY);
  const navbarRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (navbarRef.current === null) return;

      if (currentScrollY < previousScrollY.current || currentScrollY === 0) {
        navbarRef.current.style.opacity = "1";
      } else {
        navbarRef.current.style.opacity = "0";
      }

      previousScrollY.current = currentScrollY;
    };

    console.log("run");

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarRef]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`z-[30] flex flex-row items-center justify-center ph fixed top-5 left-0 w-full text-sm tracking-tight transition-opacity duration-300`}
      >
        <div className="p-5 flex relative flex-row sm:w-[50%] w-full bg-pgh-black sm:justify-evenly justify-between items-center border-b-2 border-pgh-gold">
          <div className="hidden sm:flex gap-10 font-zodiak">
            {itemsLeft.map((item) => (
              <Link className="text-white" href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
          <Image src={logo} width={150} alt="Presidency Group Hotels" />
          <div className="hidden sm:flex gap-10 font-zodiak">
            {itemsRight.map((item) => (
              <Link className="text-white" href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
          <HamburgerMenuIcon
            className="sm:hidden"
            onClick={handleMenuToggle}
            color="white"
          />
          <ul
            className={cn(
              "absolute bottom-0 left-0 w-full text-white text-center translate-y-full bg-pgh-black flex-col py-3",
              isMenuOpen ? "flex" : "hidden"
            )}
          >
            {itemsLeft.concat(itemsRight).map((item) => (
              <li key={item.name} className="border-pgh-gold py-2 font-zodiak">
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
