import { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryBtn from "../Components/PrimaryBtn";
import AnimatedCursor from "./AnimatedCursor";

gsap.registerPlugin(ScrollTrigger);

const ServiceHero = () => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const backgroundUrl =
    "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjBjb21wYW55fGVufDB8fDB8fHww";

  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 60%",
        },
      }
    );
  }, []);

  return (
    <div
      className={`relative min-h-[72vh] w-full py-20 px-6 md:px-[5.5rem] flex flex-col justify-center text-left bg-cover bg-center ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <AnimatedCursor isHovered={isHovered} />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full sm:w-[80%] md:w-[60%]" ref={contentRef}>
        <h1
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-6"
        >
          <span className="text-white font-Syne">
            Elevate Your Business with Our Expert Services
          </span>
        </h1>
        <p
          className={`mb-9 font-normal text-base sm:text-lg md:text-[17px] leading-relaxed sm:leading-7 text-white/65 font-Archivo`}
        >
          From innovative solutions to hands-on support, we provide the
          expertise and tools you need to succeed in today's competitive market.
        </p>

        <Link to="/work">
          <PrimaryBtn btn="View Our Work" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceHero;
