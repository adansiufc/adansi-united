import React from "react";
import WidthConstraint from "../ui/width-constraint";
import Image from "next/image";
import { Button } from "../ui/button";

const Dreams = () => {
  return (
    <section>
      <WidthConstraint className="text-center flex flex-col gap-10">
        <div className="space-y-4">
          <h2 className="text-4xl uppercase">Our Dreamers</h2>
          <p>JUST SOME OF OUR AMAZING GRADUATES</p>
          <p>GET INSPIRED</p>
        </div>

        <div className="grid grid-cols-4 gap-10">
          {Array.from({ length: 4 }).map((item, index) => (
            <Image
              key={index}
              alt=""
              src="/assets/dreamer1.png"
              width={200}
              className="w-full"
              height={200}
            />
          ))}
        </div>
        <Button variant="outline" className="w-max">
          Registration
        </Button>
      </WidthConstraint>
    </section>
  );
};

export default Dreams;
