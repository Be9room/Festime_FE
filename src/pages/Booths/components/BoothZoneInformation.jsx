import LinkBlock from "../../../components/LinkBlock";
import TextBlock from "../../../components/TextBlock";
import StudentBoothMapWebp from "../../../assets/images/studentBoothMap.webp";
import BoothMapWebp from "../../../assets/images/boothMap.webp";
import storeMapWebp from "../../../assets/images/storeMap.webp";

const BoothZoneInformation = ({ currentTab }) => {
  return (
    <>
      {currentTab === "학생 부스존" && (
        <>
          <TextBlock
            title="학생 부스존 안내"
            innerComponent={[
              { type: "image", detail: StudentBoothMapWebp },
              { type: "text-title", detail: "위치" },
              { type: "text", detail: "2호관 앞 / 60주년 앞" },
              { type: "br", detail: "" },
              { type: "text-title", detail: "운영 시간" },
              { type: "text", detail: "11:00~19:30" },
              { type: "br", detail: "" },
              { type: "text-title", detail: "운영 내용" },
              { type: "text", detail: "인하대학교 재학생들이 운영하는 부스 배치 및 각종 콘텐츠 운영" }
            ]}
          />
          <LinkBlock text="학생부스존 위치 확인하기" to="https://maps.app.goo.gl/iYkbWsK5iH8KbuKt5" />
        </>
      )}

      {currentTab === "일반 부스존" && (
        <>
          <TextBlock
            title="일반 부스존 안내"
            innerComponent={[
              { type: "image", detail: BoothMapWebp },
              { type: "text-title", detail: "위치" },
              { type: "text", detail: "인하대학교 후문-통일광장 사이 거리" },
              { type: "br", detail: "" },
              { type: "text-title", detail: "운영 시간" },
              { type: "text", detail: "11:00~19:00" },
              { type: "br", detail: "" },
              { type: "text-title", detail: "운영 내용" },
              { type: "text", detail: "인하대학교 재학생이 아닌 외부 단체의 부스 운영" },
              { type: "text", detail: "각종 플리마켓 및 참여형 부스 운영" }
            ]}
          />
          <LinkBlock text="일반부스존 위치 확인하기" to="https://maps.app.goo.gl/v22o1j4zhhJK71b2A" />
        </>
      )}

      {currentTab === "학생 주(主)점존" && (
        <>
          <TextBlock
            title="학생 주(主)점존 안내"
            innerComponent={[
              { type: "image", detail: storeMapWebp },
              { type: "text-title", detail: "위치" },
              { type: "text", detail: "정석학술정보관 뒤" },
              { type: "br", detail: "" },
              { type: "text-title", detail: "운영 시간" },
              { type: "text", detail: "17:30~23:30" },
              { type: "br", detail: "" },
              { type: "text-title", detail: "운영 내용" },
              { type: "text", detail: "인하대학교 재학생들이 직접 식음료 판매 및 주(主)점 운영" }
            ]}
          />
          <LinkBlock text="학생주(主)점존 위치 확인하기" to="https://maps.app.goo.gl/n55FzNMnfyh6sdu19" />
        </>
      )}
    </>
  );
};

export default BoothZoneInformation;
