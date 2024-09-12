import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Work from "./Pages/Work";
import Blogs from "./Pages/Blogs";
import AnimatedCursor from "./Components/AnimatedCursor";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`relative w-full min-h-[100vh] ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <AnimatedCursor />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route
            path="/services"
            element={
              <div className="pt-[80px]">
                <Services />
              </div>
            }
          />
          <Route
            path="/work"
            element={
              <div className="pt-[80px]">
                <Work />
              </div>
            }
          />
          <Route
            path="/blogs"
            element={
              <div className="pt-[80px]">
                <Blogs />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="pt-[80px]">
                <About />
              </div>
            }
          />

          <Route
            path="/contact"
            element={
              <div className="pt-[80px]">
                <Contact />
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
