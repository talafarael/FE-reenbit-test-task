import { IDataInput } from "type/IDataInput";

export const dataCreateChatInput: IDataInput<EnumCreatChat>[] = [
  {
    name: "firstName",
    rules: {
      required: "Name required",
      minLength: { value: 3, message: "Minimum 2 characters" },
    },
    placholderText: "Write name",
  },
  {
    name: "lastName",
    rules: {
      required: "Name required",
      minLength: { value: 3, message: "Minimum 2 characters" },
    },
    placholderText: "Write lastName",
  },
];
type EnumCreatChat = "firstName" | "lastName";
