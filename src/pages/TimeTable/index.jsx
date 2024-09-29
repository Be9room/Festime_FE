import Layout from "../../components/Layout";
import LinkBlock from "../../components/LinkBlock";
import TabList from "../../components/TabList";
import TimeTableBlock from "./components/TimeTableBlock";
import TextBlock from "../../components/TextBlock";
import TIME_TABLE from "../../constants/timeTable";
import CurrentLiveBlock from "../../components/CurrentLiveBlock";
import Divider from "../../components/Divider";

const TimeTable = () => {
  return (
    <Layout>
      <TextBlock
        title="비룡제 공연 순서 안내"
        innerComponent={[
          { type: "text", detail: "2024년 비룡제 공연 순서에 대하여 안내드립니다." },
          { type: "text", detail: "아래 내용 확인하시어 비룡제 공연 관람에 참고해 주시길 바랍니다." }
        ]}
      />

      <Divider />

      <TextBlock
        title="진행중인 공연 확인"
        innerComponent={[{ type: "text-red", detail: "※ 실제 공연 진행과 다를 수 있습니다." }]}
      />
      <CurrentLiveBlock />

      <Divider />

      <TextBlock title="일별 타임 테이블" />
      <TabList lists={TIME_TABLE} listComponent={TimeTableBlock} />

      <Divider />

      <TextBlock
        title="문의 사항"
        text={[
          { type: "text", detail: "재학생존 입장: 17:00" },
          { type: "text", detail: "무대 시작: 17:30" },
          { type: "text", detail: "공연 시간은 당일 상황에 따라 변경될 수 있습니다." }
        ]}
      />
      <LinkBlock text="2024 비룡제 축제 이메일" to="mailto:inhasg.festival.2024@gmail.com" />
      <LinkBlock className="mt-3" text="인하대학교 총학생회" to="tel:+82328608451" />
      <LinkBlock className="mt-3" text="현재 페이지 공유하기" to="share" />
    </Layout>
  );
};

export default TimeTable;
