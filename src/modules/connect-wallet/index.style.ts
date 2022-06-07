import styled, { css, keyframes } from "styled-components";
import { coreColors, mixColors } from "utils/colors";
import DotSpinnerSvg from "assets/images/icons/dotSpinner.svg";
import { typoDesktopModifiers, typoMobileModifiers } from "utils/styles";
import Input from "components/input";
import Button from "components/button";
import Modal from "components/modal";

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
  ErrorIcon: styled.div`
    margin: 20px auto 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 768px) {
      margin: 20px auto 15px auto;
    }

    & > svg {
      margin-left: 14px;
    }
  `,
  DotSpinner: styled(DotSpinnerSvg)`
    animation: ${spinning} 1500ms linear infinite;

    path {
      fill: ${coreColors.brand.violet};
    }
  `,
  ModalContentWrap: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .title {
      color: ${coreColors.neutral.dark700};
      ${typoMobileModifiers.subtitle};
      font-weight: 600 !important;

      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.h6};
      }
    }

    .desc {
      color: ${mixColors.grey8e};
      ${typoMobileModifiers.label2};
      max-width: 300px;
      white-space: pre-line;
      text-align: center;
      margin: 8px auto 30px auto;
      font-weight: normal !important;
      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.subtitle2};
        max-width: 356px;
        margin: 10px auto 24px auto;
      }
    }
    .desc.network {
      margin: 5px auto 20px auto;
    }

    .input-label {
      color: #292e30;
      ${typoDesktopModifiers.subtitle2};
      line-height: 20px;
      margin-bottom: 6px;
      font-weight: 500 !important;

      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.subtitle2};
      }
    }

    .input-label.first {
      margin-top: 30px;

      @media only screen and (min-width: 768px) {
        margin-top: 30px;
      }
    }

    .skip-btn {
      display: flex;
      align-items: center;
      margin-top: 20px;
      ${typoMobileModifiers.body1};
      font-weight: 500 !important;
      color: ${coreColors.brand.violet};
      cursor: pointer;

      svg {
        margin-left: 11px;
      }

      @media only screen and (min-width: 768px) {
        margin-top: 20px;
        ${typoDesktopModifiers.body1};
      }
    }

    .network-name {
      ${typoMobileModifiers.label};
      cursor: pointer;
      font-weight: 400 !important;
      color: #2bb3ff;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 5px;

      @media only screen and (min-width: 768px) {
        ${typoMobileModifiers.label};
        line-height: 32px;
        margin-bottom: -10px;
      }
    }
  `,
  InitButton: styled(Button)`
    background: ${coreColors.neutral.white} !important;
    filter: unset;
    font-weight: 500 !important;
    border: 1px solid ${coreColors.neutral.grey400};
    color: ${mixColors.dark3e};
    ${typoMobileModifiers.body2};
    width: 280px;
    height: 48px;
    border-radius: 10px;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;

    &:first-of-type {
      margin-bottom: 24px;
    }

    .label {
      margin-left: 0px;
    }
    .pre-icon,
    .post-icon {
      display: flex;
      align-items: center;
    }

    .post-icon {
      float: right;
    }

    @media only screen and (min-width: 768px) {
      ${typoDesktopModifiers.body4};
      width: 280px;
      height: 48px;
    }

    &.active {
      border: 1px solid #7265fd;
    }
  `,
  InstallMetamask: styled.div`
    margin: 25px auto 15px auto;
  `,
  Download: styled.a`
    display: flex;
    align-items: center;
    column-gap: 8px;
    color: #2bb3ff;
    ${typoMobileModifiers.label};
    font-weight: 400 !important;
    svg {
      margin-right: 10px;
    }

    @media only screen and (min-width: 768px) {
      ${typoDesktopModifiers.subtitle2};
    }
  `,
  UpdateProfileInput: styled(Input)`
    .input {
      width: 320px;
      height: 44px;
      ${typoDesktopModifiers.subtitle2};
      font-weight: 500;
      color: ${mixColors.grey8e};
      padding: 10px 12px;

      &::placeholder {
        ${typoDesktopModifiers.subtitle2};
        font-weight: 500;
        color: ${mixColors.grey8e};
      }
    }
  `,
  UpdateProfileButton: styled(Button)`
    width: 320px;
    height: 46px;
    border-radius: 8px;
    color: ${coreColors.neutral.white};
    background: ${coreColors.brand.violet};
    ${typoMobileModifiers.body2};
    font-weight: 600 !important;
    font-family: "Aquawax Pro";

    &:hover {
      background: ${coreColors.brand.violet};
    }

    margin-top: 24px;
  `,
  ConnectWalletFlow: styled(Modal)`
    &.metamask-not-found .content {
      height: 256px;
      width: 328px;
    }

    &.init .content {
      height: 296px;
      width: 336px;
    }

    &.update-profile .content {
      height: 396px;
      width: 384px;
    }

    &.connecting-to-metamask .content {
      height: 220px;
      width: 328px;
    }

    &.error-connecting .content {
      height: 240px;
      width: 328px;
    }

    &.wrong-network .content {
      height: 248px;
      width: 328px;
    }
  `,
  ErrorAlertContainer: styled.div`
    display: flex;
    flex-direction: column;
    & > span {
      ${typoMobileModifiers.label2};
      font-weight: 600;
      color: ${mixColors.red};
    }
  `,
};

export default Styled;
