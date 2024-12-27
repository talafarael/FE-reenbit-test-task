import {
  ISendMessage,
  useSendMessageMutation,
} from "api/chat/useSendMessageMutation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import "./sendMessageForm.css"
import { useSearchParams } from "react-router-dom";
export interface IMessage {
  message: string;
}
export default function SendMessageForm() {
  const { mutate: sendMessage } = useSendMessageMutation();
  const [searchParams] = useSearchParams();
  const { handleSubmit, control } = useForm<IMessage>({
    defaultValues: {
      message: "",
    },
  });
  const onSubmit = async (data: IMessage) => {
    const id = searchParams.get("id");
    const token = localStorage.getItem("token");
    if (!id || !token) {
      return;
    }
    const body: ISendMessage = { chatId: id, message: data.message };
    sendMessage({body,token}, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="SendMessageForm">
      <Controller
        name="message"
        control={control}
        rules={{
          minLength: { value: 1, message: "Minimum 4 characters" },
        }}
        render={({
          field: { onChange, onBlur, value, ref },
          fieldState: { error },
        }) => (
          <input onChange={onChange} onBlur={onBlur} value={value} ref={ref} />
        )}
      />
      <button type="submit">send</button>
    </form>
  );
}
