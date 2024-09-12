import { useContext, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { gsap } from "gsap";

const FeaturedBlog = () => {
  const { theme } = useContext(ThemeContext);

  const featured = [
    {
      id: 0,
      date: "August 10, 2024",
      writer: "John Peralta",
      title:
        "The Humanoid Robot Will Leverage Tesla's Experience With Automated Machines In Its Factories",
      tags: ["Augmented", "Hardware"],
    },
  ];

  const { date, writer, title, tags } = featured[0];

  useEffect(() => {
    // Animation for the container
    gsap.fromTo(
      ".featured-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Animation for the tags
    gsap.fromTo(
      ".tag",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.5,
      }
    );

    // Animation for the "Read More" link
    gsap.fromTo(
      ".read-more",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.7, ease: "power2.out", delay: 0.8 }
    );
  }, []);

  return (
    <div
      className={`px-4 sm:px-8 md:px-16 lg:px-[5.5rem] ${
        theme === "light" ? "bg-white text-white" : "bg-black text-black"
      }`}
    >
      <div
        className={`featured-container w-full mt-10 p-4 sm:p-6 md:p-8 lg:p-12 lg:pl-14 relative ${
          theme === "light" ? "bg-black" : "bg-white"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://www.reliablesoft.net/wp-content/uploads/2019/12/free-images-for-blogs.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left-side gradient bar */}
        <div className="absolute left-0 top-0 bg-gradient-to-br from-purple to-sky h-full w-[10px] "></div>

        {/* Date and writer */}
        <p className={`mt-1 text-sm italic font-normal text-white/40`}>
          <span>{date}</span> <span>/ By {writer}</span>
        </p>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold font-Syne mt-3 leading-tight md:leading-[3rem] underline">
          {title}
        </h1>

        {/* Tags */}
        <div className="mt-5 flex space-x-2">
          {tags.map((tag, i) => (
            <p
              key={i}
              className={`tag border rounded-full py-1 px-2 sm:px-4 text-xs sm:text-sm font-normal transition-all duration-200 border-white/60 text-white/60 hover:text-black/80 hover:border-transparent hover:bg-gradient-to-br from-purple to-sky`}
            >
              {tag}
            </p>
          ))}
        </div>

        {/* Read More link */}
        <a
          className="read-more mt-10 sm:mt-14 block text-xs sm:text-[13px] font-Archivo uppercase tracking-[1.2px] text-purple hover:text-sky transition-all duration-200"
          href="#"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default FeaturedBlog;
