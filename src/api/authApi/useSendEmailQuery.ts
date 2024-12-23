import axios from "axios";
import { useQuery } from "react-query";

const useLogin = async (token: string) => {
  const response = await axios.get(
    `http://localhost:5000/auth/sendemail?token=${token}`
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
