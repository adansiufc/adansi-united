"use client";

import React, { useEffect, useState } from "react";
import WidthConstraint from "../ui/width-constraint";
import { Button } from "../ui/button";
import Image from "next/image";
import { Circle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import DonateButton from "../ui/donate-btn";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const images = [
  {
    name: "Academy Sports Village",
    image: "/assets/hero.png",
    subtitle: "Coming Soon!",
  },
  {
    name: "UNITED FC",
    image: "/assets/hero2.png",
    subtitle:
      "Adansi United Football Club is dedicated to creating a platform where dreams meet reality. We are not just playing football, we are building futures, one goal at a time.",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative justify-center bg-black/75 bg-center bg-no-repeat bg-cover">
      <AnimatePresence>
        {images.map(
          (src, index) =>
            index === currentImage && (
              <motion.div
                key={src.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  alt="hero"
                  src={src.image}
                  fill
                  objectFit="cover"
                  className="object-cover"
                />
              </motion.div>
            )
        )}
      </AnimatePresence>
      <WidthConstraint className="w-full text-white text-center z-10 absolute  ">
        <div className="flex flex-col items-center justify-center gap-10">
          <Image alt="logo" src="/assets/logo.svg" width={150} height={150} />
          <h1 className="text-4xl sm:text-5xl leading-[1.2em] md:text-7xl font-semibold uppercase max-w-[700px]">
            <Balancer>
              ADANSI {currentImage === 1 && <br />} {images[currentImage].name}
            </Balancer>
          </h1>
          <p className="max-w-[650px]">
            <Balancer>{images[currentImage].subtitle}</Balancer>
          </p>
          <div className="flex gap-4 w-full flex-wrap items-center justify-center">
            <Button
              asChild
              variant="outline"
              className="w-[250px]  bg-white/10"
            >
              <Link href="#register">Registration</Link>
            </Button>
            <DonateButton className="w-[250px]" />
          </div>
          <div className="flex gap-2">
            {images.map((_, index) => (
              <Circle
                key={index}
                size={8}
                fill="white"
                className={cn(
                  "transition-opacity",
                  index === currentImage ? "opacity-100" : "opacity-20"
                )}
              />
            ))}
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
