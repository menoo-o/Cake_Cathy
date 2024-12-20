
import Hero from "@/components/Hero/Hero";

import Thoughts from "@/components/thoughts/Thoughts";
import Location from "@/components/location/Location";
import Carousel from "@/components/carousel/Carousel";
import Offering from "@/components/offerings/Offering";
import Sketch from "@/components/sketch/Sketch";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
    
        <Navbar />
       <Hero />
       <Offering />
       <Location />
       {/* <Carousel /> */}
       
       <Thoughts />
       <Sketch />
    </>
  );
}
