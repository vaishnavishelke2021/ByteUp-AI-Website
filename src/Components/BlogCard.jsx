import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({ blogs, currentPage, blogsPerPage }) => {
  const { theme } = useContext(ThemeContext);
  const blogRef = useRef([]);

  // Calculate the blogs to display on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  useEffect(() => {
    blogRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            end: "bottom 60%",
            once: true,
          },
        }
      );
    });
  }, [currentBlogs]);

  return (
    <div className="w-full px-4 sm:px-8 lg:px-[5.5rem] mt-24">
      {currentBlogs.map((blog, index) => {
        return (
          <div
            key={blog.id}
            ref={(el) => (blogRef.current[index] = el)}
            className="w-full py-10 mb-10"
          >
            <div className="w-full h-[200px] sm:h-[300px] lg:h-[350px]">
              <img
                className="w-full h-full object-cover"
                src={blog.image}
                alt={blog.title}
              />
            </div>

            <p
              className={`mt-5 text-xs sm:text-sm font-normal ${
                theme === "light" ? "text-black/40" : "text-white/50"
              }`}
            >
              <span>{blog.date}</span> <span>/ By {blog.writer}</span>
            </p>

            <h1 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.1rem] font-semibold font-Syne mt-2 leading-[2rem] sm:leading-[2.5rem] lg:leading-[2.5rem]">
              {blog.title}
            </h1>

            <p
              className={`mt-2 text-[14px] sm:text-[15px] ${
                theme === "light" ? "text-black/60" : "text-white/40"
              }`}
            >
              {blog.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {blog.tags.map((t, i) => (
                <p
                  key={i}
                  className={`border rounded-full py-1 px-4 text-xs sm:text-sm font-normal transition-all duration-200 ${
                    theme === "light"
                      ? "border-black/60 text-black/60 hover:text-white/80 hover:border-transparent"
                      : "border-white/80 text-white/80 hover:text-black/80 hover:border-transparent"
                  } hover:bg-gradient-to-br from-purple to-sky`}
                >
                  {t}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
