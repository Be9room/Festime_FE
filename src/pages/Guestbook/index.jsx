import CircleIcon from "../../assets/svgs/circle.svg?react";
import { useState, useEffect } from "react";
import AdBlock from "../../components/AdBlock";

const GuestBook = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    if (input.length <= 300) {
      setMessage(input);
    }
  };

  const handleSend = () => {
    if (message.trim() === "") return;
    setMessageList([...messageList, message]);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messageList]);

  return (
    <main className="mx-auto flex min-h-dvh min-w-80 max-w-md animate-fadeIn flex-col justify-end gap-6 overflow-y-auto px-6 pb-[88px] pt-[180px]">
      <div className="fixed left-0 top-20 w-full backdrop-blur-2xl">
        <AdBlock eventActive={false} />
      </div>

      {messageList.length ? (
        messageList.map((text, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <p className="medium-12 flex w-fit flex-row items-center gap-2 pl-2">
              <CircleIcon />
              멋진 인덕이
            </p>
            <pre className="medium-14 darkgrayblock darkgrayblock-block-hover w-fit max-w-full whitespace-pre-wrap break-words px-4 py-2">
              {text}
            </pre>
            <p className="medium-12 w-fit pl-2 text-text-week">2024.10.03 11:00</p>
          </div>
        ))
      ) : (
        <div className="flex flex-col gap-2">
          <p className="medium-12 flex w-fit flex-row items-center gap-2 pl-2">
            <CircleIcon />
            관리자
          </p>
          <div className="medium-14 darkgrayblock darkgrayblock-block-hover w-fit max-w-full px-4 py-2">
            3시간 이내로 작성된 방명록이 없어요.
            <br />첫 방명록을 작성해보세요.
          </div>
          <p className="medium-12 w-fit pl-2 text-text-week">2024.10.03 11:00</p>
        </div>
      )}

      <footer className="fixed bottom-0 left-1/2 z-50 flex w-screen min-w-80 -translate-x-1/2 transform justify-center bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1aB3] to-[#1a1a1a00]">
        <div className="mx-auto flex min-w-80 max-w-md flex-1 flex-row items-end justify-between gap-4 p-5">
          <div className="grayblock grayblock-block-hover flex h-fit flex-1 px-4 py-2 backdrop-blur-xl">
            <textarea
              className="medium-16 no-scrollbar max-h-[142px] flex-1 resize-none bg-transparent focus:outline-none"
              placeholder="방명록을 입력해주세요. (최대 300자)"
              value={message}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              rows={1}
            />
          </div>
          <button onClick={handleSend} className="grayblock grayblock-button-hover h-[38px] px-3 backdrop-blur-xl">
            <CircleIcon />
          </button>
        </div>
      </footer>
    </main>
  );
};

export default GuestBook;
