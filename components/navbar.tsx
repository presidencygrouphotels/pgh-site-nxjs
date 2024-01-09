"use client";
import Link from "next/link";
import Image from "next/image";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ReactNode, useState } from "react";
import logo from "@/public/logo.svg";
import { cn } from "@/utils/cn";

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

//TODO: Mobile fix
function NavBar({ text }: NavBarProps) {
  return (
    <>
      <nav className="z-[30] flex flex-row items-center justify-center ph fixed top-5 left-0 w-full text-sm tracking-tight">
        <div className=" p-5 flex  relative flex-row sm:w-[50%] w-full bg-pgh-black sm:justify-evenly justify-between items-center border-b-2 border-pgh-gold">
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
          <HamburgerMenuIcon className="sm:hidden" color="white" />
          <div
            className={cn(
              "absolute top-0 left-0 text-pgh-white flex-col translate-y-full bg-pgh-black w-full text-center hidden"
            )}
          >
            {itemsLeft.concat(itemsRight).map((item) => (
              <Link href={item.href}>{item.name}</Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
