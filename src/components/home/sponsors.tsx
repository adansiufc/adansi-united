import React from "react";
import WidthConstraint from "../ui/width-constraint";
import Image from "next/image";
import { SPONSORS } from "@/lib/constants";
import { Button } from "../ui/button";

const Sponsors = () => {
  return (
    <section className="py-20 lg:py-32">
      <WidthConstraint className="max-w-[800px] space-y-10">
        <h2 className="text-3xl lg:text-4xl text-center uppercase text-[#276C25]">
          Sponsors & Partners
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-5 px-5">
          {SPONSORS.map((item) => (
            <Image
              key={item.path}
              src={item.path}
              width={120}
              height={120}
              alt={item.name}
              className="w-max"
            />
          ))}
        </div>
        <div className="flex gap-4 w-full py-20 flex-wrap items-center justify-center">
          <Button variant="outline" className="w-[250px]  bg-white/10">
            Registration
          </Button>
          <Button className="w-[250px]">Donate Now</Button>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Sponsors;
