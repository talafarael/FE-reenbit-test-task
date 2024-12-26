import axios from "axios";
import { useQuery } from "react-query";
import { IUser } from "type/IUser";

const useGetUser = async (token: string) => {
  const response = await axios.get(
    `http://localhost:5000/user/getuser?token=${token}`
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
