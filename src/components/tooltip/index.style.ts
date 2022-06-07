import styled, { css } from "styled-components";
import { mixColors } from "utils/colors";
import { typoDesktopModifiers, typoMobileModifiers } from "utils/styles";

const Styled = {
  Container: styled.div<{ shouldShow?: boolean }>`
    position: relative;

    .tooltip-content {
      visibility: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 140px;
      height: 32px;
      background-color: ${mixColors.black3};
      color: ${mixColors.text};
      border-radius: 9px;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      margin-left: -90px;
      opacity: 0;
      transition: opacity 0.3s;
      ${typoMobileModifiers.caption};

      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.subtitle2};
        width: 180px;
        height: 54px;
      }
    }

    .tooltip-content::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: ${mixColors.black3} transparent transparent transparent;
    }

    &:hover .tooltip-content {
      ${({ shouldShow }) =>
        shouldShow &&
        css`
          visibility: visible;
          opacity: 1;
        `};
    }
  `,
};

export default Styled;
