import React from "react";
import WidthConstraint from "../ui/width-constraint";

const Pillars = () => {
  return (
    <section className="bg-[url('/assets/pillar.png')] min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat">
      <WidthConstraint className="border w-full text-white text-center">
        <div className="border space-y-10">
          <h2 className="text-3xl lg:text-4xl uppercase">Our Pillars</h2>
          <div className=" grid grid-cols-3">
            <h3>Donations</h3>
            <h3>Donations</h3>
            <h3>Donations</h3>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Pillars;
