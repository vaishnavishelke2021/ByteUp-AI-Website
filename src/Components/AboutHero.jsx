import { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import SecondaryBtn from "./SecondaryBtn";
import AnimatedCursor from "./AnimatedCursor";
import gsap from "gsap";

const AboutHero = () => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  // Refs for elements to animate
  const headingRef = useRef(null);
  const paragraphRef1 = useRef(null);
  const paragraphRef2 = useRef(null);
  const imageRef = useRef(null); // New ref for the image

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // Animation sequence
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        paragraphRef1.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        paragraphRef2.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        imageRef.current, // Adding image animation
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=1.3"
      );
  }, []);

  return (
    <div
      className={`w-full h-auto md:h-[85vh] flex flex-col md:flex-row justify-between items-center px-4 md:px-[5.5rem] py-10 md:py-20 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <AnimatedCursor isHovered={isHovered} />
      <div className="w-full md:w-[47%] h-auto mb-8 md:mb-0">
        <img
          ref={imageRef} // Assign the ref to the image
          src="https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.webp?b=1&s=612x612&w=0&k=20&c=C4KGssB_GUCjYp_XFzhHJcI1TX35Q6gM9hl0YwfgKWo="
          alt="Calendar Planning"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full md:w-[45%] text-center md:text-left">
        <h2
          className={`animate-heading text-start md:text-center text-[13px] uppercase mb-1 font-Syne leading-4 font-normal ml-1 tracking-[.20em] ${
            theme === "light" ? "text-gradient-css opacity-90" : "text-white/30"
          }`}
        >
          Our Story
        </h2>
        <h1
          ref={headingRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-3xl text-start md:text-center md:text-5xl font-semibold mb-6 leading-[40px] md:leading-[3rem] font-Syne"
        >
          We Help You Accelerate Growth with Social Media
        </h1>
        <p
          ref={paragraphRef1}
          className={`mb-2 text-start md:text-center text-base md:text-[17px] font-normal leading-6 ${
            theme === "light" ? "text-black/50" : "text-white/40"
          } font-Archivo`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          tenetur tempore placeat repellendus repudiandae nesciunt et, sequi
          atque, sint qui expedita eligendi veritatis officiis cum nam
          exercitationem! Maxime, labore soluta. Praesentium quasi laudantium
          ea, veritatis omnis as
        </p>
        <p
          ref={paragraphRef2}
          className={`mb-6 text-start md:text-center text-base md:text-[17px] font-normal leading-6 ${
            theme === "light" ? "text-black/50" : "text-white/40"
          } font-Archivo`}
        >
          Our team of experienced social media experts understands the
          ever-evolving landscape of social media and stays up-to-date with the
          latest trends, algorithms, and best practices. the latest trends,
          algorithms, and best practices.
        </p>
        <Link to="/services" className="flex justify-start">
          <SecondaryBtn btn="Learn more" />
        </Link>
      </div>
    </div>
  );
};

export default AboutHero;
