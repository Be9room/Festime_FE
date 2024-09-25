import Layout from "../../components/Layout";
import TitleBlock from "../../components/TitleBlock";
import LinkBlock from "./../../components/LinkBlock/index";
import Divider from "../../components/Divider";

const Support = () => {
  return (
    <Layout>
      <TitleBlock
        className="mt-8"
        title="2024년 비룡제 유니폼 및 굿즈 수령 안내"
        subtitle={[
          "비룡제 유니폼 및 굿즈 수령에 대하여 안내드립니다.",
          "아래 내용을 확인하시어 유니폼 및 굿즈를 수령해 주시길 바랍니다.",
          <br key="br" />,
          <span key="title" className="bold-14">
            • 수령 기간
          </span>,
          "9월 23일 월요일 09시 ~ 9월 27일 금요일 18시(학생복지위원회 운영시간 내 수령 가능)",
          <br key="br" />,
          <span key="title" className="bold-14">
            • 수령 장소
          </span>,
          "학생복지위원회실 (학생회관 119호)",
          <br key="br" />,
          <span key="title" className="bold-14">
            • 수령 방법
          </span>,
          "학생복지위원회 방문 후 직접 수령",
          <br key="br" />,
          <span key="title" className="bold-14">
            • 수령 절차
          </span>,
          "학생증 및 신분증 본인 확인 > 입금 내역 확인 > 수령 후 수령확인서 작성"
        ]}
      />
      <LinkBlock text="학생회관 위치 확인하기" to="https://maps.app.goo.gl/xkdTCwUtBieDFHSU8" />

      <TitleBlock
        className="mt-8"
        title="주의사항"
        subtitle={[
          <span key="note" className="text-live-red">
            ※ 축제 당일 현장 수령은 불가합니다.
          </span>,
          <span key="note" className="text-live-red">
            ※ 유니폼 및 굿즈 수령은 구글폼을 작성한 구매자(입금자)가 직접 수령하셔야 합니다.
          </span>,
          <span key="note" className="text-live-red">
            ※ 대리 수령은 절대 불가합니다.
          </span>,
          <span key="note" className="text-live-red">
            ※ 본인이 입금자명임을 증명할 수 있는 서류(EX. 입금확인서)를 필수 지참하셔야 합니다.
          </span>
        ]}
      />

      <Divider />

      <TitleBlock title="총학생회 본부 부스 & 의무실 운영 안내" subtitle={["향후 업데이트 예정입니다."]} />

      <TitleBlock className="mt-8" title="문의사항" />
      <LinkBlock text="2024 비룡제 축제 이메일" to="mailto:inhasg.festival.2024@gmail.com" />
      <LinkBlock className="mt-3" text="인하대학교 총학생회" to="tel:+82328608451" />
      <LinkBlock className="mt-3" text="현재 페이지 공유하기" to="share" />
    </Layout>
  );
};

export default Support;
