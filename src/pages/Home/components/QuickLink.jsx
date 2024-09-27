import LinkBlock from "../../../components/LinkBlock";
import TextBlock from "../../../components/TextBlock";

const QuickLink = ({ linkArray }) => {
  return (
    <>
      <TextBlock title="QUICK LINK" innerComponent={[{ type: "text", detail: "자주 찾는 페이지들을 모아봤어요." }]} />
      <div className="flex w-full flex-col gap-3">
        {linkArray && linkArray.map(({ text, to }) => <LinkBlock key={text} text={text} to={to} />)}
      </div>
    </>
  );
};

export default QuickLink;
