import styled from "styled-components";
import AlertTriangleSvg from "assets/images/icons/alertTriangle.svg";
import CheckedSvg from "assets/images/icons/checked.svg";

const Styled = {
  Message: styled.div`
    display: flex;
    align-items: center;
  `,
  MessageText: styled.span<{ color: string }>`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: ${({ color }) => color};
    max-width: calc(100% - 32px);
  `,
  AlertTriangle: styled(AlertTriangleSvg)`
    margin-right: 8px;
    width: 24px;
    height: 24px;
  `,
  Checked: styled(CheckedSvg)`
    margin-right: 8px;
    width: 24px;
    height: 24px;
  `,
};

export default Styled;
