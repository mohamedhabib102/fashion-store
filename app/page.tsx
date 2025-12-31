import Collections from "@/components/home/Collections";
import Hero from "@/components/home/Hero";
import OurFashionDesign from "@/components/home/OurFashionDesign";
import ThisWeek from "@/components/home/ThisWeek";

export default function Home() {
  return (
    <main>
      <Hero/>
      <ThisWeek/>
      <Collections/>
      <OurFashionDesign/>
    </main>
  );
}
