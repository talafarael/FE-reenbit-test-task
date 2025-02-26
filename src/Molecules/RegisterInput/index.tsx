import React from "react";
import { Controller, useForm } from "react-hook-form";
import { dataRegisterInput } from "./registerInput.data";
import InputRegister from "Atoms/InputRegister";
import { IRegister } from "type/IRegister";
import ButtonSubmit from "Atoms/ButtonSubmit";
import { useMutationRegister } from "api/authApi/useRegisterMutation";
import { useNavigate } from "react-router-dom";
import OAuth2Login from "Molecules/OAuth/OAuth";

export default function RegisterInput() {
  const { mutate: register, isLoading, isError, data } = useMutationRegister();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<IRegister>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: IRegister) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    register(body, {
      onSuccess: (response) => {
        console.log(response.token);
        localStorage.setItem("temporaryJwt", response.token);
        navigate("/code");
      },
      onError: (error) => {
        console.error("Registration failed:", error);
      },
    });
  };
  return (
    <form className="RegisterInput" onSubmit={handleSubmit(onSubmit)}>
      {dataRegisterInput.map((elem) => (
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
