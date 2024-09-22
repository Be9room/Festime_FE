import { useEffect } from "react";

const useFadeOnScroll = () => {
  useEffect(() => {
    const mainElement = document.querySelector("main");
    const topLevelElements = mainElement.querySelectorAll("*");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.add("opacity-0");
            entry.target.classList.remove("opacity-100");
          }
        });
      },
      { threshold: 0.1 }
    );

    topLevelElements.forEach((element) => {
      element.classList.add("opacity-0", "transition-opacity", "duration-500", "ease-in-out");
      observer.observe(element);
    });

    return () => {
      topLevelElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};

export default useFadeOnScroll;
