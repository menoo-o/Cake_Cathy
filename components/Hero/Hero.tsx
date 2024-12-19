import React from 'react'
import './hero.css'
import Image from 'next/image';
import Button from "@/components/button/Button";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        {/* Higher z-index - text appears large in white - left middle */}
        <div className="hero-tex">
          <h2>
            Experience the Extraordinary<br />
            <span>Your Journey Starts Here</span>
          </h2>
          <Button />
        </div>

        <div className="hero-img">
          <Image
            src="/hero.jpg"
            width={450}
            height={500}
            alt="hero img"
          />
        </div>
      </div>
    </>
  );
}
