import axios from "axios";
import { useMutation } from "react-query";
import { ICode } from "type/ICode";

export const useVerifyCodeAndCreateUser = async (code: ICode, jwt: string) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/auth/verifycodeandcreateuser?token=${jwt}`,
      code
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};
export const useVerifyCodeAndCreateUserMutation = () => {
  return useMutation({
    mutationKey: ["verify-code-and-create-user"],
    mutationFn: ({ code, jwt }: { code: ICode; jwt: string }) =>
      useVerifyCodeAndCreateUser(code, jwt),
  });
};
