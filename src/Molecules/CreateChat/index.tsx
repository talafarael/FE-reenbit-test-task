import React from "react";
import { Controller, useForm } from "react-hook-form";
import { dataCreateChatInput } from "./createChat.data";
import "./createChat.css"
import InputRegister from "Atoms/InputRegister";
import ButtonSubmit from "Atoms/ButtonSubmit";
export interface ICreateChat {
  firstName: string;
  lastName: string;
}
export default function CreateChat() {
  const { handleSubmit, control } = useForm<ICreateChat>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = async (data: ICreateChat) => {
    const body = {};
  };
  return (
    <form className="createChat" onSubmit={handleSubmit(onSubmit)}>
      {dataCreateChatInput.map((elem) => (
        <Controller
          key={elem.name}
          name={elem.name}
          control={control}
          rules={elem.rules}
          render={({ field, fieldState: { error } }) => (
            <>
              <InputRegister {...field} placholderText={elem.placholderText} />
              <div>{error && <p>{error.message}</p>}</div>
            </>
          )}
        />
      ))}
      <ButtonSubmit />
    </form>
  );
}
