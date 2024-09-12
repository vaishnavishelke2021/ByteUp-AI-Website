import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeServices = () => {
  const { theme } = useContext(ThemeContext);

  const services = [
    {
      name: "Generative AI",
      description:
        "Harness the power of AI to create content, designs, and solutions. Transform ideas into reality.",
    },
    {
      name: "Web Scraping",
      description:
        "Extract valuable data from websites effortlessly. Our web scraping service automates data collection for you.",
    },
    {
      name: "Automation",
      description:
        "Streamline processes and reduce manual tasks. Implement efficient automation solutions to boost productivity.",
    },
    {
      name: "Python API Development",
      description:
        "Build robust and scalable APIs using Python. Deliver seamless integration and high-performance services.",
    },
    {
      name: "SaaS Development",
      description:
        "Develop custom SaaS applications for your business, built for scalability and user engagement.",
    },
  ];

  const images = [
    "https://c0.wallpaperflare.com/preview/812/981/170/coffee-cup-of-coffee-cup-desk-thumbnail.jpg",
    "https://www.kasada.io/wp-content/uploads/2023/09/photo-1498050108023-c5249f4df085.png",
    "https://images.unsplash.com/photo-1675434301763-594b4d0c5819?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXQlMjBvZmZl8ZW58MHx8MHx8fDA%3D",
    "https://img.freepik.com/premium-photo/robot-sitting-desk-using-laptop_941033-7304.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    gsap.fromTo(
      ".service-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 50%",
        },
      }
    );
  }, []);

  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black/80" : "bg-black text-white/80"
      } w-full min-h-[70vh] mt-10 md:mt-28 py-20 md:py-24 px-4 md:px-10 flex flex-col lg:flex-row justify-around`}
    >
      <div className="w-full lg:w-[45%] px-5 pr-10 services-container">
        {services.map((ser, index) => (
          <div
            key={index}
            className={`border-b py-6 pb-4 service-item ${
              theme === "light"
                ? "border-black/15 service-hover-white"
                : "border-white/15 service-hover-black"
            }`}
          >
            <h1
              className={`text-[22px] lg:text-[26px] font-semibold font-Syne transition ease-in duration-200`}
            >
              {ser.name}
            </h1>
            <p
              className={`w-full lg:w-[85%] text-[14px] mt-2 font-light tracking-[0.7px] font-Heebo ${
                theme === "light" ? "text-black/60 " : "text-white/30 "
              }`}
            >
              {ser.description}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full h-[450px] md:h-auto lg:w-[48%] p-2 relative overflow-hidden carousel-container mt-10 lg:mt-0 mb-20 lg:mb-0">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-full absolute top-0 left-0 overflow-hidden"
          >
            <img
              className={`w-full h-full object-cover transition-transform duration-[3s] ease-in-out ${
                index === currentImageIndex
                  ? "scale-100 opacity-100"
                  : "scale-125 opacity-0"
              }`}
              src={img}
              alt={`Slide ${index + 1}`}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-90 transition-opacity duration-300"></div>
          </div>
        ))}

        {/* Button that appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <NavLink to="/services">
            <button
              className={`absolute inset-0 flex items-center justify-center text-white py-2 px-4 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-500 text-sm uppercase font-Archivo tracking-[1.5px] font-light`}
            >
              Learn More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
