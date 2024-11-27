import React from "react";
import WidthConstraint from "../ui/width-constraint";
import Image from "next/image";
import { Button } from "../ui/button";
import { DREAMERS } from "@/lib/constants";
import Link from "next/link";

const Dreams = () => {
  return (
    <section className="py-20">
      <WidthConstraint className="text-center flex flex-col gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl uppercase text-[#276C25]">
            Our Dreamers
          </h2>
          <div className="text-[16px] space-y-2">
            <p>
              A glimpse into the lives of our athletes who are striving to make
              their dreams come true.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DREAMERS.map((item) => (
            <Image
              key={item}
              alt=""
              src={item}
              width={1000}
              className="w-full"
              height={1000}
            />
          ))}
        </div>
        <div className="justify-center lg:justify-start flex">
          <Button
            asChild
            variant="outline"
            className="w-[250px]  border-primary text-primary"
          >
            <Link href="#register">Registration</Link>
          </Button>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Dreams;
