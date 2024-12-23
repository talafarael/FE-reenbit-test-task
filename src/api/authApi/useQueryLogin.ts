import axios from "axios";
import { useMutation } from "react-query";

export const useLogin = async (body: any) => {
  axios.post("http://localhost:5000/auth/login", body);
};
export const useMutationLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (body: any) => useLogin(body),
  });
};
