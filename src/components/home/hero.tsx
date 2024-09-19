"use client";
import React, { useEffect, useState } from "react";
import WidthConstraint from "../ui/width-constraint";
import { Button } from "../ui/button";
import Image from "next/image";
import { Circle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const images = ["/assets/hero.png", "/assets/hero.png", "/assets/hero.png"];

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
                key={src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  alt="hero"
                  src={src}
                  layout="fill"
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
          <h1 className="text-5xl leading-[1.2em] md:text-7xl font-semibold">
            ADANSI <br /> ACADEMY PROJECT
          </h1>
          <p>Coming Soon!</p>
          <div className="flex gap-4 w-full flex-wrap items-center justify-center">
            <Button variant="outline" className="w-[250px]  bg-white/10">
              Registration
            </Button>
            <Button className="w-[250px]">Donate Now</Button>
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
