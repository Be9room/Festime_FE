import LinkBlock from "../../../components/LinkBlock";
import TitleBlock from "../../../components/TitleBlock";
import StudentBoothMapWebp from "../../../assets/images/studentBoothMap.webp";
import BoothMapWebp from "../../../assets/images/boothMap.webp";
import storeMapWebp from "../../../assets/images/storeMap.webp";

const BoothZoneInformation = ({ currentTab }) => {
  return (
    <>
      {currentTab === "학생 부스존" && (
        <>
          <TitleBlock
            title="학생 부스존 안내"
            subtitle={[
              <img
                key="F&B존 지도"
                className="darkgrayblock darkgrayblock-block-hover my-4 w-full scale-105 overflow-hidden"
                loading="lazy"
                src={StudentBoothMapWebp}
                alt="F&B존 지도"
              />,
              <span key="title" className="bold-14">
                • 위치
              </span>,
              "2호관 앞 / 60주년 앞",
              <br key="br" />,
              <span key="title" className="bold-14">
                • 운영 시간
              </span>,
              "11:00~19:30",
              <br key="br" />,
              <span key="title" className="bold-14">
                • 운영 내용
              </span>,
              "인하대학교 재학생들이 운영하는 부스 배치 및 각종 콘텐츠 운영"
            ]}
          />
          <LinkBlock text="학생부스존 위치 확인하기" to="https://maps.app.goo.gl/iYkbWsK5iH8KbuKt5" />
        </>
      )}

      {currentTab === "일반 부스존" && (
        <>
          <TitleBlock
            title="일반 부스존 안내"
            subtitle={[
              <img
                key="F&B존 지도"
                className="darkgrayblock darkgrayblock-block-hover my-4 w-full scale-105 overflow-hidden"
                loading="lazy"
                src={BoothMapWebp}
                alt="F&B존 지도"
              />,
              <span key="title" className="bold-14">
                • 위치
              </span>,
              "인하대학교 후문-통일광장 사이 거리",
              <br key="br" />,
              <span key="title" className="bold-14">
                • 운영 시간
              </span>,
              "11:00~19:00",
              <br key="br" />,
              <span key="title" className="bold-14">
                • 운영 내용
              </span>,
              "인하대학교 재학생이 아닌 외부 단체의 부스 운영",
              "각종 플리마켓 및 참여형 부스 운영"
            ]}
          />
          <LinkBlock text="일반부스존 위치 확인하기" to="https://maps.app.goo.gl/v22o1j4zhhJK71b2A" />
        </>
      )}

      {currentTab === "학생 주(主)점존" && (
        <>
          <TitleBlock
            title="학생 주(主)점존 안내"
            subtitle={[
              <img
                key="F&B존 지도"
                className="darkgrayblock darkgrayblock-block-hover my-4 w-full scale-105 overflow-hidden"
                loading="lazy"
                src={storeMapWebp}
                alt="F&B존 지도"
              />,
              <span key="title" className="bold-14">
                • 위치
              </span>,
              "정석학술정보관 뒤",
              <br key="br" />,
              <span key="title" className="bold-14">
                • 운영 시간
              </span>,
              "17:30~23:30",
              <br key="br" />,
              <span key="title" className="bold-14">
                • 운영 내용
              </span>,
              "인하대학교 재학생들이 직접 식음료 판매 및 주(主)점 운영"
            ]}
          />
          <LinkBlock text="학생주(主)점존 위치 확인하기" to="https://maps.app.goo.gl/n55FzNMnfyh6sdu19" />
        </>
      )}
    </>
  );
};

export default BoothZoneInformation;
