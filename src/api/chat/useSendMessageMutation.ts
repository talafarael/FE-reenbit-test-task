import axios from "axios";
import { IMessage } from "Molecules/SendMessageForm";
import { useMutation } from "react-query";
export interface ISendMessage {
  chatId: string;
  message: string;
}
export interface IResSendMessage {
  resMessage: IMessage;
}

export const useSendMessage = async (body: ISendMessage, token: string) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_KEY}/chat/sendmessage?token=${token}`,
      body
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};
export const useSendMessageMutation = () => {
  return useMutation<IResSendMessage, Error, { body: ISendMessage; token: string }>({
    mutationKey: ["send-message"],
    mutationFn: ({ body, token }: { body: ISendMessage; token: string }) =>
      useSendMessage(body, token),
  });
};
