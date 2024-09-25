import Layout from "../../components/Layout";
import LinkBlock from "../../components/LinkBlock";
import TabList from "../../components/TabList";
import TimeTableBlock from "../../components/TimeTableBlock/lindex";
import TitleBlock from "../../components/TitleBlock";
import TIME_TABLE from "../../constants/timeTable";

const TimeTable = () => {
  return (
    <Layout>
      <TitleBlock
        title="비룡제 공연 순서 안내"
        subtitle={[
          "2024년 비룡제 공연 순서에 대하여 안내드립니다.",
          "아래 내용 확인하시어 비룡제 공연 관람에 참고해 주시길 바랍니다."
        ]}
      />

      <TitleBlock className="mt-8" title="일별 타임 테이블" />
      <TabList lists={TIME_TABLE} listComponent={TimeTableBlock} />

      <TitleBlock
        className="mt-8"
        title="유의 사항"
        subtitle={["재학생존 입장: 17:00", "무대 시작: 17:30", "공연 시간은 당일 상황에 따라 변경될 수 있습니다."]}
      />
      <LinkBlock text="2024 비룡제 축제 이메일" to="mailto:inhasg.festival.2024@gmail.com" />
      <LinkBlock className="mt-3" text="인하대학교 총학생회" to="tel:+82328608451" />
      <LinkBlock className="mt-3" text="현재 페이지 공유하기" to="share" />
    </Layout>
  );
};

export default TimeTable;
