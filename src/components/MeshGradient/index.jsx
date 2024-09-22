import useCanvasAnimation from "./useCanvasAnimation";
import noise from "../../assets/images/background-noise.png";

const MeshGradient = ({ amount, lifetime, primaryColor, secondaryColor }) => {
  const canvasRef = useCanvasAnimation(amount, lifetime, primaryColor, secondaryColor);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed left-0 top-0 z-[-1] h-screen w-screen min-w-80 overflow-hidden will-change-transform"
      />
      <img
        src={noise}
        alt="Overlay Image"
        className="pointer-events-none fixed left-0 top-0 z-[-1] h-screen w-screen min-w-80 overflow-hidden object-cover backdrop-blur-[80px]"
      />
    </>
  );
};

export default MeshGradient;
