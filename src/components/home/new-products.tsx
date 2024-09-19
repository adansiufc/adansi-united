import React from "react";
import WidthConstraint from "../ui/width-constraint";
import Image from "next/image";
import { Button } from "../ui/button";

export default function NewProduct() {
  return (
    <section className="py-20 lg:py-32">
      <WidthConstraint className="space-y-10">
        <h2 className="text-3xl lg:text-4xl uppercase text-[#276C25]">NEW PROJECT</h2>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 items-center">
          <div className="lg:col-span-2">
            <Image
              src="/assets/project.svg"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
          </div>
          <div className="lg:col-span-4 space-y-10">
            <div className="text-center lg:text-start ">
              <p>
                The ADANSI UNITED FOOTBALL CLUB plans to launch Football Training Camps
                for Kids in Q1 2026. The potential rewards of this new service are
                manifold. Firstly, it will enhance the club&apos;s reputation as a
                community-focused organization, demonstrating a commitment to nurturing
                local talent and providing opportunities for young people in the area.{" "}
              </p>
              <Button variant="link" className="px-0 text-primary">
                Read More {">"}
              </Button>
            </div>
            <div className="flex gap-4 w-full flex-wrap justify-center lg:justify-start">
              <Button variant="outline" className="w-[250px] border-primary text-primary">
                Registration
              </Button>
              <Button className="w-[250px]">Donate Now</Button>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
