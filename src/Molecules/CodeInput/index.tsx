import { useVerifyCodeAndCreateUserMutation } from "api/authApi/useVerifyCodeAndCreateUser";
import ButtonSubmit from "Atoms/ButtonSubmit";
import { useNavHook } from "hook/useNavigation";
import { Controller, useForm } from "react-hook-form";
import { ICode } from "type/ICode";

export default function CodeInput() {
  const navigateTo = useNavHook();
  const {
    mutate: verifyCodeAndCreateUser,
    isLoading,
    isError,
    data,
  } = useVerifyCodeAndCreateUserMutation();
  const { handleSubmit, control } = useForm<ICode>({
    defaultValues: {
      code: "",
    },
  });
  const onSubmit = async (data: ICode) => {
    const jwt = localStorage.getItem("temporaryJwt");
    if (!jwt) {
      console.error("Temporary JWT not found");
      return;
    }
    const body = {
      code: data,
      jwt: jwt,
    };
    verifyCodeAndCreateUser(body, {
      onSuccess: (res) => {
        localStorage.setItem("token", res.token);
        localStorage.removeItem("temporaryJwt");
        navigateTo("/");
      },
      onError: () => {
        console.error("Error creating user:");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="code"
        control={control}
        rules={{
          required: "Email is required",
          minLength: { value: 4, message: "Minimum 4 characters" },
          maxLength: { value: 4, message: "Max 4 characters" },
        }}
        render={({
          field: { onChange, onBlur, value, ref },
          fieldState: { error },
        }) => (
          <>
            <input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
            <div>{error && <p>{error.message}</p>}</div>
          </>
        )}
      />
      <ButtonSubmit />
    </form>
  );
}
