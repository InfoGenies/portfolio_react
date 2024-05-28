import React, { useState, useEffect } from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";

export default function Up() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showComponent && (
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="fixed bottom-[20px] text-white transition-all duration-300 opacity-100 rounded-full cursor-pointer right-[40px] animate-bounce bg-bgGradient w-[33px] h-[33px] md:grid place-items-center"
        >
          <FaLongArrowAltUp className="text-2xl" />
        </div>
      )}
    </>
  );
}