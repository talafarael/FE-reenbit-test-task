import { IUser } from "type/IUser";
import { create } from "zustand";

interface IChatUserSore {
  id: null | string;
  addId: (newId: string) => void;
}
export const useChatUseStore = create<IChatUserSore>()((set) => ({
  id: null,
  addId: (newId) => {
    set(() => ({
      id: newId,
    }));
  },
}));
