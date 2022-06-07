import styled from "styled-components";
import Modal from "components/modal";
import { typoDesktopModifiers, typoMobileModifiers } from "utils/styles";
import { coreColors, mixColors } from "utils/colors";
import Button from "components/button";

const Styled = {
  DisconnectModal: styled(Modal)`
    .content {
      width: 420px;
      height: 248px;
    }

    @media only screen and (max-width: 768px) {
      .content {
        height: 248px;
        width: 380px;
      }
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
  `,
  ButtonGroup: styled.div`
    display: flex;
    justify-content: center;
  `,
  CancelButton: styled(Button)`
    margin-left: 19px;
    color: ${coreColors.brand.violet};
    background: none;
    &:hover {
      background: none;
    }
    &:focus {
      background: none;
    }
    width: 169px;
    height: 38px;
    border: 1px solid ${coreColors.brand.violet};
    border-radius: 8px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${typoDesktopModifiers.subtitle1};
    font-weight: 500 !important;
  `,
  ProceedButton: styled(Button)`
    margin: 0 19px;
    color: ${mixColors.white2};
    background: ${coreColors.brand.violet};
    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        #7265fd;
    }
    &:focus {
      border: 2px solid #b9bbdf;
    }
    &:active {
      border: 2px solid #b9bbdf;
    }
    width: 169px;
    height: 38px;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${typoDesktopModifiers.subtitle1};
    font-weight: 500 !important;
  `,
};

export default Styled;
