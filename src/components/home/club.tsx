import React from "react";
import WidthConstraint from "../ui/width-constraint";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Club = () => {
  const cards = [
    {
      title: "OUR TEAMS",
      description: "ADANSI SOCCER ACADEMY TEAMS U9 TO U19",
      icon: "/assets/icons/people.svg",
      image: "/assets/gallery-1.png",
    },
    {
      title: "REGISTRATION",
      description: "2024-2025 FORMS & INFOMATION",
      icon: "/assets/icons/people.svg",
    },
    {
      title: "LOCATIONS",
      description: "TRAINING & GAME LOCATIONS",
      icon: "/assets/icons/people.svg",
      image: "/assets/gallery-2.png",
    },
    {
      title: "COACHING STAFF",
      description: "ADANSI SOCCER ACADEMY CERTIFIED COACHES",
      icon: "/assets/icons/people.svg",
    },
    {
      title: "PROGRAMS",
      description: "ADANSI SOCCER ACADEMY PROGRAMS",
      icon: "/assets/icons/people.svg",
      image: "/assets/gallery-3.png",
    },
    {
      title: "TRAINING SCHEDULE",
      description: "SCHEDULE FOR 2024 - 2025 SEASON",
      icon: "/assets/icons/people.svg",
    },
  ];
  return (
    <section className="py-20">
      <WidthConstraint className="space-y-10">
        <h2 className="text-3xl lg:text-4xl uppercase text-[#276C25] text-center">
          Club
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((item, index) => (
            <Card
              className={cn(
                "bg-none rounded-none shadow-xl relative border-none transition-transform ease-out duration-500",
                index % 2 === 0 ? "bg-[#1cba18cc]" : "bg-[#F3BC63]"
              )}
            >
              {index % 2 === 0 && (
                <Image
                  className="absolute top-0 right-0 -z-10 w-full h-full"
                  src="/assets/gallery-1.png"
                  width={200}
                  height={200}
                  alt={item.title}
                />
              )}
              <CardContent className="min-h-[300px] border p-10 flex items-center gap-2 text-white justify-center flex-col text-center aspect-square ">
                <Image src={item.icon} width={40} height={40} alt={item.title} />
                <h4 className="font-bold text-xl">{item.title}</h4>
                <p className="max-w-[200px] text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Club;
