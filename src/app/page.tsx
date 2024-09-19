import Club from "@/components/home/club";
import Dreams from "@/components/home/dreams";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import NewProduct from "@/components/home/new-products";
import Pillars from "@/components/home/pillars";
import Sponsors from "@/components/home/sponsors";
import Story from "@/components/home/story";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Story />
      <Pillars />
      <NewProduct />
      <Dreams />
      <Club />
      <Gallery />
      <Sponsors />
    </main>
  );
}
