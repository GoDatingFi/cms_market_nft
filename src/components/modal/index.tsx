import Styled from "./index.style";
import cx from "classnames";
import { useRef, ReactNode, useCallback } from "react";
import useClickOutside from "hooks/useClickOutside";
// import useLockedBody from "hooks/useLockedBody";

export interface Props {
  className?: string;
  isShow: boolean;
  showCloseBtn?: boolean;
  preventClickOutside?: boolean;
  close: (params?: any) => void;
  content?: ReactNode | string | null;
}

const Modal = ({
  className,
  isShow,
  close,
  showCloseBtn = true,
  preventClickOutside = false,
  content,
}: Props) => {
  const ref = useRef(null);

  const handleClickOutside = useCallback(() => {
    !preventClickOutside && close();
  }, [close, preventClickOutside]);

  // TODO: useLocked hook but still have problem with padding style
  // useLockedBody(isShow);
  useClickOutside(ref, handleClickOutside);

  return (
    <Styled.Container className={cx(className)} isShow={isShow}>
      <Styled.Content className="content" ref={ref}>
        {showCloseBtn && (
          <Styled.Close
            width={24}
            height={24}
            onClick={close}
            className="close-icon"
          />
        )}
        {content}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Modal;
