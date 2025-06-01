import Club from "@/components/home/club";
import Dreams from "@/components/home/dreams";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import NewProduct from "@/components/home/new-products";
import Register from "@/components/home/register";
import Sponsors from "@/components/home/sponsors";
import Staff from "@/components/home/staff";
import Story from "@/components/home/story";
import ThankYouMessage from "@/components/thank-you-message";
import Pillars from "@/components/home/pillars";

export default function Home() {
  return (
    <main className="overflow-x-clip relative"> {/* Added relative for absolute positioning of message */}
      <ThankYouMessage />
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
    </main>
  );
}
