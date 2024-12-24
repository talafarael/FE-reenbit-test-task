import ButtonSubmit from "Atoms/ButtonSubmit";
import InputRegister from "Atoms/InputRegister";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { dataLoginInput } from "./LoginInput.data";

export default function LoginInput() {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };
  };
  return (
    <form className="RegisterInput" onSubmit={handleSubmit(onSubmit)}>
      {dataLoginInput.map((elem) => (
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
