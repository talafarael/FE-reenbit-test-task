export const dataLoginInput: IDataInputLogin[] = [
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

export interface IDataInputLogin {
  name: "email" | "password";
  rules: any;
  placholderText: string;
}
