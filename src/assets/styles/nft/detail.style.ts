import styled, { css } from "styled-components";
import {
  elevations,
  typoDesktopModifiers,
  typoMobileModifiers,
} from "utils/styles";
import { coreColors } from "utils/colors";
import Button from "components/button";
import Modal from "components/modal";
import Loading from "components/loading";

const Styled = {
  BackTitle: styled.div`
    color: ${coreColors.neutral.grey900};
    margin-left: 10px;
    ${typoMobileModifiers.label};
    @media only screen and (min-width: 1024px) {
      ${typoDesktopModifiers.h6};
      margin-left: unset;
      font-weight: 600;
    }
  `,
  PreviewContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .preview-image {
      order: 2;
    }

    .group-action {
      order: 1;
    }

    @media only screen and (min-width: 1200px) {
      align-items: unset;
      margin-top: 72px;
      flex-direction: row;

      .preview-image {
        order: 1;
      }

      .group-action {
        order: 2;
      }
    }
  `,
  ActionDropdown: styled.div<{ isOpen: boolean }>`
    margin-bottom: 20px;
    margin-left: 26px;
    position: relative;
    height: 100%;
    display: block;

    .menu-item-label {
      min-width: 122px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${coreColors.brand.blue};
      border-radius: 30px;
      ${typoMobileModifiers.caption};
      cursor: pointer;

      svg {
        position: absolute;
        right: 12px;
        @media only screen and (min-width: 880px) {
          right: 15px;
        }
      }

      @media only screen and (min-width: 880px) {
        min-width: 144px;
        height: 40px;
        ${typoDesktopModifiers.button};
      }
      color: ${coreColors.neutral.white};

      path {
        stroke: 3px solid ${coreColors.neutral.white};
        fill: ${coreColors.neutral.white};
      }

      &:hover,
      &:focus,
      &:active {
        color: ${coreColors.neutral.white};
        background: ${coreColors.support.gradient20};
        border: none;
      }
    }

    .menu-item-expand-icon {
      display: block;
      transition: all 300ms ease-in-out;
    }

    .menu-item-expand-icon {
      ${({ isOpen }) =>
        isOpen &&
        css`
          transform: rotate(180deg);
        `}
    }

    .menu-item-dropdown-content {
      padding: 13px 0;
      min-width: 181px;
      left: -40px;
      border-radius: 10px;
      top: 50px;
      background: ${coreColors.neutral.white};
      ${elevations.lvl3}
      ${({ isOpen }) =>
        isOpen
          ? css`
              position: absolute;
              display: block;
            `
          : css`
              display: none;
            `};
    }

    .menu-item-dropdown-item {
      cursor: pointer;
      color: ${coreColors.neutral.grey900};

      a {
        color: ${coreColors.neutral.grey900};
      }

      transition: all 300ms ease-in-out;
      display: flex;
      align-items: center;
      justify-content: left;
      padding: 0 20px;
      height: 37px;
      ${typoDesktopModifiers.body1};
      font-weight: 700;

      &:hover {
        color: ${coreColors.neutral.white};
        background: ${coreColors.brand.blue};
      }

      &:hover a {
        color: ${coreColors.neutral.white};
      }
    }
  `,
  GroupAction: styled.div`
    display: flex;
    margin: 35px auto 0;
    height: 60px;
    @media only screen and (min-width: 880px) {
      margin-top: 45px;
    }

    
  }
  `,
  ActionButton: styled(Button)`
    min-width: 80px;
    height: 32px;
    background: ${coreColors.brand.blue};
    ${typoMobileModifiers.caption};

    @media only screen and (min-width: 880px) {
      min-width: 144px;
      height: 40px;
      ${typoMobileModifiers.label};
    }

    :disabled {
      background: ${coreColors.brand.blurBlue};
    }
  `,
  CancelListingModal: styled(Modal)`
    .content {
      max-width: 340px;
      padding: 76px 42px;
      min-height: 332px;
      height: auto;
      @media only screen and (min-width: 880px) {
        max-width: 502px;
      }
    }
  `,
  TitleModal: styled.div`
    ${typoDesktopModifiers.h5};
    text-align: center;
    color: ${coreColors.neutral.grey600};
  `,
  SubtitleModal: styled.div`
    ${typoDesktopModifiers.subtitle1};
    margin-top: 18px;
    font-weight: 600;
    text-align: center;
    color: ${coreColors.neutral.grey600};
  `,
  GroupButtonModal: styled.div`
    display: flex;
    width: 210px;
    justify-content: space-between;
    margin: 30px auto 0;
  `,
  CancelButton: styled(Button)`
    height: 40px;
    min-width: 86px;
    background: ${coreColors.neutral.grey500};

    :hover {
      background: ${coreColors.neutral.grey700};
    }
  `,
  ConfirmButton: styled(Button)`
    height: 40px;
    min-width: 86px;
    .loading-icon {
      top: 0 !important;
    }
  `,
  Spinner: styled(Loading)``,
};

export default Styled;
