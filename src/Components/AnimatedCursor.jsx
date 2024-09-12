// src/components/AnimatedCursor.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedCursor = ({ isHovered }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 0.1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor mix-blend-difference pointer-events-none bg-white border-none fixed top-0 left-0 rounded-full  z-[1000] ${
        isHovered ? "w-20 h-20 text-black " : "w-3 h-3"
      }`}
    ></div>
  );
};

export default AnimatedCursor;
