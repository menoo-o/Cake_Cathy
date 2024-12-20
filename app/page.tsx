
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import Thoughts from "@/components/thoughts/Thoughts";
import Location from "@/components/location/Location";
import Carousel from "@/components/carousel/Carousel";
export default function Home() {
  return (
    <>
       <Hero />
       <Carousel />
       <Location />
       <Thoughts />
      
    </>
  );
}
