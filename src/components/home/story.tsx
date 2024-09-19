import React from "react";
import WidthConstraint from "../ui/width-constraint";
import { Card, CardContent } from "../ui/card";

const Story = () => {
  const content = [
    {
      title: "REAL TRAINING",
      description: ` We train with the best methods that are used worldwide focusing on the
                development and growth of a 360 degree Soccer Player: technical, tactical,
                physical and psychological.`,
      color: "#276C25",
    },
    {
      title: "TRUE SOCCER",
      description: `We are the unique Soccer Club in San Antonio offering a year-round training program and we use the methodologies of the best Soccer
Clubs in the world.`,
      color: "#212121",
    },
    {
      title: "IMPROVING LIVES",
      description: `Our Soccer Players club san antonio is all about acquiring habits in excellence and leadership for their personal growth as people and as soccer players.`,
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
