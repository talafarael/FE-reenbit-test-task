import axios from "axios";
import { useMutation } from "react-query";
import { ILogin } from "type/ILogin";
import { IToken } from "type/IToken";

export const useLogin = (body: ILogin): Promise<IToken> => {
  return axios
    .post<IToken>(`${process.env.REACT_APP_API_KEY}/auth/login`, body)
    .then((res) => {
      console.log(res)
      return res.data;
    });
};

export const useMutationLogin = () => {
  return useMutation<IToken, Error, ILogin>({
    mutationFn: useLogin,
  });
};
