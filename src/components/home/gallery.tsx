"use client";
import React from "react";
import WidthConstraint from "../ui/width-constraint";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { GALLERY } from "@/lib/constants";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="py-20">
      <WidthConstraint className="space-y-10">
        <h2 className="text-3xl lg:text-4xl uppercase text-[#276C25]">
          OUR GALLERY
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="">
            {[...GALLERY, ...GALLERY].map((item) => (
              <CarouselItem
                key={item}
                className="max-w-[330px] md:max-w-[390px] px-6"
              >
                <Card className="w-[300px] md:w-[350px] bg-none rounded-none shadow-xl border-none p-0 transition-transform ease-out duration-500">
                  <CardContent className="p-0 aspect-square ">
                    <Image
                      src={item}
                      alt={item}
                      width={300}
                      height={300}
                      className="object-cover w-full"
                      priority
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </WidthConstraint>
    </section>
  );
};

export default Gallery;
