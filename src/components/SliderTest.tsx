'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useTranslations } from 'next-intl';

export default function KeenSliderDemo() {
  const t = useTranslations('Global');
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
    }, 15000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  // Each banner object supports desktop/mobile images and optional text overlay.
  const slides = [
    {
      desktopImage: 'banner_1.jpg',
      mobileImage: 'banner_1_mobile.jpg',
      alt: 'Banner 1',
      text: t('digital_banking_services'),
      textColor: 'text-white'
    },
    {
      desktopImage: 'banner_2.png',
      mobileImage: 'banner_2.png', // Assuming you have a tall mobile image here too
      alt: 'Banner 2',
      text: t('enjoy_digital'),
      textColor: 'text-white'
    },
    // Add more slides as needed…
  ];

  return (
    <div className="w-full mb-4">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            // --- CHANGE IS ON THIS LINE ---
            className="keen-slider__slide relative flex items-center justify-center 
                       aspect-[9/16] md:aspect-[16/9] lg:aspect-[21/9]" // Use aspect ratio instead of fixed height
            // REMOVED: h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]
          >
            <picture className="w-full h-full">
              <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
              <img
                src={slide.desktopImage}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </picture>
            {slide.text && (
              <div className={`absolute left-6 bottom-10 z-10 ${slide.textColor} text-xl sm:text-2xl md:text-3xl font-bold`}>
                {slide.text}
              </div>
            )}
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