import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import Marquee from "react-fast-marquee";
import python from "../assets/images/marqueeImgs/PythonLogo.png";
import django from "../assets/images/marqueeImgs/djangoLogo2.png";
import flask from "../assets/images/marqueeImgs/FlaskLogo.png";
import gemini from "../assets/images/marqueeImgs/GeminiLogo.png";
import langchain from "../assets/images/marqueeImgs/LangChainLogo.png";
import mistral from "../assets/images/marqueeImgs/MistralLogo.png";
import selenium from "../assets/images/marqueeImgs/seleniumLogo.png";
import chatgpt from "../assets/images/marqueeImgs/СhatGPTLogo.png";

const MarqueeLogo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`pt-20 py-36 select-none ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Marquee
        speed={100}
        gradient={true}
        gradientColor={`${theme === "light" ? "white" : "black"}`}
        className="flex space-x-0 overflow-y-hidden"
      >
        <div className=" w-auto px-6 md:px-12 md:h-[4.5rem] h-[3.5rem]">
          <img className="w-full h-full" src={python} alt="Python Logo" />
        </div>

        <div className=" w-auto px-6 md:px-12 md:h-[6.5rem] h-[5rem]">
          <img className="w-full h-full" src={django} alt="Django Logo" />
        </div>

        <div className=" w-auto px-6 md:px-12 md:h-[7rem] h-[6rem]">
          <img className="w-full h-full" src={flask} alt="Flask Logo" />
        </div>

        <div className=" mt-[-20px] w-auto px-6 md:px-12 md:h-[7rem] h-[6rem]">
          <img className="w-full h-full" src={gemini} alt="Gemini Logo" />
        </div>

        <div className=" w-auto px-8 md:h-[7.5rem] h-[6rem]">
          <img className="w-full h-full" src={langchain} alt="LangChain Logo" />
        </div>

        <div className=" w-auto px-6 md:px-12 md:h-16 h-14">
          <img className="w-full h-full" src={mistral} alt="Mistral Logo" />
        </div>

        <div className="w-auto ml-5 px-6 md:px-12 md:h-[3.8rem] h-[3rem]">
          <img className="w-full h-full" src={selenium} alt="Selenium Logo" />
        </div>

        <div className="w-auto px-8 md:px-16 md:h-[4.2rem] h-[3.5rem]">
          <img className="w-full h-full" src={chatgpt} alt="ChatGPT Logo" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeLogo;
