import useCanvasAnimation from "./useCanvasAnimation";
import noise from "../../assets/images/background-noise.png";

const MeshGradient = ({ amount, lifetime, primaryColor, secondaryColor }) => {
  const canvasRef = useCanvasAnimation(amount, lifetime, primaryColor, secondaryColor);

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-screen h-screen z-[-1] will-change-transform" />
      <img
        src={noise}
        alt="Overlay Image"
        className="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-none backdrop-blur-[80px] z-[-1]"
      />
    </>
  );
};

export default MeshGradient;
