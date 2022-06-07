import { ButtonHTMLAttributes, ReactNode, MouseEventHandler } from "react";

export type Size = "large" | "medium" | "small";

export type Variant = "primary" | "secondary" | "newPrimary" | "newSecondary";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: Size;
  variant?: Variant;
  className?: string;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
