import axios from "axios";
import { useMutation } from "react-query";
import { IRegister } from "type/IRegister";

export const useRegister = async (body: IRegister) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/register",
      body
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};
export const useMutationRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (body: IRegister) => useRegister(body),
  });
};
