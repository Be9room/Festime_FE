import { useRef, useEffect } from "react";
import Circle from "./circle";

const resizeCanvas = (canvas) => {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  const canvasMaxSize = Math.max(canvas.clientWidth, canvas.clientHeight);
  return {
    minRadius: canvasMaxSize * 0.5,
    maxRadius: canvasMaxSize * 0.8
  };
};

const addCircle = (
  circles,
  canvas,
  minRadius,
  maxRadius,
  lifetime,
  ctx,
  primaryColor,
  secondaryColor,
  speedFactor = 2
) => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const r = Math.random() * (maxRadius - minRadius) + minRadius;
  const dx = (Math.random() - 0.5) * speedFactor;
  const dy = (Math.random() - 0.5) * speedFactor;
  circles.add(new Circle(x, y, r, dx, dy, lifetime, ctx, primaryColor, secondaryColor));
};

const animateCircles = (ctx, canvas, circles, loop) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const c of circles) {
    c.update();
    if (c.isExpired()) circles.delete(c);
  }

  requestAnimationFrame(() => loop());
};

const useCanvasAnimation = (amount, lifetime, primaryColor, secondaryColor) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const circles = new Set();
    let { minRadius, maxRadius } = resizeCanvas(canvas);

    const circleInterval = setInterval(() => {
      if (circles.size < amount) {
        addCircle(circles, canvas, minRadius, maxRadius, lifetime, ctx, primaryColor, secondaryColor);
      }
    }, 1000);

    const loop = () => {
      animateCircles(ctx, canvas, circles, loop);
    };

    loop();
    const resizeHandler = () => {
      const sizes = resizeCanvas(canvas);
      minRadius = sizes.minRadius;
      maxRadius = sizes.maxRadius;
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      clearInterval(circleInterval);
    };
  }, [amount, lifetime, primaryColor, secondaryColor]);

  return canvasRef;
};

export default useCanvasAnimation;
