import { useState, useRef, useEffect } from "react";

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);
  const scrollBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={scrollBtnRef}
      className={`scroll-to-top ${visible ? "scroll-to-top_visible" : ""}`}
      onClick={scrollToTop}
    >
      <span>&#8593;</span>
    </div>
  );
};

export default ScrollBtn;
