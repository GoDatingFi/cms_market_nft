import styled, { css } from "styled-components";
import { coreColors } from "utils/colors";
import { Size, Variant } from "./index.utils";
import { typoDesktopModifiers } from "utils/styles";

const sizeModifiers = {
  large: css`
    min-width: 116px;
    height: 48px;
  `,
  medium: css`
    min-width: 112px;
    height: 44px;
  `,
  small: css`
    min-width: 104px;
    height: 36px;
  `,
};

const variantModifiers = {
  primary: css`
    color: ${coreColors.neutral.white};
    background: ${coreColors.support.gradient10};
    border: none;

    &:hover,
    &:focus,
    &:active {
      background: ${coreColors.support.gradient20};
    }

    &:disabled {
      background: ${coreColors.brand.blurBlue};
      cursor: not-allowed;
    }
  `,
  secondary: css`
    color: ${coreColors.neutral.grey900};
    background: linear-gradient(
          ${coreColors.neutral.white},
          ${coreColors.neutral.white}
        )
        padding-box,
      linear-gradient(to right, #05e0ff, #7265fd) border-box;
    border: 2px solid transparent;

    &:hover,
    &:focus,
    &:active {
      color: ${coreColors.neutral.white};
      background: ${coreColors.support.gradient20};
      border: none;
    }

    &:disabled {
      color: ${coreColors.neutral.white};
      background: ${coreColors.brand.blurBlue};
      cursor: not-allowed;
      border: none;
    }
  `,
  newPrimary: css`
    color: ${coreColors.neutral.white};
    background: ${coreColors.brand.primary};
    border: none;
    border-radius: 8px !important;
    &:hover,
    &:focus,
    &:active {
      background: ${coreColors.brand.primaryGradient};
    }

    &:disabled {
      background: ${coreColors.neutral.grey400};
      cursor: not-allowed;
    }
  `,
  newSecondary: css`
    color: ${coreColors.brand.primary};
    background: ${coreColors.neutral.white};
    border: 2px solid ${coreColors.brand.primary};
    border-radius: 8px !important;
    &:hover,
    &:focus,
    &:active {
      border: 2px solid ${coreColors.brand.primaryGradient};
    }

    &:disabled {
      border: 2px solid ${coreColors.neutral.grey400};
      cursor: not-allowed;
    }
  `,
};

const Styled = {
  Button: styled.button<{
    size: Size;
    variant: Variant;
  }>`
    transition: all 300ms ease-in-out;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    cursor: pointer;
    position: relative;
    user-select: none;
    filter: drop-shadow(0px 3px 5px rgba(9, 30, 66, 0.2))
      drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31));

    ${typoDesktopModifiers.button};
    ${({ size }) => sizeModifiers[size]};
    ${({ variant }) => variantModifiers[variant]};
  `,
  PreIcon: styled.span`
    margin-right: 10px;
  `,
  PostIcon: styled.span`
    margin-left: 10px;
  `,
};

export default Styled;
