import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full px-6 md:px-12 lg:px-20 py-14 mt-[10rem] ${
        theme === "light" ? "bg-black text-white/90" : "bg-white text-black/90"
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
        {/* Left Section */}
        <div className="w-full lg:w-[30%] h-full mb-8 sm:mb-0">
          <div className="ml-[-1.85rem] w-[190px] h-[3rem]">
            <img
              className="w-full h-full object-cover"
              src={`${theme === "light" ? logoLight : logoDark}`}
              alt="logo"
            />
          </div>
          <div className="pl-0 mt-4">
            <p className="text-[15px] opacity-80">
              123 Fake Street Anytown, CA 12345 <br /> United States
            </p>
            <p
              className={`flex items-center text-[15.5px] mt-6 font-normal ${
                theme === "light" ? "text-white/60" : "text-black/60"
              }`}
            >
              <MdEmail /> <span className="ml-3">info@byteupai.com</span>
            </p>
            <p
              className={`flex items-center text-[15.5px] mt-2 font-normal ${
                theme === "light" ? "text-white/60" : "text-black/60"
              }`}
            >
              <FaPhone className="text-[12.5px] ml-[1.5px]" />{" "}
              <span className="ml-3">(888) 919 349 829</span>
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full lg:w-[46%] h-full flex flex-wrap justify-between font-light items-start">
          {/* Company Section */}
          <div className="w-1/2 sm:w-[25%] mb-12 sm:mb-0">
            <h3 className="font-Syne uppercase">Company</h3>
            <ul
              className={`mt-6 flex flex-col gap-y-[5px] text-[15.5px] font-normal ${
                theme === "light" ? "text-white/45" : "text-black/55"
              }`}
            >
              <Link
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/work"
              >
                Work
              </Link>
              <Link
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Services
              </Link>
              <Link
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/blogs"
              >
                Blog
              </Link>
              <Link
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/about"
              >
                About Us
              </Link>
              <Link
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/contact"
              >
                Contact Us
              </Link>
            </ul>
          </div>

          {/* Services Section */}
          <div className="w-1/2 sm:w-[28%] mb-12 sm:mb-0">
            <h3 className="font-Syne uppercase">Services</h3>
            <ul
              className={`mt-6 flex flex-col gap-y-[5px] text-[15.5px] font-normal ${
                theme === "light" ? "text-white/45" : "text-black/55"
              }`}
            >
              <Link
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Generative AI
              </Link>
              <Link
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Web Scraping
              </Link>
              <Link
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Automation
              </Link>
              <Link
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Python API development
              </Link>
              <Link
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                SaaS Development
              </Link>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="w-full sm:w-[20%]">
            <h3 className="font-Syne uppercase">Get in touch</h3>
            <ul
              className={`mt-6 flex flex-col gap-y-[5px] text-[15.5px] font-normal ${
                theme === "light" ? "text-white/45" : "text-black/55"
              }`}
            >
              <a
                className={`transition ease-linear duration-200 w-fit flex items-center space-x-3 ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                href="#"
              >
                <FaLinkedin
                  className={`text-[19px] ml-[1px] ${
                    theme === "light" ? "text-white/70" : "text-black/80"
                  }`}
                />{" "}
                <span>LinkedIn</span>
              </a>
              <a
                className={`transition ease-linear duration-200 w-fit flex items-center space-x-3 ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                href="#"
              >
                <FaTwitter
                  className={`text-[18px] ml-[1px] ${
                    theme === "light" ? "text-white/70" : "text-black/80"
                  }`}
                />{" "}
                <span>Twitter</span>
              </a>
              <a
                className={`transition ease-linear duration-200 w-fit flex items-center space-x-3 ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                href="#"
              >
                <AiFillInstagram
                  className={`text-[20px] ml-[1px] ${
                    theme === "light" ? "text-white/70" : "text-black/80"
                  }`}
                />{" "}
                <span>Instagram</span>
              </a>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`mt-16 h-[0.5px] ${
          theme === "light" ? "bg-white/25" : "bg-black/20"
        }`}
      ></div>

      {/* Footer Bottom */}
      <div className="mt-5 w-full py-1 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p
          className={`text-[14px] font-medium mb-2 sm:mb-0 ${
            theme === "light" ? "text-white/40" : "text-black/40"
          }`}
        >
          © 2024 ByteUpAI. All Rights Reserved.
        </p>
        <p
          className={`text-[14px] font-medium ${
            theme === "light" ? "text-white/40" : "text-black/40"
          }`}
        >
          Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  );
};

export default Footer;
