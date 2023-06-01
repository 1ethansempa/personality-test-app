import { ReactNode, InputHTMLAttributes } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type QuestionType = {
  id: string;
  question: string;
  options: {
    text: string;
  }[];
};

export type SelectedOption = {
  id: string;
  selectedIndex: number;
};
