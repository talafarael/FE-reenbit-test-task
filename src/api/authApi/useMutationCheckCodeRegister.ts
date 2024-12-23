import axios from "axios";
import { useMutation } from "react-query";

export const useCheckCodeRegister = async (body: string, jwt: string) => {
  await axios.post("http://localhost:5000/auth/", body);
};
export const useMutationCheckCodeRegister = async () => {
  return useMutation({
    mutationKey: ["check-code-register"],
    mutationFn: ({ body, jwt }: { body: string; jwt: string }) =>
      useCheckCodeRegister(body, jwt),
  });
};