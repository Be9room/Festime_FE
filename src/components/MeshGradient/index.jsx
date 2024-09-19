import useCanvasAnimation from "./useCanvasAnimation";
import noise from "../../assets/images/background-noise.png";

const MeshGradient = ({ amount, lifetime, primaryColor, secondaryColor }) => {
  const canvasRef = useCanvasAnimation(amount, lifetime, primaryColor, secondaryColor);

  return (
    <div className="relative w-screen h-screen">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-screen h-screen" />
      <img
        src={noise}
        alt="Overlay Image"
        className="absolute top-0 left-0 w-screen h-screen object-cover pointer-events-none backdrop-blur-[80px]"
      />
    </div>
  );
};

export default MeshGradient;
