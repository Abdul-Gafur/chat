import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Chat as BaseChat } from "../components";

const initialMessages = [
  {
    id: 1,
    userId: 2,
    chatId: 2,
    message: "Муха ву хьо?",
  },
  {
    id: 2,
    userId: 1,
    chatId: 2,
    message: "Дика ву",
  },
  {
    id: 3,
    userId: 2,
    chatId: 2,
    message: "Х1умма дуй?",
  },
  {
    id: 4,
    userId: 1,
    chatId: 2,
    message: "Дера кхи х1умма ма дац ",
  },
  {
    id: 5,
    userId: 1,
    chatId: 2,
    message:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum ",
  },
];

const Chat = () => {
  const { pathname } = useLocation();

  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");

  const chatInputRef = useRef();
  const chatRef = useRef();

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (!chatRef.current) return;
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, pathname]);

  const handleMessageSubmit = (e) => {
    if (!message) return;
    setMessages((value) =>
      value.concat([
        {
          id: value[value.length - 1].id + 1,
          userId: 1,
          chatId: 2,
          message: message,
        },
      ])
    );
    setMessage("");
    chatInputRef.current.focus();
  };

  return (
    <BaseChat
      messages={messages}
      onSubmit={handleMessageSubmit}
      onTyping={handleMessageChange}
      messageValue={message}
      inputRef={chatInputRef}
      chatRef={chatRef}
    />
  );
};

export { Chat };
