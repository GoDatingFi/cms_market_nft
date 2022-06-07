import cx from "classnames";
import Styled from "./index.style";
import { Props } from "./index.utils";

const Button = ({
  children,
  className = "",
  size = "medium",
  variant = "primary",
  preIcon = null,
  postIcon = null,
  onClick,
  ...props
}: Props) => {
  return (
    <Styled.Button
      {...props}
      className={cx(className)}
      size={size}
      variant={variant}
      onClick={onClick}
    >
      {preIcon && (
        <Styled.PreIcon className="pre-icon">{preIcon}</Styled.PreIcon>
      )}
      {children}
      {postIcon && (
        <Styled.PostIcon className="post-icon">{postIcon}</Styled.PostIcon>
      )}
    </Styled.Button>
  );
};

export default Button;
