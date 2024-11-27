import React from "react";
import WidthConstraint from "../ui/width-constraint";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Club = () => {
  const cards = [
    {
      title: "OUR TEAMS",
      description:
        "Explore the teams within the Adansi Academy, ranging from youth squads to our main team. Each team is dedicated to excellence and growth in their sport.",
      icon: "/assets/icons/people.svg",
      image: "/assets/gallery-1.png",
    },
    {
      title: "REGISTRATION",
      description:
        "Become a part of the Adansi Academy community. Whether you're an athlete, coach, or supporter, there are numerous ways to join our journey.",
      icon: "/assets/icons/register.svg",
    },
    {
      title: "LOCATIONS",
      description:
        "Introducing Adansi United Football Club, a vibrant and dynamic sports club located in the heart of Obuasi,Ghana.",
      icon: "/assets/icons/location.svg",
      image: "/assets/gallery-2.png",
    },
    {
      title: "COACHING STAFF",
      description:
        "Our experienced coaches are committed to nurturing talent and fostering growth. Learn more about the professionals guiding our athletes.",
      icon: "/assets/icons/people.svg",
    },
    {
      title: "PROGRAMS",
      description:
        "Discover the diverse programs we offer, designed to develop various aspects of our athletes' careers. From training sessions to educational workshops, we provide comprehensive support.",
      icon: "/assets/icons/programs.svg",
      image: "/assets/gallery-3.png",
    },
    {
      title: "TRAINING SCHEDULE",
      description:
        "Stay informed about our training schedule. Our structured sessions are designed to keep our athletes at their best.",
      icon: "/assets/icons/train.svg",
    },
  ];
  return (
    <section id="club" className="scroll-m-20 py-20">
      <WidthConstraint className="space-y-10">
        <h2 className="text-3xl lg:text-4xl uppercase text-[#276C25] text-center">
          Club
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((item, index) => (
            <Card
              key={item.title}
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
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt={item.title}
                />
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
