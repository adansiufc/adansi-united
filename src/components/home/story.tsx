import React from "react";
import WidthConstraint from "../ui/width-constraint";
import { Card, CardContent } from "../ui/card";

const Story = () => {
  return (
    <section className="bg-[#212121]">
      <WidthConstraint className="w-full py-20 lg:py-32 min-h-[500px] lg:min-h-[700px] flex flex-col items-center justify-center border text-white text-center gap-10">
        <h2>UNCOVER THE STORY</h2>
        <p>
          <b>ADANSI UNITED FOOTBALL CLUB</b> plans to launch Football Training Camps for
          Kids in Q1 2026. The potential rewards of this new service are manifold.
          Firstly, it will enhance the club&apos;s reputation as a community-focused
          organization, demonstrating a commitment to nurturing local talent and providing
          opportunities for young people in the area.
        </p>
      </WidthConstraint>
      <div className="grid grid-cols-3">
        {Array.from({ length: 3 }).map((item, index) => (
          <Card key={index}>
            <CardContent className="p-10">
              <h3>REAL TRAINING</h3>
              <p>
                We train with the best methods that are used worldwide focusing on the
                development and growth of a 360 degree Soccer Player: technical, tactical,
                physical and psychological.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Story;
