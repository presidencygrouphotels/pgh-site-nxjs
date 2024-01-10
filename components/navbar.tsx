"use client";
import { motion, useAnimation } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ReactNode, useState, useEffect, useRef } from "react";
import logo from "@/public/logo.svg";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

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

  // Create animation controls
  const menuAnimationControls = useAnimation();

  const handleMenuToggle = async () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("State : " + isMenuOpen);

    if (isMenuOpen) {
      // Animate out
      await menuAnimationControls.start({ opacity: 0, x: -100 });
    } else {
      // Animate in
      await menuAnimationControls.start({ opacity: 1, x: 0 });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (navbarRef.current === null) return;

      if (currentScrollY < previousScrollY.current || currentScrollY === 0) {
        navbarRef.current.style.opacity = "1";
      } else {
        navbarRef.current.style.opacity = "0";
        setIsMenuOpen(false);
        // Set opacity using framer motion controls
        menuAnimationControls.start({ opacity: 0, x: -100 });
      }

      previousScrollY.current = currentScrollY;
    };

    console.log("run");

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarRef, menuAnimationControls]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const itemsLeft: Item[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];
  const itemsRight: Item[] = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        ref={navbarRef}
        className={`z-[30] flex flex-row items-center justify-center ph fixed top-5 left-0 w-full text-sm tracking-tight transition-opacity duration-300`}
      >
        <div className="p-5 flex relative flex-row sm:w-[50%] w-full bg-pgh-black sm:justify-evenly justify-between items-center border-b-2 border-pgh-gold">
          <div className="hidden sm:flex gap-10 font-zodiak">
            {itemsLeft.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -100 }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: isMenuOpen ? index * 0.1 : 0 }}
              >
                <Link className="text-white" href={item.href}>
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <Image src={logo} width={150} alt="Presidency Group Hotels" />
          <div className="hidden sm:flex gap-10 font-zodiak">
            {itemsRight.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -100 }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: isMenuOpen ? index * 0.1 : 0 }}
              >
                <Link className="text-white" href={item.href}>
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <HamburgerMenuIcon
            className="sm:hidden"
            onClick={handleMenuToggle}
            color="white"
          />
          <motion.ul
            className={cn(
              "absolute top-16 left-0 w-full text-white text-center translate-y-full bg-pgh-black flex-col py-3",
              isMenuOpen && "flex"
            )}
            initial={{ opacity: 0, x: -100 }}
            animate={menuAnimationControls}
            >
            {itemsLeft.concat(itemsRight).map((item, index) => (
              <motion.li
                key={item.name}
                className="border-pgh-gold py-2 font-zodiak"
                initial={{ y: -20, opacity: 0 }}
                animate={isMenuOpen ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: isMenuOpen ? index * 0.1 : 0 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;