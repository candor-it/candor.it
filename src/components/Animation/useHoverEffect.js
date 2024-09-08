import { useEffect } from "react";
import gsap from "gsap";

const useHoverEffect = (selector, xSensitivity = 0.001, ySensitivity = 0.001, rotationSensitivity = 0.001) => {
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (!isDesktop) return;

    const hoverMouse = (elements) => {
      elements.forEach((element) => {
        let requestId;
        let isHovering = false;
        let cursor = { x: 0, y: 0 };
        let elementPos = { x: 0, y: 0 };
        let xDist = 0;
        let yDist = 0;

        const onMouseMove = (e) => {
          cursor = {
            x: e.clientX,
            y: e.clientY + window.scrollY,
          };
          const offset = element.getBoundingClientRect();
          const width = element.offsetWidth;
          const height = element.offsetHeight;
          elementPos = {
            x: offset.left + width / 2,
            y: offset.top + height / 2 + window.scrollY,
          };
          xDist = cursor.x - elementPos.x;
          yDist = cursor.y - elementPos.y;

          if (!requestId) {
            requestId = requestAnimationFrame(updatePosition);
          }
        };

        const updatePosition = () => {
          if (isHovering) {
            gsap.to(element, {
              duration: 0.6,
              x: (xDist * xSensitivity) / 2,
              y: (yDist * ySensitivity) / 2,
              rotation: ((xDist + yDist) * rotationSensitivity) / 2,
              ease: "power3.out",
            });
            requestId = null;
          }
        };

        const onLeave = () => {
          gsap.to(element, {
            duration: 0.8,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            ease: "elastic.out(1.2, 0.4)",
          });
        };

        const handleMouseEnter = () => {
          isHovering = true;
          window.addEventListener("mousemove", onMouseMove);
        };

        const handleMouseLeave = () => {
          isHovering = false;
          window.removeEventListener("mousemove", onMouseMove);
          onLeave();
          if (requestId) {
            cancelAnimationFrame(requestId);
            requestId = null;
          }
        };

        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
          window.removeEventListener("mousemove", onMouseMove);
          if (requestId) {
            cancelAnimationFrame(requestId);
          }
        };
      });
    };

    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      hoverMouse(elements);
    }
  }, [selector, xSensitivity, ySensitivity, rotationSensitivity]);
};

export default useHoverEffect;
