import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slides = [
  {
    title: "Start a New Journey",
    subtitle: "The first step to a smarter decision begins here",
    image: "https://i.ibb.co/B5q9ts40/image1.webp"
  },
  {
    title: "Your Dream Destination",
    subtitle: "Begin your journey with us today",
    image: "https://i.ibb.co/fdP7F8H0/image2.webp"
  },
  {
    title: "Explore the Extraordinary",
    subtitle: "Every click reveals a new surprise",
    image: "https://i.ibb.co/DDxDtbVP/image3.webp"
  },
  {
    title: "Fuel Your Passion",
    subtitle: "Turn ideas into impactful realities",
    image: "https://i.ibb.co/1BxfCvm/image4.jpg"
  },
  {
    title: "Inspire. Create. Grow.",
    subtitle: "Discover a world of endless opportunities",
    image: "https://i.ibb.co/nq5FW5Zb/image5.webp"
  }
];
const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next)
  };
  return (
    <div className=' my-5'>
      <div className="relative ">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative ">
              <div className="h-[400px] w-full bg-center bg-cover " style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${slide.image})`
              }}>
                <div className="flex items-center justify-center h-full text-center text-white px-5">
                  {index === activeSlide && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                      <p className="text-lg md:text-2xl">{slide.subtitle}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Banner;