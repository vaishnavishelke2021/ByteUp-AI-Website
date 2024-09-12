import { useEffect, useRef, useContext, useState } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { ThemeContext } from "../Context/ThemeContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedCursor from "./AnimatedCursor";

gsap.registerPlugin(ScrollTrigger);

const ReachOutSection = () => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  // Refs for animation targets
  const emailRef = useRef(null);
  const locationRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    // Ensure the refs are not null
    if (emailRef.current && locationRef.current && phoneRef.current) {
      const tl = gsap.timeline({
        defaults: { duration: 1.2, opacity: 0, y: 20, ease: "power3.out" },
        scrollTrigger: {
          trigger: ".reach-out-section",
          start: "top 80%",
          end: "bottom top",
        },
      });

      tl.from(emailRef.current, { opacity: 0, y: 20 })
        .from(locationRef.current, { opacity: 0, y: 20 }, "-=0.8")
        .from(phoneRef.current, { opacity: 0, y: 20 }, "-=0.8");
    }
  }, []);

  return (
    <div
      className={`p-6 sm:p-8 px-6 lg:px-[5.5rem] lg:mt-20 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } reach-out-section`}
    >
      <h2
        className={`animate-heading text-[10px] sm:text-[13px] uppercase mb-1 font-Syne leading-4 font-normal ml-1 tracking-[.20em] ${
          theme === "light" ? "text-gradient-css opacity-90" : "text-white/30"
        }`}
      >
        Reach out to us
      </h2>
      <h3
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="text-left w-fit text-2xl sm:text-4xl font-bold mb-2 font-Syne"
      >
        <AnimatedCursor isHovered={isHovered} />
        We’d Love to Hear From You.
      </h3>
      <p
        className={`text-left mb-4 sm:mb-8 font-Archivo text-sm sm:text-base ${
          theme === "light" ? "text-gray-600" : "text-gray-300"
        }`}
      >
        Or just reach out manually to{" "}
        <a href="mailto:info@byteupai.com" className="text-[#9f7cbe]">
          info@byteupai.com
        </a>
        .
      </p>
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start font-Archivo mt-10 sm:mt-14">
        <div ref={emailRef} className="text-left md:mb-0 flex-1">
          <div
            className={`bg-gradient-to-r from-[#a270c9] to-[#637eb2] p-2 rounded-full inline-block mb-2 hover:opacity-80 transition-all duration-200`}
          >
            <MdEmail className="text-white text-lg sm:text-xl" />
          </div>
          <h4 className="font-semibold font-Syne text-lg sm:text-xl">
            Email Support
          </h4>
          <p
            className={`mb-2 sm:mb-3 text-sm sm:text-base ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Our team can respond in real time.
          </p>
          <a
            href="mailto:info@byteupai.com"
            className="text-[#9f7cbe] text-sm md:text-base"
          >
            info@byteupai.com
          </a>
        </div>
        <div ref={locationRef} className="text-left md:mb-0 flex-1">
          <div
            className={`bg-gradient-to-r from-[#a270c9] to-[#637eb2] p-2 rounded-full inline-block mb-2 hover:opacity-80 transition-all duration-200`}
          >
            <MdLocationOn className="text-white text-lg sm:text-xl" />
          </div>
          <h4 className="font-semibold font-Syne text-lg sm:text-xl">
            Visit Our Office
          </h4>
          <p
            className={`mb-2 sm:mb-3 text-sm sm:text-base ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Visit our location in real life.
          </p>
          <a href="#" className="text-[#9f7cbe] text-sm md:text-base">
            221b Elementary Avenue, NY
          </a>
        </div>
        <div ref={phoneRef} className="text-left flex-1">
          <div
            className={`bg-gradient-to-r from-[#a270c9] to-[#637eb2] p-2 rounded-full inline-block mb-2 hover:opacity-80 transition-all duration-200`}
          >
            <MdPhone className="text-white text-lg sm:text-xl" />
          </div>
          <h4 className="font-semibold font-Syne text-lg sm:text-xl">
            Call Us Directly
          </h4>
          <p
            className={`mb-2 sm:mb-3 text-sm sm:text-base ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Available during working hours.
          </p>
          <a
            href="tel:+1234-567-789"
            className="text-[#9f7cbe] text-sm md:text-base"
          >
            (888) 919 349 829
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReachOutSection;
