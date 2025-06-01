'use client';

import Club from "@/components/home/club";
import Dreams from "@/components/home/dreams";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import NewProduct from "@/components/home/new-products";
import Pillars from "@/components/home/pillars";
import Register from "@/components/home/register";
import Sponsors from "@/components/home/sponsors";
import Staff from "@/components/home/staff";
import Story from "@/components/home/story";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (searchParams.get('donation_complete') === 'true') {
      setShowThankYou(true);
    }
  }, [searchParams]);

  return (
    <main className="overflow-x-clip relative"> {/* Added relative for absolute positioning of message */}
      <Hero />
      <Story />
      <Pillars />
      <NewProduct />
      <Dreams />
      <Club />
      <Gallery />
      <Staff />
      <Register />
      <Sponsors />

      {showThankYou && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-2 z-50">
          Thank you for your donation!
        </div>
      )}
    </main>
  );
}
