import { ReactNode, InputHTMLAttributes } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type Question = {
  id: string;
  question: string;
  options: {
    text: string;
  }[];
};
