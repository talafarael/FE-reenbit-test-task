import { useGetChatQuery } from "api/chat/usaGetChatQuery";
import SendMessageForm, { IMessage } from "Molecules/SendMessageForm";
import React, { useEffect, useState } from "react";
import "./chat.css";
import { useChatUseStore } from "store/ChatsUse";
import { IChat, IMessageData } from "type/IChat";
import ChatMessage from "Molecules/ChatMessage";
import CahtHeader from "Molecules/ChatHeader";

export default function Chat() {
  const { id } = useChatUseStore();
  const token = localStorage.getItem("token") ?? null;
  const [chatMessage, setChatMessage] = useState<IChat>();

  const { data } = useGetChatQuery(token, id);

  useEffect(() => {
    if (data) {
      setChatMessage(data.chat);
    }
  }, [data]);
  return (
    <>
      {chatMessage ? (
        <section className="chat">
          <CahtHeader elem={chatMessage} />
          <ChatMessage elem={chatMessage.chat} />
          <SendMessageForm />
       </section>
      ) : (
        <div>error</div>
      )}
     </>
  );
}
