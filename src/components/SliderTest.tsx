'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function KeenSliderDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 0 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const slides = [
    {
      image: 'banner_1.jpg',
      alt: 'Banner 1',
    },
    {
      image: 'banner_1.jpg',
      alt: 'Banner 2',
    }
  ];

  return (
    <div className="w-full mb-4">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 ${
              currentSlide === idx ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
}
