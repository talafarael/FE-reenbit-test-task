import axios from "axios";
import { IMessage } from "Molecules/SendMessageForm";
import { useMutation } from "react-query";
export interface ICreateChat {
  firstName: string;
  lastName: string;
}
export interface IResCreateChat {}

export const useCereateChat = async (body: ICreateChat, token: string) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_KEY}/cahtmanager/createchat?token=${token}`,
      body
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};
export const useCreateChatMutation = () => {
  return useMutation<
    IResCreateChat,
    Error,
    { body: ICreateChat; token: string }
  >({
    mutationKey: ["send-message"],
    mutationFn: ({ body, token }: { body: ICreateChat; token: string }) =>
      useCereateChat(body, token),
  });
};
