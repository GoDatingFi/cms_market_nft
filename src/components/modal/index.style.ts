import styled from "styled-components";
import { coreColors } from "utils/colors";
import CloseSvg from "assets/images/icons/cross.svg";

const Styled = {
  Container: styled.div<{ isShow: boolean }>`
    transition: all 300ms ease-in-out;
    display: ${({ isShow }) => (isShow ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
  `,
  Content: styled.div`
    transition: all 300ms ease-in-out;
    position: relative;
    box-sizing: border-box;
    background-color: ${coreColors.neutral.white};
    border-radius: 12px;
    padding: 20px;
    width: 340px;
    height: 332px;

    @media only screen and (min-width: 768px) {
      width: 502px;
      height: 332px;
    }
  `,
  Close: styled(CloseSvg)`
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 24px;
  `,
};

export default Styled;
