import axios from "axios";
import { useQuery } from "react-query";
import { IChat } from "type/IChat";

const useGetUserChats = async (token: string) => {
  const response = await axios.get(
    `http://localhost:5000/user/getuserchats?token=${token}`
  );
  return response.data;
};

export const useGetUserChatsQuery = (token: string) => {
  return useQuery<IChat[]>("get-user-chats", () => useGetUserChats(token), {
    enabled: !!token,
    retry: false,
  });
};
