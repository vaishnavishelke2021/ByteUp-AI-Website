import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import "../../src/index.css";
import PrimaryBtn from "./PrimaryBtn";
import AnimatedCursor from "./AnimatedCursor";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScaled, setIsScaled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      image:
        "url('https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      text: "New Generation of Technology and Design",
    },
    {
      image:
        "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      text: "Software & Tech Development for the Future",
    },
  ];

  const handleNext = () => {
    setIsScaled(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 200);
  };

  const handlePrev = () => {
    setIsScaled(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsScaled(false);
    setTimeout(() => {
      setIsScaled(true);
    }, 50);
  }, [currentSlide]);

  return (
    <div
      className={`relative w-full h-screen overflow-hidden transition-opacity duration-1000 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } ${isScaled ? "opacity-100" : "opacity-0"}`}
    >
      <AnimatedCursor isHovered={isHovered}/>
      <div
        className={`absolute inset-0 bg-cover bg-center transform transition-transform duration-[60s] ease-out ${
          isScaled ? "scale-150" : "scale-100"
        }`}
        style={{
          backgroundImage: slides[currentSlide].image,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-transparent"></div>

      <div className="absolute px-5 inset-0 w-full md:w-[45%] md:ml-56 flex flex-col items-start justify-center">
        <h1
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="cursor-hover text-[35px] leading-[40px] md:leading-normal md:text-4xl lg:text-5xl xl:text-6xl font-Syne text-white font-bold text-start"
        >
          {slides[currentSlide].text}
        </h1>
        <div className="mt-6 md:mt-10">
          <Link to="/contact">
            <PrimaryBtn btn="Get Started" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 flex space-x-4">
        <button
          onClick={handlePrev}
          className="bg-white/15 text-white w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-gradient-to-r from-purple to-sky transition duration-300 flex items-center justify-center"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="bg-white/15 text-white w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-gradient-to-r from-purple to-sky transition duration-300 flex items-center justify-center"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Hero;