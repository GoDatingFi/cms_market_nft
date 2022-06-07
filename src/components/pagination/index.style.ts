import styled, { css } from "styled-components";
import { mixColors } from "utils/colors";
import { typoMobileModifiers } from "utils/styles";

const boxModifier = css`
  border-radius: 3px;
  width: 31px;
  height: 32px;
  ${typoMobileModifiers.body2};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 6px;
`;

const Styled = {
  Container: styled.div`
    display: flex;
  `,
  Navigate: styled.div<{ disabled: boolean }>`
    ${boxModifier};
    color: ${mixColors.black};

    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.5;
        cursor: not-allowed;
      `};
  `,
  NumberBox: styled.div<{ isActive: boolean }>`
    ${boxModifier};

    ${({ isActive }) =>
      isActive
        ? css`
            background: #7265FD;
            color: #F9F9FB;
          `
        : css`
            color: #373C3E;
          `}
  `,
};

export default Styled;
