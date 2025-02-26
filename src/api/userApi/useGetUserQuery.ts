import axios from "axios";
import { useQuery } from "react-query";
import { IUser } from "type/IUser";

const useGetUser = async (token: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_KEY}/user/getuser?token=${token}`
  );
  return response.data;
};
interface IGetUser {
  user: IUser;
}
export const useGetUserQuery = (token: string) => {
  return useQuery<IGetUser>("get-user", () => useGetUser(token), {
    enabled: !!token,
    retry: false,
  });
};
