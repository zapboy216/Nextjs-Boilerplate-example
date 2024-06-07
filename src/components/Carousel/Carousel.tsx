// components/Carousel/Carousel.tsx

'use client';

import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations('Carousel');

  const slides = [
    {
      videoUrl:
        'https://storage.googleapis.com/dinan/videos/AdobeStock_258094942_Video_4K_Preview.mp4',
      text: t('slide1'),
    },
    {
      videoUrl:
        'https://storage.googleapis.com/dinan/videos/AdobeStock_302844273_Video_4K_Preview.mp4',
      text: t('slide2'),
    },
    {
      videoUrl:
        'https://storage.googleapis.com/dinan/videos/AdobeStock_311933982_Video_4K_Preview.mp4',
      text: t('slide3'),
    },
    {
      videoUrl:
        'https://storage.googleapis.com/dinan/videos/AdobeStock_314969901_Video_4K_Preview.mp4',
      text: t('slide4'),
    },
  ];

  const overlayOpacity = 6; // Fixed opacity value (7 out of 10)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute left-0 top-0 size-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 size-full">
            <ReactPlayer
              url={slide.videoUrl}
              playing={index === currentSlide}
              muted
              loop
              width="100%"
              height="100%"
              className="object-cover"
            />
          </div>
          <div
            className="absolute inset-0 mx-10 bg-black"
            style={{ opacity: overlayOpacity / 10 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-poppins text-4xl text-white md:text-6xl lg:text-8xl">
              {slide.text}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
