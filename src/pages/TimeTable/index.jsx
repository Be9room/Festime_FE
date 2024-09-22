import CurrentLiveBlock from "../../components/CurrentLiveBlock";
import Layout from "../../components/Layout";
import LinkBlock from "../../components/LinkBlock";
import TitleBlock from "../../components/TitleBlock";

const TimeTable = () => {
  return (
    <Layout>
      <TitleBlock title="현재 진행중인 일정" />
      <CurrentLiveBlock />

      <TitleBlock className="mt-8" title="일별 타임 테이블" />

      <TitleBlock
        className="mt-8"
        title="유의 사항"
        subtitle="여기에 유의사항 입력 여기에 유의사항 입력 여기에 유의사항 입력 여기에 유의사항 입력 여기에 유의사항 입력 여기에 유의사항 입력 여기에 유의사항 입력 여기에 유의사항 입력 여기에 유의사항 입력 여기에 유의사항 입력 여기에 유의사항 입력 여기에 유의사항 입력 "
      />
      <LinkBlock text="총학생회 문의하기" />
    </Layout>
  );
};

export default TimeTable;
