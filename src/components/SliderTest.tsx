"use client";
import React, { useRef, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function KeenSliderDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 15 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const slides = [
    { text: "Slide 1", bg: "#f0f0f0" },
    { text: "Slide 2", bg: "#e0e0e0" },
  ];

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide"
            style={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 200,
              background: slide.bg,
            }}
          >
            {slide.text}
          </div>
        ))}
      </div>
      {/* Pagination Dots */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        {slides.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              margin: "0 6px",
              background: currentSlide === idx ? "#333" : "#bbb",
              transition: "background 0.3s",
              cursor: "pointer",
            }}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
}