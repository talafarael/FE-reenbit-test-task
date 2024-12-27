import { useGetUserQuery } from "api/userApi/useGetUserQuery";
import "./home.css";
import React, { useEffect } from "react";
import { useUserStore } from "store/User";
import { useChatUseStore } from "store/ChatsUse";
import Chat from "Organisms/Chat";
export default function Home() {
  const token = localStorage.getItem("token");
  const { addUser } = useUserStore();
  const { id } = useChatUseStore();

  const { data, error, isLoading } = useGetUserQuery(token!);
  useEffect(() => {
    if (!data) {
      return;
    }
    addUser(data.user);
  }, [data]);

  return <div className="home">{id ? <Chat /> : null}</div>;
}
