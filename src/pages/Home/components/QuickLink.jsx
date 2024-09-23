import LinkBlock from "../../../components/LinkBlock";
import TitleBlock from "../../../components/TitleBlock";

const QuickLink = ({ linkArray }) => {
  return (
    <>
      <TitleBlock title="QUICK LINK" subtitle={["자주 찾는 페이지들을 모아봤어요."]} />
      <div className="flex w-full flex-col gap-3">
        {linkArray && linkArray.map(({ text, to }) => <LinkBlock key={text} text={text} to={to} />)}
      </div>
    </>
  );
};

export default QuickLink;
