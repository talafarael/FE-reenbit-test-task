import ButtonSubmit from "Atoms/ButtonSubmit";
import InputRegister from "Atoms/InputRegister";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ILogin } from "type/ILogin";
import { useMutationLogin } from "api/authApi/useQueryLogin";
import OAuth2Login from "Molecules/OAuth/OAuth";
import { dataLoginInput } from "./loginInput.data";

export default function LoginInput() {
  const navigate = useNavigate();
  const { mutate: login, isLoading, isError, data } = useMutationLogin();
  const { handleSubmit, control } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: ILogin) => {
    const body = {
      email: data.email,
      password: data.password,
    };
    login(body, {
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        navigate("/");
      },
    });
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
      <OAuth2Login />
      <ButtonSubmit />
    </form>
  );
}
