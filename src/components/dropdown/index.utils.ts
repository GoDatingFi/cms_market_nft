import { ReactNode } from "react";
import { DropdownOption } from "utils/interfaces";

interface Range {
  from?: number;
  to?: number;
}

export interface SelectProps {
  options: DropdownOption[];
  className?: string;
  placeholder?: string;
  subLabel?: string;
  label?: string;
  currentValue?: string | string[];
  onChange?: (value: string, sc?: string) => void;
  id?: string;
  name?: string;
  onBlur?: (e: any) => void;
  required?: boolean;
  disabled?: boolean;
}

export interface SortProps extends SelectProps {
  title: string | ReactNode;
  variant?: "primary" | "secondary";
  sortByLabel?: boolean;
}

export interface MultiProps extends SelectProps {
  title?: string | ReactNode;
  variant?: "primary" | "secondary";
  onApply?: () => void;
  onClear?: () => void;
  type?: string;
}

export interface RangeProps extends SelectProps {
  title: string | ReactNode;
  variant?: "primary" | "secondary";
  onApply?: () => void;
  onClear?: () => void;
  onRangeChange?: ({ from, to }: Range) => void;
  rangeFrom?: number | undefined;
  rangeTo?: number | undefined;
}
