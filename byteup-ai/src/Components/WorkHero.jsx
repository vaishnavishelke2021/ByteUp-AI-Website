import { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryBtn from "../Components/PrimaryBtn";
import AnimatedCursor from "./AnimatedCursor";

gsap.registerPlugin(ScrollTrigger);

const WorkHero = () => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const [clientCount, setClientCount] = useState(0);
  const backgroundUrl =
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const contentRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 60%",
        },
      }
    );

    let ctx = gsap.context(() => {
      let countAnimation = { val: 0 };
      gsap.to(countAnimation, {
        val: 20,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 80%",
        },
        onUpdate: () => {
          setClientCount(Math.floor(countAnimation.val));
        },
      });
    }, countRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`relative min-h-[72vh] w-full py-10 sm:py-16 md:py-20 px-6 sm:px-12 md:px-[5.5rem] flex flex-col justify-center text-left bg-cover bg-center ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <AnimatedCursor isHovered={isHovered} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full md:w-[60%]" ref={contentRef}>
        <h1
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 md:mb-8"
        >
          <span className="text-white font-Syne">
            We build top-notch solutions for brand, web, and mobile apps.
          </span>
        </h1>

        <div className="text-white mb-9 md:mb-8">
          <h1 ref={countRef} className="text-4xl sm:text-5xl font-bold">
            {clientCount}+
          </h1>
          <h2 className="text-sm  mt-2 md:mt-1 uppercase font-Syne leading-4 font-normal tracking-[.1em] ml-1 text-white/70">
            Happy Clients and Counting
          </h2>
        </div>

        <Link to="/services">
          <PrimaryBtn btn="View Services" />
        </Link>
      </div>
    </div>
  );
};

export default WorkHero;
