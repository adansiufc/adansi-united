'use client';

import React from "react";
import WidthConstraint from "../ui/width-constraint";
import { Card, CardContent } from "../ui/card";

const Story = () => {
  const content = [
    {
      title: "REAL TRAINING",
      description: `At Adansi United, we use world-class methods to develop the complete footballer, focusing on technical, tactical, physical, and psychological growth. Our holistic approach ensures players are prepared to excel both locally and internationally.`,
      color: "#276C25",
    },
    {
      title: "TRUE SOCCER",
      description: `We are one of the few clubs in Ghana offering year-round football programs, blending global best practices with African football talent. Our methods reflect those of the top football clubs worldwide, shaping future stars.`,
      color: "#212121",
    },
    {
      title: "IMPROVING LIVES",
      description: `Adansi United opens doors to professional and international opportunities through partnerships with top clubs and scouts. We develop not just players, but leaders, instilling values of excellence, discipline, and leadership for success on and off the field.`,
      color: "#393939",
    },
  ];
  return (
    <section className="bg-[#212121]">
      <WidthConstraint className="w-full py-20 lg:py-32 min-h-[500px] lg:min-h-[700px] flex flex-col items-center justify-center text-white text-center gap-10">
        <h2 className="text-3xl lg:text-4xl">UNCOVER THE STORY</h2>
        <p className="md:max-w-[600px] lg:max-w-[800px]">
          <b>ADANSI UNITED FOOTBALL CLUB</b> plans to launch Football Training Camps for
          Kids in Q1 2026. The potential rewards of this new service are manifold.
          Firstly, it will enhance the club&apos;s reputation as a community-focused
          organization, demonstrating a commitment to nurturing local talent and providing
          opportunities for young people in the area.
        </p>
      </WidthConstraint>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {content.map((item, index) => (
          <Card
            key={index}
            style={{
              background: item.color,
            }}
            className="min-h-[300px] flex items-center justify-center"
          >
            <CardContent className="p-10 lg:p-20 text-white space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="h-[5px] w-[50px] bg-white"></div>
              </div>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Story;
