import handleNavigation from "../../utils/handleMovePage";
import TaxiWebp from "../../assets/images/taxi.webp";
import { useNavigate } from "react-router-dom";

const AdBlock = ({ eventActive = true }) => {
  const navigate = useNavigate();

  return (
    <div className={`mx-auto w-full min-w-80 max-w-md ${eventActive ? "px-6" : "px-5"}`}>
      <button
        className={`h-18 relative flex w-full animate-fadeIn flex-row gap-3 p-4 ${eventActive ? "darkgrayblock darkgrayblock-button-hover" : "grayblock grayblock-button-hover"}`}
        aria-label="모두의 택시"
        onClick={() => handleNavigation("https://litt.ly/modutaxi", navigate)}
      >
        <div className="gap flex flex-grow flex-col items-start">
          <p className="medium-12">축제 끝, 막차 버스 놓쳤다면?</p>
          <p className="bold-14">
            모두의택시에서 <span className="text-[#40ceac]">택시팟</span> 찾자!
          </p>
        </div>
        {eventActive && (
          <p className="medium-12 absolute right-0 top-[-2.5rem] rounded-[14px] border border-solid border-[#40ceac4D] bg-[#40ceac33] px-2 py-1 text-[#40ceac]">
            택시비 환급 이벤트 진행중
          </p>
        )}
        <img src={TaxiWebp} alt="taxi" className="absolute right-2 top-[-0.125rem] h-20" />
      </button>
    </div>
  );
};

export default AdBlock;
