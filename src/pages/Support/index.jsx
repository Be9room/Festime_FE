import Layout from "../../components/Layout";
import TextBlock from "../../components/TextBlock";
import LinkBlock from "./../../components/LinkBlock/index";
import Divider from "../../components/Divider";
import SupportMap from "../../assets/images/supportMap.webp";

const Support = () => {
  return (
    <Layout>
      <TextBlock
        title="축제 안내사항"
        innerComponent={[
          { type: "text", detail: "현 페이지는 아래 내용을 포함하고 있습니다." },
          { type: "text", detail: "• 비룡제 통행제한구역 안내" },
          { type: "text", detail: "• 대운동장 반입 금지 물품 안내" },
          { type: "text", detail: "• 2024년 비룡제 유니폼 및 굿즈 수령 안내" },
          { type: "text", detail: "• 총학생회 본부 부스 & 의무실 운영 안내" }
        ]}
      />

      <Divider />

      <TextBlock
        title="비룡제 통행제한구역 안내"
        innerComponent={[
          { type: "image", detail: SupportMap },
          { type: "text-red", detail: "• 통행 제한 구역" },
          { type: "text-pink", detail: "• 차량 통행 제한 구역" },
          { type: "text-green", detail: "• 대체 통로" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "통행 제한 구역" },
          { type: "text", detail: "인하대역 4번 출구 ↔ 인하대학교 대운동장 통로(보도)" },
          { type: "text", detail: "인하대학교 학군단 ↔ 인하대학교 대운동장 사이 구역(비룡제 기간 무대 뒤편)" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "제한 사유" },
          { type: "text", detail: "재학생 안전 확보, 무대 장비 및 설비 운용 간 안전 확보" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "대체 통로" },
          { type: "text", detail: "인하대역 3번 출구 – 캠퍼스 내 돌담길 – 테니스장/로스쿨 사잇길" }
        ]}
      />

      <Divider />

      <TextBlock
        title="대운동장 반입 금지 물품 안내"
        innerComponent={[
          { type: "text-title", detail: "대운동장 반입 금지 물품" },
          { type: "text", detail: "공연 시작 후 모든 식음료 및 주류 (PET 음료만 반입 가능)" },
          { type: "text", detail: "공연 관람에 방해되는 물품 (드론, 대포카메라, 사다리, 셀카봉 등)" },
          { type: "text", detail: "타인에게 위협이 되는 물품 (화약류, 마약류, 깃대, 날카로운 물건 등)" },
          { type: "br", detail: "" },

          { type: "text-red", detail: "※ 적발 시, 대운동장 구역에서 퇴출될 수 있습니다." }
        ]}
      />

      <Divider />

      <TextBlock
        title="2024년 비룡제 유니폼 및 굿즈 수령 안내"
        innerComponent={[
          { type: "text", detail: "비룡제 유니폼 및 굿즈 수령에 대하여 안내드립니다." },
          { type: "text", detail: "아래 내용을 확인하시어 유니폼 및 굿즈를 수령해 주시길 바랍니다." },
          { type: "br", detail: "" },

          { type: "text-title", detail: "수령 기간" },
          {
            type: "text",
            detail: "9월 23일 월요일 09시 ~ 9월 27일 금요일 18시(학생복지위원회 운영시간 내 수령 가능)."
          },
          { type: "br", detail: "" },

          { type: "text-title", detail: "수령 장소" },
          { type: "text", detail: "학생복지위원회실 (학생회관 119호)" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "수령 방법" },
          { type: "text", detail: "학생복지위원회 방문 후 직접 수령" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "수령 절차" },
          { type: "text", detail: "학생증 및 신분증 본인 확인 > 입금 내역 확인 > 수령 후 수령확인서 작성" }
        ]}
      />
      <LinkBlock text="학생회관 위치 확인하기" to="https://maps.app.goo.gl/xkdTCwUtBieDFHSU8" />

      <TextBlock
        className="mt-8"
        title="주의사항"
        innerComponent={[
          { type: "text-red", detail: "※ 축제 당일 현장 수령은 불가합니다." },
          {
            type: "text-red",
            detail: "※ 유니폼 및 굿즈 수령은 구글폼을 작성한 구매자(입금자)가 직접 수령하셔야 합니다."
          },
          { type: "text-red", detail: "※ 대리 수령은 절대 불가합니다." },
          {
            type: "text-red",
            detail: "※ 본인이 입금자명임을 증명할 수 있는 서류(EX. 입금확인서)를 필수 지참하셔야 합니다."
          }
        ]}
      />

      <Divider />

      <TextBlock
        title="총학생회 본부 부스 & 의무실 운영 안내"
        innerComponent={[{ type: "text", detail: "향후 업데이트 예정입니다." }]}
      />

      <Divider />

      <TextBlock title="문의사항" />
      <LinkBlock text="2024 비룡제 축제 이메일" to="mailto:inhasg.festival.2024@gmail.com" />
      <LinkBlock className="mt-3" text="인하대학교 총학생회" to="tel:+82328608451" />
      <LinkBlock className="mt-3" text="현재 페이지 공유하기" to="share" />
    </Layout>
  );
};

export default Support;
