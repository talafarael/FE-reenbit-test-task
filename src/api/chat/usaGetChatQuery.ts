import axios from "axios";
import { useQuery } from "react-query";
import { IChat } from "type/IChat";
import { IUser } from "type/IUser";

const useGetChat = async (token: string | null, chatId: string | null) => {
  if (!token || !chatId) {console.log("null")
    return null;
  }

  const response = await axios.get(
    `${process.env.REACT_APP_API_KEY}/chat/getchat?token=${token}&chatId=${chatId}`
  );
  return response.data;
};
interface IGetChat {
  chat: IChat;
}
export const useGetChatQuery = (
  token: string | null,
  chatId: string | null
) => {
  return useQuery<IGetChat>(
    ["get-chat", token, chatId],
    () => useGetChat(token, chatId),
    {
      enabled: !!token && !!chatId,
      retry: false,
    }
  );
};
