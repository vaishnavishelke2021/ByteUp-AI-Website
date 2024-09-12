import Navbar from "../Components/Navbar";
import { useContext, useState, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import FeaturedBlog from "../Components/FeaturedBlog";
import BlogCard from "../Components/BlogCard";
import Footer from "../Components/Footer";
import { blogs } from "../blogsdata";

const Blogs = () => {
  const { theme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 7;
  const blogSectionRef = useRef(null); // Create a ref for the blog section

  // Scroll to the top of the blog section
  const scrollToTop = () => {
    if (blogSectionRef.current) {
      blogSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    scrollToTop(); // Scroll to the top when the page changes
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Navbar />
      <FeaturedBlog />
      <div ref={blogSectionRef}>
        {" "}
        {/* Attach the ref to the blog section */}
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          blogsPerPage={blogsPerPage}
        />
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-12 sm:mt-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 text-[12px] sm:text-sm mx-2 text-white bg-gradient-to-br from-purple to-sky disabled:opacity-40"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}
          className="px-3 py-1 text-[12px] sm:text-sm mx-2 text-white bg-gradient-to-br from-purple to-sky disabled:opacity-40"
        >
          Next
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
