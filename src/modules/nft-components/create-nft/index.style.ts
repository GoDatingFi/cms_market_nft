import styled, { css, keyframes } from "styled-components";
import { coreColors, mixColors } from "utils/colors";
import DotSpinnerSvg from "assets/images/icons/dotSpinner.svg";
import CheckedSvg from "assets/images/icons/checked.svg";
import CheckedGraySvg from "assets/images/icons/checkedGray.svg";
import { typoDesktopModifiers, typoMobileModifiers } from "utils/styles";
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
  Label: styled.div`
    text-align: center;

    @media only screen and (min-width: 768px) {
      color: ${coreColors.neutral.grey600};
      ${typoDesktopModifiers.h5};
      margin-top: 53px;
    }
  `,
  CreateNFTFlow: styled(Modal)`
    .content {
      padding: unset;
    }

    @media only screen and (min-width: 768px) {
      &.approve .content {
        height: auto;
        width: 760px;
      }

      &.complete .content {
        width: 581px;
        min-height: 531px;
      }

      &.error .content {
        height: 350px;
        width: 502px;
      }
    }
  `,
  DotSpinner: styled(DotSpinnerSvg)`
    animation: ${spinning} 1500ms linear infinite;

    path {
      fill: ${coreColors.functional.warning};
    }

    @media only screen and (min-width: 768px) {
      margin-right: 10px;

      &.approve {
        margin-right: 24px;
      }
    }
  `,
  Checked: styled(CheckedSvg)`
    @media only screen and (min-width: 768px) {
      margin-right: 10px;

      &.approve {
        margin-right: 24px;
      }
    }
  `,
  CheckedGray: styled(CheckedGraySvg)`
    @media only screen and (min-width: 768px) {
      margin-right: 10px;

      &.approve {
        margin-right: 24px;
      }
    }
  `,
  PurchaseBox: styled.div`
    @media only screen and (min-width: 768px) {
      width: 580px;
      margin: 45px auto 71px auto;
    }
  `,
  SignSalesOrderBox: styled.div`
    @media only screen and (min-width: 768px) {
      width: 580px;
      margin: 45px auto 71px auto;
      border-top: 2px solid ${coreColors.neutral.grey400};
      padding-top: 45px;
    }
  `,
  ApproveBox: styled.div`
    @media only screen and (min-width: 768px) {
      width: 580px;
      margin: 24px auto 0 auto;
      padding-bottom: 50px;
      border-bottom: 2px solid ${coreColors.neutral.grey400};
    }
  `,
  BoxLabel: styled.div`
    @media only screen and (min-width: 768px) {
      ${typoDesktopModifiers.body3};
      font-weight: 900;
      color: ${coreColors.neutral.grey600};
      margin-left: 52px;
    }
  `,
  Description: styled.div`
    @media only screen and (min-width: 768px) {
      color: ${mixColors.grey};
      ${typoDesktopModifiers.body2};
      font-weight: 600;
      margin-top: 16px;
      display: flex;
      align-items: center;
    }
  `,
  Error: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .title {
      color: ${coreColors.neutral.grey600};
      ${typoMobileModifiers.subtitle};

      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.h5};
      }
    }

    .desc {
      color: ${mixColors.grey};
      ${typoMobileModifiers.label2};
      text-align: center;

      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.body2};
        font-weight: 600;
        max-width: 306px;
        margin-bottom: 18px;
      }
    }
  `,
  ErrorIcon: styled.div`
    margin: 42px auto 29px auto;

    @media only screen and (min-width: 768px) {
      margin: 30px auto 24px auto;
    }
  `,
  ViewBSCButton: styled(Button)`
    @media only screen and (min-width: 768px) {
      width: 144px;
      height: 40px;
    }
  `,
  Complete: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      color: ${coreColors.neutral.grey600};
      ${typoMobileModifiers.subtitle};
      margin-bottom: 14px;

      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.h5};
      }
    }

    .desc {
      color: ${coreColors.neutral.grey600};
      ${typoMobileModifiers.label2};
      text-align: center;
      margin-top: 16px;

      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.body2};
        font-weight: 600;
        margin-bottom: 18px;
      }
    }
  `,

  CreateAnotherButton: styled(Button)`
    min-width: 144px;
    height: 40px;
    margin-right: 38px;
    color: ${mixColors.white2};
    background: ${coreColors.neutral.grey500};
    &:hover {
      background: ${coreColors.neutral.grey700};
    }
    &:focus {
      background: ${coreColors.neutral.grey700};
    }
  `,
  ViewNFTButton: styled(Button)`
    min-width: 144px;
    height: 40px;
  `,
  GroupButton: styled.div`
    display: flex;

    @media only screen and (min-width: 768px) {
      margin-top: 51px;
    }
  `,
};

export default Styled;
