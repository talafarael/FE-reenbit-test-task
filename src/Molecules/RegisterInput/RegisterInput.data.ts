import { IDataInput } from "type/IDataInput";

export const dataRegisterInput: IDataInput<EnumReg>[] = [
  {
    name: "name",
    rules: {
      required: "Name required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
    placholderText: "Write name",
  },
  {
    name: "email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
      },
    },
    placholderText: "Write email",
  },
  {
    name: "password",
    rules: {
      required: "Name required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
    placholderText: "Write password",
  },
];
type EnumReg = "name" | "email" | "password";

