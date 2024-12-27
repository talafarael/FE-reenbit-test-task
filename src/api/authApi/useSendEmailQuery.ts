import axios from "axios";
import { useQuery } from "react-query";

const useLogin = async (token: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_KEY}/auth/sendemail?token=${token}`
  );
  return response.data;
};

export const useSendEmailQuery = (token: string) => {
  return useQuery("send-email", () => useLogin(token), {
    enabled: !!token,
    // refetchOnWindowFocus: false, 
    retry: false, 
  });
};
