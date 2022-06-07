import { FC, useMemo, HTMLAttributes } from "react";
import Styled from "./index.styles";
import { coreColors } from "utils/colors";
import { MESSAGE_STATUS } from "utils/constants";

interface Props extends HTMLAttributes<HTMLDivElement> {
  status: keyof typeof MESSAGE_STATUS;
  message: string;
}

const Message: FC<Props> = ({ status, message, className }) => {
  const statusMessage = useMemo(() => {
    switch (status) {
      case MESSAGE_STATUS.INFO:
        return { icon: <Styled.Checked />, color: coreColors.functional.info };
      case MESSAGE_STATUS.SUCCESS:
        return {
          icon: <Styled.Checked />,
          color: coreColors.functional.success,
        };
      case MESSAGE_STATUS.WARNING:
        return {
          icon: <Styled.Checked />,
          color: coreColors.functional.warning,
        };
      case MESSAGE_STATUS.DANGER:
        return {
          icon: <Styled.AlertTriangle />,
          color: coreColors.functional.danger,
        };
      default:
        return {
          icon: <Styled.Checked />,
          color: coreColors.functional.success,
        };
    }
  }, [status]);

  return (
    <Styled.Message className={className}>
      {statusMessage.icon}
      <Styled.MessageText color={statusMessage.color}>
        {message}
      </Styled.MessageText>
    </Styled.Message>
  );
};

export default Message;
