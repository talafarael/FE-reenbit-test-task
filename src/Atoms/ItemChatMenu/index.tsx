import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IChat } from "type/IChat";
interface ItemChatMenuProps {
  readonly elem: IChat;
}
export default function ItemChatMenu({ elem }: ItemChatMenuProps) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handlerOpenChat = (chatId: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    const newParams = new URLSearchParams({
      ...currentParams,
      id: chatId,
    });
    navigate(`?${newParams.toString()}`);
  };

  return (
    <button
      className="menuChatsButton"
      onClick={() => {
        handlerOpenChat(elem.id);
      }}
    >
      <h1>
        {elem.botFirstName} {elem.botLastName}
      </h1>
    </button>
  );
}
