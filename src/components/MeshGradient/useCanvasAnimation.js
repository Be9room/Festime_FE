import { useRef, useEffect } from "react";
import Circle from "./circle";

const resizeCanvas = (canvas, setRadiusValues) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const screenMinSize = Math.max(window.innerWidth, window.innerHeight);
  const minRadius = screenMinSize * 0.5;
  const maxRadius = screenMinSize * 0.8;
  setRadiusValues(minRadius, maxRadius);
};

const addCircle = (circles, canvas, minRadius, maxRadius, circleLifetime, ctx, primaryColor, secondaryColor) => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const r = Math.random() * (maxRadius - minRadius) + minRadius;
  const dx = (Math.random() - 0.5) * 2;
  const dy = (Math.random() - 0.5) * 2;
  circles.push(new Circle(x, y, r, dx, dy, circleLifetime, ctx, primaryColor, secondaryColor));
};

const animateCircles = (ctx, canvas, circles, animate) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach((circle, index) => {
    circle.update();
    if (circle.isExpired()) circles.splice(index, 1);
  });

  requestAnimationFrame(animate);
};

const useCanvasAnimation = (amount, lifetime, primaryColor, secondaryColor) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let minRadius, maxRadius;
    const setRadiusValues = (min, max) => {
      minRadius = min;
      maxRadius = max;
    };

    resizeCanvas(canvas, setRadiusValues);

    let circles = [];
    const maxCircles = amount;
    const circleLifetime = lifetime;

    const circleInterval = setInterval(() => {
      if (circles.length < maxCircles) {
        addCircle(circles, canvas, minRadius, maxRadius, circleLifetime, ctx, primaryColor, secondaryColor);
      }
    }, 1000);

    const animate = () => {
      animateCircles(ctx, canvas, circles, animate);
    };

    animate();
    canvas.style.mixBlendMode = "screen";
    window.addEventListener("resize", () => resizeCanvas(canvas, setRadiusValues));

    return () => {
      window.removeEventListener("resize", () => resizeCanvas(canvas, setRadiusValues));
      clearInterval(circleInterval);
    };
  }, [amount, lifetime, primaryColor, secondaryColor]);

  return canvasRef;
};

export default useCanvasAnimation;
