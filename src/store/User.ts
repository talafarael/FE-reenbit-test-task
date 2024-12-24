import { IUser } from "type/IUser";
import { create } from "zustand";

interface IUserStore {
  user: null | IUser;
  addUser: (newUser: IUser) => void;
}
export const useUserStore = create<IUserStore>()((set) => ({
  user: null,
  addUser: (newUser) => {
    set(() => ({
      user: newUser,
    }));
  },
}));
