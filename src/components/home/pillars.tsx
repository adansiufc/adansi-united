'use client';

import React from "react";
import WidthConstraint from "../ui/width-constraint";

const Pillars = () => {
  const pillars = [" DISCOVERY", "DEVELOPMENT", "OPPORTUNITIES"];
  return (
    <section className="bg-[url('/assets/pillar.png')] bg-fixed min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat">
      <WidthConstraint className="w-full text-white text-center">
        <div className="space-y-10">
          <h2 className="text-3xl lg:text-4xl uppercase">OUR TALENT PILLARS</h2>
          <div className=" grid grid-cols-1 gap-5 md:grid-cols-3">
            {pillars.map((item) => (
              <div key={item} className="gap-2 flex items-center justify-center flex-col">
                <div className="h-[5px] w-[50px] bg-[#1CBA18]"></div>
                <h3 className="text-3xl lg:text-4xl uppercase">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Pillars;
