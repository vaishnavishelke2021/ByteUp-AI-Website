import { useEffect, useRef, useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import AnimatedCursor from "./AnimatedCursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeWork = () => {
  const { theme } = useContext(ThemeContext);
  const cardsRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (cardsRef.current) {
        const firstCard = cardsRef.current.firstElementChild;
        const cardWidth = firstCard.offsetWidth;
        const clone = firstCard.cloneNode(true);
        cardsRef.current.appendChild(clone);
        cardsRef.current.style.transition = "transform 1s ease";
        cardsRef.current.style.transform = `translateX(-${cardWidth + 32}px)`; // 32px for the gap

        setTimeout(() => {
          cardsRef.current.style.transition = "none";
          cardsRef.current.style.transform = "translateX(0)";
          cardsRef.current.removeChild(firstCard);
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".animate-heading",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animate-heading",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseMove = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardData = [
    {
      image:
        "https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?t=st=1723799297~exp=1723802897~hmac=dedd80eb6b170f1cf29675e3545120d2ba4e94cf13190dfbc8aab8ed5bda12c5&w=1060",
      label: "Big Swinging Insiders",
      description:
        "This project tracks insider trading activities of big companies.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416724.jpg?t=st=1723799434~exp=1723803034~hmac=033a0e4867a6a4111311fe85d736c72f4c8e640eea3bcde682b3d6033cf783e6&w=1380",
      label: "Uranium Tracker",
      description:
        "This tool monitors the uranium market and price fluctuations.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/web-design-internet-website-responsive-software-concept_53876-124757.jpg?t=st=1723799538~exp=1723803138~hmac=38f58b99400516532477ad2ef5a32888531fe3f845a34b7ff5e0e32ecc913263&w=1380",
      label: "FunDesk",
      description:
        "Analyzes and predicts market trends based on insider activities.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/develop-coding-web-design-coding-web-template_53876-132245.jpg?t=st=1723799571~exp=1723803171~hmac=923535a417f40245c03a4440b9f3c3f42c9298509d3c8a9b513e9d33fdb77ac4&w=1060",
      label: "Ecommerce Scraping",
      description:
        "Provides detailed analytics on uranium mining and investment.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416724.jpg?t=st=1723799434~exp=1723803034~hmac=033a0e4867a6a4111311fe85d736c72f4c8e640eea3bcde682b3d6033cf783e6&w=1380",
      label: "Stock Automation",
      description:
        "This tool monitors the uranium market and price fluctuations.",
    },
  ];

  useEffect(() => {
    const applyTheme = () => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".card-label");
        cards.forEach((card) => {
          card.className = `card-label text-[26px] font-Syne font-semibold leading-8 ${
            theme === "light" ? "text-black" : "text-white"
          }`;
        });
      }
    };

    applyTheme();

    if (cardsRef.current) {
      const observer = new MutationObserver(() => {
        applyTheme();
      });

      observer.observe(cardsRef.current, {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    }
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`font-Archivo mt-[-3rem] md:mt-0
         pb-8 ml-4 lg:ml-14 ${theme === "light" ? "bg-white" : "bg-black"}`}
    >
      <AnimatedCursor isHovered={isHovered} />

      <h2
        className={`animate-heading text-[13px] uppercase mb-1 font-Syne leading-4 font-normal ml-1 tracking-[.20em] ${
          theme === "light" ? "text-gradient-css opacity-70" : "text-white/40"
        }`}
      >
        Portfolio
      </h2>
      <h1
        onMouseEnter={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`animate-heading text-[35px] md:text-5xl font-semibold mb-8 md:mb-12 leading-tight font-Syne inline-block ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Driving Excellence in
        <br />
        Every Project
      </h1>
      <div className="overflow-hidden">
        <div
          ref={cardsRef}
          className="flex gap-4 md:gap-8 transition-all duration-1000 ease-in-out"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[500px] card"
            >
              <div className="relative h-[200px] md:h-[300px] mb-4 group overflow-hidden">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out flex flex-col justify-end p-4 text-white`}
                >
                  <div className="text-lg md:text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    • {card.label}
                  </div>
                  <div className="text-base md:text-lg font-Syne transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100">
                    {card.description}
                  </div>
                </div>
              </div>
              <div
                className={`card-label text-[18px] md:text-[26px] font-Syne font-semibold leading-8 ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
