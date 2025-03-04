import { clsx, type ClassValue } from "clsx";
import { Resolver } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type SignInForm = {
  email: string;
  password: string;
};

export const signInFormResolver: Resolver<SignInForm> = async (values) => {
  const errors: any = {};

  if (!values.email) errors.email = "Email is required";
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  )
    errors.email = "Invalid email address";
  if (!values.password) errors.password = "Password is required";
  if (values.password && values.password.length < 6)
    errors.password = "Password should be at least 6 characters long";

  return {
    values: values,
    errors,
  };
};
