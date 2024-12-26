import { useGetUserChatsQuery } from "api/userApi/useGetUserChatsQuery";
import { useEffect } from "react";
import "./menuChats.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import HeaderInputMenu from "Molecules/HeaderInputMenu";
import ItemChatMenu from "Atoms/ItemChatMenu";

export default function MenuChats() {
  const token = localStorage.getItem("token") || "";
  const { data } = useGetUserChatsQuery(token);
  // console.log

  return (
    <menu className="menuChats">
      <HeaderInputMenu />
      {data?.chatsMenuData.map((elem) => (
        <ItemChatMenu elem={elem} key={elem.id} />
      ))}
    </menu>
  );
}
