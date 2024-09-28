import CircleIcon from "../../assets/svgs/circle.svg?react";
import { useState, useEffect, useRef } from "react";
import * as StompJs from "@stomp/stompjs";
import axios from "axios";

const GuestBook = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const textareaRef = useRef(null);
  const clientRef = useRef(null);
  const observerRef = useRef(null);

  const fetchMessages = async (page) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_FESTIME_API_URL}/message`, {
        params: { page }
      });
      if (response.data.isSuccess) {
        const { messageDtoList, isLast } = response.data.result;
        return { messages: messageDtoList.reverse(), isLast };
      }
    } catch (error) {
      console.error("API 요청 중 에러 발생:", error);
    }
    return { messages: [], isLast: true };
  };

  useEffect(() => {
    const fetchMemberData = async () => {
      const memberName = localStorage.getItem("memberName");
      const memberId = localStorage.getItem("memberId");
      if (!memberName || !memberId) {
        try {
          const response = await axios.get(`${import.meta.env.VITE_FESTIME_API_URL}/member`);
          const { memberName, memberId } = response.data.result;
          localStorage.setItem("memberName", memberName);
          localStorage.setItem("memberId", memberId);
        } catch (error) {
          console.error("API 요청 중 에러 발생:", error);
        }
      }
    };

    fetchMemberData();

    const loadInitialMessages = async () => {
      const { messages, isLast } = await fetchMessages(0);
      setMessageList(messages);
      setIsLastPage(isLast);
    };
    loadInitialMessages();

    const client = new StompJs.Client({
      brokerURL: `${import.meta.env.VITE_STOMP_API_URL}/stomp/guestbook`,
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      onConnect: () => {
        client.subscribe(`/topic/guestbook`, (message) => {
          const newMessage = JSON.parse(message.body);
          newMessage.createdAt = new Date().toISOString().slice(0, -1);
          setMessageList((prevMessages) => [...prevMessages, newMessage]);
        });
      },
      onStompError: (error) => {
        console.error("STOMP 에러 발생: ", error);
      }
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !isLastPage) {
          const nextPage = page + 1;
          const { messages, isLast } = await fetchMessages(nextPage);
          setMessageList((prevMessages) => [...messages.reverse(), ...prevMessages]);
          setPage(nextPage);
          setIsLastPage(isLast);
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [page, isLastPage]);

  const sendMessage = () => {
    const memberName = localStorage.getItem("memberName");
    const memberId = localStorage.getItem("memberId");

    if (clientRef.current && memberName && memberId) {
      const body = {
        memberName: memberName,
        memberId: memberId,
        message: message
      };
      clientRef.current.publish({
        destination: `/pub/guestbook/message`,
        body: JSON.stringify(body)
      });
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    if (input.length <= 300) {
      setMessage(input);
    }
  };

  const handleSend = () => {
    if (message.trim() === "") return;
    sendMessage();
    setMessage("");
  };

  const handleKeyDown = (e) => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (!isMobile && e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messageList]);

  return (
    <main className="mx-auto flex min-h-dvh min-w-80 max-w-md animate-fadeIn flex-col justify-end gap-6 overflow-y-auto px-6 pb-[88px] pt-[180px]">
      <div ref={observerRef} className="h-1 w-full" />

      {messageList.length ? (
        messageList.map((message, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <p className="medium-12 flex w-fit flex-row items-center gap-2 pl-2">
              <CircleIcon />
              {message.memberName}
            </p>
            <pre className="medium-14 darkgrayblock darkgrayblock-block-hover w-fit max-w-full whitespace-pre-wrap break-words px-4 py-2">
              {message.message}
            </pre>
            <p className="medium-12 w-fit pl-2 text-text-week">{message.createdAt}</p>
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
          <p className="medium-12 w-fit pl-2 text-text-week">{new Date().toISOString().slice(0, -1)}</p>
        </div>
      )}

      <footer className="fixed bottom-0 left-1/2 z-50 flex w-screen min-w-80 -translate-x-1/2 transform justify-center bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1aB3] to-[#1a1a1a00]">
        <div className="mx-auto flex min-w-80 max-w-md flex-1 flex-row items-end justify-between gap-4 p-5">
          <div className="grayblock grayblock-block-hover flex h-fit flex-1 px-4 py-2 backdrop-blur-xl">
            <textarea
              ref={textareaRef}
              className="medium-14 no-scrollbar max-h-[142px] flex-1 resize-none bg-transparent focus:outline-none"
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

/*
<div className="fixed left-0 top-20 w-full">
        <AdBlock eventActive={false} />
      </div>
*/
