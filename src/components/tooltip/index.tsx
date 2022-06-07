import Styled from "./index.style";
import cx from "classnames";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode | string;
  content: ReactNode | string;
  shouldShow?: boolean;
}

const Tooltip = ({ className, children, content, shouldShow }: Props) => {
  return (
    <Styled.Container className={cx(className)} shouldShow={shouldShow}>
      {children}
      <div className="tooltip-content">{content}</div>
    </Styled.Container>
  );
};

export default Tooltip;
