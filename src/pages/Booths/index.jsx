import Divider from "../../components/Divider";
import Layout from "../../components/Layout";
import TextBlock from "../../components/TextBlock";
import LinkBlock from "./../../components/LinkBlock/index";
import TabList from "../../components/TabList";
import BOOTH_TABLE from "./../../constants/boothTable";
import BoothTableBlock from "./components/BoothTableBlock";

const Booths = () => {
  return (
    <Layout>
      <TextBlock
        title="비룡제 부스 배치 안내"
        innerComponent={[
          { type: "text", detail: "현 페이지는 아래 내용을 포함하고 있습니다." },
          { type: "text", detail: "• 학생 부스존 안내" },
          { type: "text", detail: "• 일반 부스존 안내" },
          { type: "text", detail: "• 학생 주(主)점존 안내" }
        ]}
      />

      <Divider />

      <TabList lists={BOOTH_TABLE} listComponent={BoothTableBlock} />

      <Divider />

      <TextBlock title="문의사항" />
      <LinkBlock text="2024 비룡제 축제 이메일" to="mailto:inhasg.festival.2024@gmail.com" />
      <LinkBlock className="mt-3" text="인하대학교 총학생회" to="tel:+82328608451" />
      <LinkBlock className="mt-3" text="현재 페이지 공유하기" to="share" />
    </Layout>
  );
};

export default Booths;
