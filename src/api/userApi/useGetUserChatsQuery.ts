import axios from "axios";
import { useQuery } from "react-query";
import { IChatsMenu } from "type/IChat";

const useGetUserChats = async (token: string) => {
  console.log("aa");
  const response = await axios.get(
    `${process.env.REACT_APP_API_KEY}/user/getuserchats?token=${token}`
  );
  console.log(response);
  return response.data;
};

export const useGetUserChatsQuery = (token: string) => {
  return useQuery<IChatsMenu>("get-user-chats", () => useGetUserChats(token), {
    enabled: !!token,
    retry: false,
  });
};
