import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import AnimatedCursor from "./AnimatedCursor";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDI%3D",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      linkedin: "https://www.linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
      image:
        "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDI%3D",
    },
    {
      name: "Emily Johnson",
      position: "CFO",
      linkedin: "https://www.linkedin.com/in/emilyjohnson",
      twitter: "https://twitter.com/emilyjohnson",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDI%3D",
    },
  ];

  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;

    gsap.fromTo(
      sectionEl.querySelectorAll(".team-member"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full py-10 px-6 md:px-[5.4rem] mt-20 md:mt-52 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <AnimatedCursor isHovered={isHovered} />
      <h1
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="font-Syne w-fit text-3xl md:text-[40px] font-bold text-start"
      >
        Our Team
      </h1>

      {/* Responsive Flexbox Adjustment */}
      <div className="flex flex-wrap justify-between mt-10 gap-6">
        {teamMembers.map((person, i) => (
          <div
            key={i}
            className="team-member w-full sm:w-[45%] md:w-[30%] h-[400px] md:h-[560px] relative opacity-0"
          >
            <div className="w-full h-[80%] relative overflow-hidden group">
              <img
                src={person.image}
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                alt={person.name}
              />
              <div
                className={`absolute inset-0 ${
                  theme === "light" ? "bg-white" : "bg-black"
                } bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex space-x-5 justify-center items-center`}
              >
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[14px] font-Archivo font-normal uppercase tracking-[1.9px] transition-transform duration-500 ease-in-out transform translate-y-8 group-hover:translate-y-0 ${
                    theme === "light"
                      ? "hover:text-black/60 text-black"
                      : "hover:text-white/60 text-white"
                  }`}
                >
                  LinkedIn
                </a>
                <a
                  href={person.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[14px] font-Archivo font-normal uppercase tracking-[1.9px] transition-transform duration-500 ease-in-out transform translate-y-8 group-hover:translate-y-0 ${
                    theme === "light"
                      ? "hover:text-black/60 text-black"
                      : "hover:text-white/60 text-white"
                  }`}
                >
                  Twitter
                </a>
              </div>
            </div>
            <h1 className="text-center font-Syne text-[24px] md:text-[26px] font-semibold mt-4">
              {person.name}
            </h1>
            <p
              className={`text-center font-Archivo text-sm font-semibold uppercase mt-0 tracking-[1.4px] ${
                theme === "light" ? "text-black/40" : "text-white/40"
              }`}
            >
              {person.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
