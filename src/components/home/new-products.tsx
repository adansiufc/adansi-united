'use client';

import React, { useState } from "react";
import WidthConstraint from "../ui/width-constraint";
import Image from "next/image";
import { Button } from "../ui/button";
import ResponsiveModal from "../ui/responsive-dialog";
// import DonateButton from "../ui/donate-btn";

export default function NewProduct() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="py-20 lg:py-32">
      <ResponsiveModal
        showModal={showModal}
        setShowModal={setShowModal}
        className="py-10 px-5 lg:px-10"
      >
        <div className="flex items-center justify-center hide-scrollbar space-y-5 flex-col">
          <Image alt="logo" src="/assets/logo.svg" width={80} height={80} />
          <p>
            <span className="font-semibold">
              Adansi Academy Sport Village – A Hub for African Talent
            </span>{" "}
            and Sustainability Coming soon to Ghana, the Adansi Academy Sport Village is a
            groundbreaking project that will set new standards for sports development and
            sustainability across Africa. The village will feature a cutting-edge
            multi-sport stadium, eco-friendly greenhouse facilities, and world-class
            training centers. It will serve as a premier training ground for young
            athletes in various sports while promoting sustainable agriculture and
            community empowerment. By integrating sports excellence with environmental
            responsibility, Adansi Academy Sport Village aims to nurture the next
            generation of African sports talent and inspire long-term positive change in
            the region.
            <br />
            <br />
            The Adansi Academy Sport Village is designed to be more than just a football
            training ground—it will be a multi-sport complex that nurtures athletes in
            disciplines such as athletics, basketball, volleyball, and tennis. The village
            will include a multi-purpose stadium equipped with modern amenities, a
            high-performance training center with fitness and rehabilitation facilities,
            and residential accommodations for athletes and coaches. Additionally, the
            eco-friendly greenhouse will provide organic food for the academy, while
            community programs will educate locals on sustainable farming practices. This
            visionary project combines sports, health, and sustainability to create a
            thriving hub of athletic and community development in Africa.
          </p>
        </div>
      </ResponsiveModal>
      <WidthConstraint className="space-y-10">
        {/* <h2 className="text-3xl lg:text-4xl uppercase text-[#276C25]">NEW PROJECT</h2> */}
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
          <div className="lg:col-span-4 space-y-5">
            <h2 className="text-3xl text-center lg:text-start  lg:text-4xl uppercase text-[#276C25]">
              NEW PROJECT
            </h2>
            <div className="text-center lg:text-start ">
              <p>
                <span className="font-semibold">
                  Adansi Academy Sport Village – A Hub for African Talent
                </span>{" "}
                and Sustainability Coming soon to Ghana, the Adansi Academy Sport Village
                is a groundbreaking project that will set new standards for sports
                development and sustainability across Africa. The village will feature a
                cutting-edge multi-sport stadium, eco-friendly greenhouse facilities, and
                world-class training centers. It will serve as a premier training ground
                for young athletes in various sports while promoting sustainable
                agriculture and community empowerment. By integrating sports excellence
                with environmental responsibility, Adansi Academy Sport Village aims to
                nurture the next generation of African sports talent and inspire long-term
                positive change in the region.
              </p>
              <Button
                onClick={() => setShowModal(true)}
                variant="link"
                className="px-0 text-primary"
              >
                Read More {">"}
              </Button>
            </div>
            {/* <div className="flex gap-4 w-full flex-wrap justify-center lg:justify-start">
              <Button variant="outline" className="w-[250px] border-primary text-primary">
                Registration
              </Button>
              <DonateButton className="w-[250px]" />
            </div> */}
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
