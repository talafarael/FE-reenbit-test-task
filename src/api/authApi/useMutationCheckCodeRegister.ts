import axios from "axios";
import { useMutation } from "react-query";

export const useCheckCodeRegister = async (body: string, jwt: string) => {
  await axios.post(`${process.env.REACT_APP_API_KEY}/auth/`, body);
};
export const useMutationCheckCodeRegister = async () => {
  return useMutation({
    mutationKey: ["check-code-register"],
    mutationFn: ({ body, jwt }: { body: string; jwt: string }) =>
      useCheckCodeRegister(body, jwt),
  });
};
