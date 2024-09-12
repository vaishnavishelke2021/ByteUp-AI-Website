import { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import AnimatedCursor from "./AnimatedCursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SecondaryBtn from "./SecondaryBtn";

gsap.registerPlugin(ScrollTrigger);

const HomeBlog = () => {
  const { theme } = useContext(ThemeContext);
  const [isHeadingHovered, setIsHeadingHovered] = useState(false);

  const containerStyles =
    theme === "light" ? "bg-white text-black" : "bg-black text-gray-100";

  // Refs for the animated elements
  const textRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    // Text section animation
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Trigger animation when the top of the element hits 80% of the viewport height
        },
      }
    );

    // Images section animation
    gsap.fromTo(
      imagesRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div>
      <style>{`
    @keyframes float {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    .image-container {
      width: 100%;
      height: 400px;
      left: 11rem;
      bottom: 5rem;
    }

    .secondary-image-container {
      width: 80%;
      height: 300px;
      left: 1rem;
      top: 6rem;
    }

    /* For smaller screens */
    @media (max-width: 768px) {
      .images-container {
        flex-direction: column;
        align-items: center;
      }

      /* Reduce image sizes for small screens */
      .image-container {
        width: 90%;  /* Reduce main image width */
        height: 220px;  /* Reduce main image height */
        left: 0;  /* Center the main image */
        bottom: 0; /* Position relative to the top image */
      }

      .secondary-image-container {
        width: 80%;  /* Reduce secondary image width */
        height: 200px;  /* Reduce secondary image height */
        top: -30px;  /* Adjust the overlap */
        left: 0;     /* Align to center */
      }
    }

    .light-button-gradient {
      border-image: linear-gradient(to right, #a270c9, #637eb2) 1;
    }

    .light-button-gradient:hover {
      background: linear-gradient(to right, #a270c9, #637eb2);
    }
  `}</style>

      <div
        className={`h-auto py-0 md:py-20 mt-[1rem] md:mt-[5rem] px-6 md:px-[5.5rem] flex flex-col items-center ${containerStyles}`}
      >
        <AnimatedCursor isHovered={isHeadingHovered} />
        <div
          ref={textRef}
          className="w-full overflow-hidden mx-auto flex flex-col md:flex-row gap-2"
        >
          {/* Text Section */}
          <div className="w-full md:w-2/5 flex flex-col justify-center items-start pr-0">
            <h2
              className={`animate-heading text-[13px] uppercase mb-1 font-Syne leading-4 font-normal ml-1 tracking-[.20em] ${
                theme === "light"
                  ? "text-gradient-css opacity-70"
                  : "text-white/40"
              }`}
            >
              Blog Layouts
            </h2>
            <h1
              className="text-[35px] md:text-5xl font-semibold mb-5 leading-tight font-Syne inline-block"
              onMouseEnter={() => setIsHeadingHovered(true)}
              onMouseLeave={() => setIsHeadingHovered(false)}
            >
              Tech Blog for Your Latest IT Updates
            </h1>
            <p
              className={`mb-5 text-base md:text-[17px] font-normal leading-6 ${
                theme === "light" ? " text-black/50" : " text-white/40"
              } font-Archivo`}
            >
              Share the latest from the IT field with a set <br /> of
              cutting-edge blog list layouts and <br /> diverse post single
              types.
            </p>
            <div>
              <Link to="/blogs">
                <SecondaryBtn btn="View more" />
              </Link>
            </div>
          </div>

          {/* Images Section */}
          <div
            ref={imagesRef}
            className="relative w-full md:w-3/5 flex items-center justify-center mt-20 md:mt-0 images-container"
          >
            {/* Main Image */}
            <div className="animate-float image-container relative">
              <img
                src="https://static.wixstatic.com/media/0e0314_856bdf8b5611413aad5e1f2559656d2f~mv2.png/v1/fill/w_924,h_533,al_c,q_90,enc_auto/0e0314_856bdf8b5611413aad5e1f2559656d2f~mv2.png"
                alt="Main blog post"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Secondary Image */}
            <div className="absolute left-0 animate-float secondary-image-container">
              <img
                src="https://web-images6.pixpa.com/Obc1JDeEgJ8fErXagBz4Z6EjVhs-cgTRI-nxCjivB38/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTc0Njc1MDM3LTg3MTA2My1hLWJlYXV0aWZ1bC1tZXNzanBnLmpwZw=="
                alt="Secondary blog post"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
