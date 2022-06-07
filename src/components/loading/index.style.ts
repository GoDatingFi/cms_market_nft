import styled, { keyframes, css } from "styled-components";
import DotSpinnerSvg from "assets/images/icons/dotSpinner.svg";
import { coreColors } from "utils/colors";

const spinning = keyframes`
  ${css`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `}
`;

const Styled = {
  Container: styled.div`
    //background: ${coreColors.neutral.white};
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  DotSpinner: styled(DotSpinnerSvg)`
    animation: ${spinning} 1500ms linear infinite;

    path {
      fill: ${coreColors.functional.warning};
    }
  `,
};

export default Styled;
