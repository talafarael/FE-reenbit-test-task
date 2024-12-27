import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useChatUseStore } from "store/ChatsUse";
import { IChat } from "type/IChat";
interface ItemChatMenuProps {
  readonly elem: IChat;
}
export default function ItemChatMenu({ elem }: ItemChatMenuProps) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addId } = useChatUseStore();
  const handlerOpenChat = (chatId: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    const newParams = new URLSearchParams({
      ...currentParams,
      id: chatId,
    });
    addId(chatId);
    navigate(`/?id=${chatId}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const id = urlParams.get("id");
    if (id) {
      addId(id);
    }
  }, []);
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
