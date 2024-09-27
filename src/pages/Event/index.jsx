import Layout from "../../components/Layout";
import TextBlock from "../../components/TextBlock";
import LinkBlock from "./../../components/LinkBlock/index";

const Event = () => {
  return (
    <Layout>
      <TextBlock
        title="서포터즈 부스 이벤트"
        innerComponent={[{ type: "text", detail: "향후 업데이트 예정입니다." }]}
      />

      <TextBlock className="mt-8" title="문의사항" />
      <LinkBlock text="2024 비룡제 축제 이메일" to="mailto:inhasg.festival.2024@gmail.com" />
      <LinkBlock className="mt-3" text="인하대학교 총학생회" to="tel:+82328608451" />
      <LinkBlock className="mt-3" text="현재 페이지 공유하기" to="share" />
    </Layout>
  );
};

export default Event;
