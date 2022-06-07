import {
  ChangeEventHandler,
  KeyboardEventHandler,
  InputHTMLAttributes,
  ReactNode,
  memo,
} from "react";
import cx from "classnames";
import Styled from "./index.style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  subLabel?: string;
  value?: string | number;
  disabled?: boolean;
  className?: string;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  placeholder?: string;
  type?: string;
  error?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
}

const Input = ({
  label = "",
  subLabel = "",
  value,
  className = "",
  preIcon = null,
  postIcon = null,
  disabled = false,
  placeholder = "",
  required = false,
  type = "text",
  error = false,
  onChange,
  onKeyDown,
  ...props
}: Props) => {
  return (
    <Styled.Input className={cx(className)}>
      <Styled.PreIcon className="pre-icon">{preIcon}</Styled.PreIcon>
      {label && (
        <Styled.Label className={cx("label", { "custom-label": !subLabel })}>
          {label} {required && <Styled.Start>*</Styled.Start>}
        </Styled.Label>
      )}
      {subLabel && (
        <Styled.SubLabel className="sub-label">{subLabel}</Styled.SubLabel>
      )}
      <Styled.RelativeWrapper>
        <Styled.TextBox
          {...props}
          type={type}
          placeholder={placeholder}
          value={value}
          hasPreIcon={!!preIcon}
          hasPostIcon={!!postIcon}
          disabled={disabled}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={`input ${error ? "error" : ""}`}
        />
        <Styled.PostIcon className="post-icon">{postIcon}</Styled.PostIcon>
      </Styled.RelativeWrapper>
    </Styled.Input>
  );
};

export default memo(Input);
