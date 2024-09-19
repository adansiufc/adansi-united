import React from "react";
import WidthConstraint from "../ui/width-constraint";
import Image from "next/image";
import { Button } from "../ui/button";

export default function NewProduct() {
  return (
    <section className="py-20 lg:py-32">
      <WidthConstraint>
        <h2>NEW PROJECT</h2>
        <div className="flex gap-10">
          <Image src="/assets/project.svg" width={200} height={200} alt="" />
          <div>
            <div>
              <p>
                The ADANSI UNITED FOOTBALL CLUB plans to launch Football Training Camps
                for Kids in Q1 2026. The potential rewards of this new service are
                manifold. Firstly, it will enhance the club&apos;s reputation as a
                community-focused organization, demonstrating a commitment to nurturing
                local talent and providing opportunities for young people in the area.{" "}
              </p>
              <Button variant="link">Read More {">"}</Button>
            </div>
            <div>
              <Button>Registration</Button>
              <Button>Donate Now</Button>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
