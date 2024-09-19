"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import WidthConstraint from "./ui/width-constraint";
import { NAV_ITEMS, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import { BiX } from "react-icons/bi";

const Menu = ({ check }: { check: boolean }) => {
  return (
    <WidthConstraint className="w-full h-full flex items-center justify-center">
      <AnimatePresence>
        {check && (
          <motion.nav
            key="nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:min-w-[500px] space-y-10"
          >
            <ul className="flex flex-col uppercase  py-4 text-center gap-6 text-black h-full">
              {NAV_ITEMS.map((item, index) => {
                return (
                  <li
                    key={item.name}
                    className={cn(
                      " pb-5 lg:text-xl",
                      index === NAV_ITEMS.length - 1 ? "border-none " : "border-b"
                    )}
                  >
                    <Link href={item.path} className="">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              <div className="flex gap-6 flex-col">
                <Button variant="outline" className="font-[400] md:text-lg">
                  Registration
                </Button>
                <Button className="font-[400]  md:text-lg">Donate Now</Button>
              </div>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </WidthConstraint>
  );
};

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const navRef = useRef<HTMLHeadingElement | null>(null);
  const [check, setCheck] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setCheck(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY !== 0) {
        setCheck(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setCheck(false);
  }, [pathname]);

  return (
    <header
      ref={navRef}
      className={cn(
        `py-4 flex flex-col items-center justify-between z-[50] overflow-clip fixed left-0 top-0 w-screen transition-colors duration-300`,
        scrollPosition > 50 || check ? "bg-white shadow-lg" : "bg-transparent",
        check && "h-screen"
      )}
    >
      <WidthConstraint className="flex w-full items-center uppercase gap-4 justify-between">
        <Link href={"#"}>
          <Image alt="logo" src="/assets/logo.svg" width={60} height={60} />
        </Link>
        <nav className="hidden lg:flex gap-10 py-3 cursor-pointer items-center">
          {NAV_LINKS.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  scrollPosition > 50 || check ? "text-black" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="font-semibold items-center gap-5 h-full">
          <Button
            variant="link"
            onClick={() => setCheck(!check)}
            className={`uppercase flex gap-1 font-[400] ${
              scrollPosition > 50 || check ? "text-black" : "text-white"
            }`}
          >
            {!check ? (
              <>
                <span> Menu </span>
                <HiOutlineMenuAlt3
                  size={20}
                  className={`${
                    scrollPosition > 50 || check ? "text-black" : "text-white"
                  }`}
                />
              </>
            ) : (
              <BiX size={30} />
            )}
          </Button>
        </div>
      </WidthConstraint>
      {check && <Menu check={check} />}
    </header>
  );
};

export default Header;
