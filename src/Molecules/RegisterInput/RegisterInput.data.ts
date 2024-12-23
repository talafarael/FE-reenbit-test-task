export const dataRegisterInput: IDataInputRegister[] = [
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

export interface IDataInputRegister {
  name: "name" | "email" | "password";
  rules: any;
  placholderText: string;
}
