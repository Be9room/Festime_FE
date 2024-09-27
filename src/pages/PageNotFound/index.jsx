import LinkBlock from "../../components/LinkBlock";
import TextBlock from "../../components/TextBlock";

const WORD_ART = `
      o88     ooooooo         o88   
    o8888   o888  o888o     o8888   
  o88 888   888  8  888   o88 888   
o888oo888oo 888o8  o888 o888oo888oo 
     o888o    88ooo88        o888o  
`;

const PageNotFound = () => {
  return (
    <main className="mx-auto flex h-no-scroll min-w-80 max-w-md animate-fadeIn flex-col px-6">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <pre className="mb-4 w-full text-center font-mono text-sm text-text-week">{WORD_ART}</pre>
        <TextBlock title="PAGE NOT FOUND" innerComponent={[{ type: "text", detail: "이런! 잘못된 접근이에요." }]} />
        <LinkBlock text="홈 화면으로 돌아가기" to="/" />
      </div>
    </main>
  );
};

export default PageNotFound;
