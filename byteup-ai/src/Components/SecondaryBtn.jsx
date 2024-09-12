import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const SecondaryBtn = ({ btn }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={`text-sm  border uppercase font-Archivo tracking-[1.5px] font-light px-6 py-3 transition ease-in-out duration-200 bg-transparent hover:bg-gradient-to-r from-purple to-sky ${
        theme === "light"
          ? " text-black border-gradient-css hover:text-white hover:border-transparent"
          : " text-white border-white hover:text-black hover:border-transparent"
      }`}
    >
      {btn}
    </button>
  );
};

export default SecondaryBtn;
