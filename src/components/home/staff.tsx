import React from "react";
import WidthConstraint from "../ui/width-constraint";
import Image from "next/image";

const Staff = () => {
  const staff = [
    {
      name: "CHIEF AFOAKWAH OBENG",
      image: "/assets/coach-chairman.jpg",
    },
    {
      image: "/assets/head-coach.jpg",
      name: "ALBERT ASARE",
    },
    {
      name: "Assistant Coach",
      image: "/assets/assistant.jpg",
    },
  ];
  return (
    <section className="py-20 lg:py-32 bg-[url('/assets/field.png')] bg-fixed lg:min-h-[900px] flex items-center justify-center bg-cover bg-center">
      <WidthConstraint className="space-y-10 w-full">
        <h2 className="text-3xl lg:text-4xl text-center uppercase text-white">
          COACHING STAFF
        </h2>
        <div className="grid grid-cols-1 max-w-[400px] lg:max-w-full  mx-auto lg:grid-cols-3 gap-6">
          {staff.map((item, index) => (
            <div key={index} className="relative">
              <Image
                alt=""
                src={item.image}
                width={800}
                className="w-full"
                height={800}
                priority
              />
              <div className="absolute bottom-0 w-full left-0 p-4 ">
                <div className="bg-white w-full p-4 rounded-full text-center uppercase font-semibold text-primary">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Staff;
