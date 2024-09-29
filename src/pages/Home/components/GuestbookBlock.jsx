import LinkBlock from "../../../components/LinkBlock";
import TextBlock from "../../../components/TextBlock";

const GuestbookBlock = () => {
  return (
    <>
      <TextBlock
        title="비룡제 방명록"
        innerComponent={[
          { type: "text", detail: "비룡제를 즐기면서 방명록을 남겨보세요." },
          { type: "text", detail: "• 방명록은 익명이며, 작성하신 방명록은 3시간 뒤에 사라져요." },
          { type: "text", detail: "• 민감한 개인정보 기입, 욕설, 과격한 표현은 지양해주세요." },
          { type: "text", detail: "• 30초에 한 번 작성할 수 있어요." }
        ]}
      />
      <LinkBlock className="mb-32" text="방명록 남기기" to="/guestbook" />
    </>
  );
};

export default GuestbookBlock;
