import { useGetUserChatsQuery } from "api/userApi/useGetUserChatsQuery";
import { useEffect, useState } from "react";
import "./menuChats.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import HeaderInputMenu from "Molecules/HeaderInputMenu";
import ItemChatMenu from "Atoms/ItemChatMenu";
import { IChat } from "type/IChat";

export default function MenuChats() {
  const token = localStorage.getItem("token") || "";
  const [chat, setChat] = useState<IChat[]>([]);
  const { data } = useGetUserChatsQuery(token);
  useEffect(() => {
    if (data?.chatsMenuData) {
      setChat(data.chatsMenuData);

    }
  }, [data]);
  return (
    <menu className="menuChats">
      <HeaderInputMenu />
      {chat.map((elem) => (
        <ItemChatMenu elem={elem} key={elem.id} />
      ))}
    </menu>
  );
}
