import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import AnimatedCursor from "./AnimatedCursor";
import { Link } from "react-router-dom";
import SecondaryBtn from "./SecondaryBtn";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const AboutClients = () => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Animation for the entire section
    const sectionAnimation = gsap.fromTo(
      ".about-clients-container",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-clients-container",
          start: "top 80%",
          end: "top 60%",
        },
      }
    );

    // Animation for heading
    const headingAnimation = gsap.fromTo(
      ".animate-heading",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".animate-heading",
          start: "top 80%",
          end: "top 60%",
        },
      }
    );

    // Animation for paragraph
    const paragraphAnimation = gsap.fromTo(
      ".about-clients-description",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-clients-description",
          start: "top 80%",
          end: "top 60%",
        },
      }
    );

    // Animation for images
    const imagesAnimation = gsap.fromTo(
      ".client-logo",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".client-logo",
          start: "top 80%",
          end: "top 60%",
        },
      }
    );

    // Cleanup animations on unmount
    return () => {
      sectionAnimation.kill();
      headingAnimation.kill();
      paragraphAnimation.kill();
      imagesAnimation.kill();
    };
  }, []);

  return (
    <>
      {/* Render AnimatedCursor component globally or ensure it is rendered only once */}
      <AnimatedCursor isHovered={isHovered} />
      <div className="about-clients-container w-full px-4 md:px-[5.5rem] mt-10 md:mt-20 flex flex-col md:flex-row justify-between flex-wrap items-center">
        <div className="w-full md:w-[35%] mb-8 md:mb-0">
          <h2
            className={`animate-heading text-xs md:text-[13px] uppercase mb-1 font-Syne leading-4 font-normal ml-1 tracking-[.20em] ${
              theme === "light" ? "text-gradient-css opacity-90" : "text-white/30"
            }`}
          >
            Brands
          </h2>
          <h1
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-3xl md:text-5xl font-semibold mb-6 leading-[2.5rem] md:leading-[3rem] font-Syne"
          >
            Trusted by Leading Brands
          </h1>

          <p
            className={`about-clients-description mb-6 text-base md:text-[17px] font-normal leading-6 ${
              theme === "light" ? " text-black/50" : " text-white/40"
            } font-Archivo`}
          >
            We proudly partner with top industry leaders, delivering exceptional
            service and achieving outstanding results together
          </p>
          <Link to="/services">
            <SecondaryBtn btn="view more" />
          </Link>
        </div>

        <div className="w-full md:w-[50%] py-8 md:py-10 flex gap-6 md:gap-10 justify-start md:justify-center items-center flex-wrap">
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wqpSLAWFF5R26T_-89JGwcHhDpJhOHSJJQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBAhZrbAUM5zuAZgw8BGT0CvDzqsdxUFf-A&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7cylGuLw5nojRz2XTaSufIPqbxJyDi8yiA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffrihfFruJ2vW6P3IaGQXRMIqSbng8ZXajg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklOmZHav7AlrsUcT1SUvYxaVTmucE_mlEXg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGd1EUfsLW_2cVV1MGbetwkXawbnnfFO5lzg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOfiIm-_efhRPMly_MWfsDlNgtzPtNDY34g&s",
          ].map((src, index) => (
            <div key={index} className="client-logo w-[70px] h-[70px] md:w-[100px] md:h-[100px] flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={src}
                alt={`Client logo ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutClients;
