
'use client'

import { useState } from 'react';
import './carousel.css';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const images = [
    {
      src: '/shop.jpg',
      text: 'Image 1 description',
    },
    {
      src: '/hero.jpg',
      text: 'Image 2 description',
    },
    {
      src: '/shop.jpg',
      text: 'Image 3 description',
    },
  ];

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const threshold = 50; // Minimum swipe distance
    if (touchStart - touchEnd > threshold) {
      // Swipe left
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
    if (touchEnd - touchStart > threshold) {
      // Swipe right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (

    <>
    <main >
        <div className="carousel-container" >
            <h2>latest news</h2>
            <div className="carousel-track"
                
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {images.map((image, index) => (
                <div className="carousel-slide" key={index}>
                    <img src={image.src} alt={`Slide ${index}`} />
                    <p>{image.text}</p>
            </div>
            ))}
            </div>
        </div>

      
    {/* Desktop Grid */}
    <section className='desktop'>
        <h2>latest news</h2> 
    <div className="desktop-look">
            {images.map((image, index) => (
            <div className="grid-item" key={index}>
                <img src={image.src} alt={`Grid Image ${index}`} />
                <p>{image.text}</p>
            </div>
            ))}
        </div>
    </section>
     
       
        
      
    </main>


    </>
    
    // desktop view
  );
}
