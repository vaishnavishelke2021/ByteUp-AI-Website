import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import AnimatedCursor from "./AnimatedCursor";

const projects = [
  {
    id: 1,
    title: "Uranium Tracker",
    category: "SaaS Development",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHx8Mg%3D%3D",
    className: "col-span-1 row-span-1",
  },
  {
    id: 2,
    title: "Big Swinging Insiders",
    category: "SaaS Development",
    image:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "col-span-1 row-span-2",
  },
  {
    id: 3,
    title: "FunDesk",
    category: "SaaS Development",
    image:
      "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHx8Mg%3D%3D",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Ecommerce Scraping",
    category: "SaaS Development",
    image:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8Mg%3D%3D",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "Stock Automation",
    category: "SaaS Development",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya3xlbnwwfHwwfHx8Mg%3D%3D",
    className: "col-span-1 row-span-1",
  },
];

const WorkShowcase = () => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container mx-auto p-8 md:px-[5.5rem] py-12 mt-[-2rem]">
      <AnimatedCursor isHovered={isHovered} />
      <h1
        onMouseEnter={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`font-Syne w-fit text-[30px] md:text-[40px] font-bold text-start mb-10 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Our Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative group bg-white ${project.className}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;
