import styled from "styled-components";
import { coreColors, mixColors } from "utils/colors";
import {
  elevations,
  typoDesktopModifiers,
  typoMobileModifiers,
} from "utils/styles";
import Input from "components/input";
import Dropdown from "components/dropdown/select";
import Tooltip from "components/tooltip";
import Button from "components/button";
import Modal from "components/modal";
import Loading from "components/loading";

const Styled = {
  Container: styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 880px) {
      flex-direction: row;
    }
  `,
  PriceContainer: styled.div`
    min-height: 600px;
    width: 334px;
    background: ${mixColors.ash};
    border-radius: 16px;
    margin-top: 25px;
    padding: 21px 16px;

    ${elevations.lvl1};
    @media only screen and (min-width: 880px) {
      padding: 44px 61px 92px;
      width: 504px;
      min-width: 504px;
      margin-left: 43px;
      margin-top: unset;
    }
  `,
  Title: styled.div`
    ${typoMobileModifiers.label};
    color: ${mixColors.dark2};
    margin-top: 20px;
    margin-bottom: 8px;
    @media only screen and (min-width: 880px) {
      margin-top: 24px;
      ${typoDesktopModifiers.body1};
      font-weight: 700;
      color: ${mixColors.dark2};
    }
  `,
  FixedPriceBox: styled.div`
    width: 140px;
    height: 83px;
    border-radius: 12px;
    background: ${coreColors.neutral.white};
    ${elevations.lvl1};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto 0;
    @media only screen and (min-width: 880px) {
      margin: 0 0 24px 0;
    }
  `,
  PriceTitle: styled.div`
    color: ${coreColors.neutral.grey600};
    ${typoMobileModifiers.label};
    font-weight: 700;
    margin-top: 8px;
    @media only screen and (min-width: 880px) {
      ${typoDesktopModifiers.body1};
      font-weight: 700;
    }
  `,
  Subtitle: styled.div`
    ${typoMobileModifiers.body2};
    margin-bottom: 16px;
    @media only screen and (min-width: 880px) {
      ${typoDesktopModifiers.body2};
      font-weight: 600;
      color: ${coreColors.neutral.grey600};
      margin-bottom: 8px;
    }
  `,
  QuantityInput: styled(Input)`
    background: ${coreColors.neutral.white};
    border-radius: 12px;

    .input {
      border: 1px solid ${coreColors.neutral.grey300};
      height: 56px;
      /* Chrome, Safari, Edge, Opera */

      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      ::placeholder {
        ${typoMobileModifiers.label2};
        color: ${coreColors.neutral.grey400};
      }

      /* Firefox */

      [type="number"] {
        -moz-appearance: textfield;
      }

      @media only screen and (min-width: 768px) {
        width: 100%;
        border-radius: 12px;
        padding-right: 68px;

        ::placeholder {
          ${typoDesktopModifiers.body2};
        }
      }
    }
  `,
  GroupOptions: styled.div`
    @media only screen and (min-width: 880px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `,
  CopyInput: styled(Input)`
    .input {
      border: 1px solid ${coreColors.neutral.grey300};
      background: ${coreColors.neutral.white};
      height: 56px;
      padding: 0 8px;
      ::placeholder {
        ${typoMobileModifiers.label2};
        color: ${coreColors.neutral.grey400};
      }

      /* Chrome, Safari, Edge, Opera */

      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */

      [type="number"] {
        -moz-appearance: textfield;
      }

      @media only screen and (min-width: 880px) {
        width: 187px;
        border-radius: 12px;

        ::placeholder {
          ${typoDesktopModifiers.body2};
        }
      }
    }
  `,
  Select: styled(Dropdown)`
    margin-top: 16px;
    margin-bottom: 20px;

    .custom-select {
      background: ${coreColors.neutral.white};
      height: 56px;
      width: 100%;

      @media only screen and (min-width: 880px) {
        width: 180px;
      }
    }

    @media only screen and (min-width: 880px) {
      margin-top: unset;
      margin-bottom: unset;
    }
  `,
  FeeCounter: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
    @media only screen and (min-width: 880px) {
      margin-top: 17px;
    }
  `,
  FeeTitle: styled.div`
    display: flex;
    align-items: center;
  `,
  TypeFee: styled.div`
    margin-right: 5px;
    color: ${mixColors.dark2};
    ${typoMobileModifiers.label2};
    @media only screen and (min-width: 880px) {
      ${typoDesktopModifiers.body3};
      margin-right: 8px;
    }
  `,
  TooltipText: styled(Tooltip)`
    .tooltip-content {
      text-align: left;
      padding: 12px 8px;
      width: 212px;
      min-height: 54px;
      height: unset;
      @media only screen and (min-width: 880px) {
        width: 360px;
      }
    }
  `,
  ValueFee: styled.div`
    color: ${mixColors.dark2};
    @media only screen and (min-width: 880px) {
      ${typoDesktopModifiers.body3};
    }
  `,
  FeeBox: styled.div`
    text-align: right;
  `,
  FeePrice: styled.div`
    color: ${mixColors.dark2};
    ${typoMobileModifiers.caption2};
    @media only screen and (min-width: 880px) {
      ${typoDesktopModifiers.subtitle2};
      font-weight: 600;
    }
  `,
  GroupButton: styled.div`
    display: flex;
    margin: 28px auto 0;
    width: 264px;
    justify-content: space-between;
    @media only screen and (min-width: 880px) {
      width: 326px;
      margin: 13px auto 0;
    }
  `,
  DiscardButton: styled(Button)`
    min-width: 122px;
    height: 32px;
    ${typoMobileModifiers.caption2};
    font-weight: 900;

    background: ${coreColors.neutral.grey500};

    :hover {
      background: ${coreColors.neutral.grey700};
    }

    @media only screen and (min-width: 880px) {
      min-width: 144px;
      height: 40px;
      ${typoDesktopModifiers.button};
    }
  `,
  ConfirmButton: styled(Button)`
    min-width: 122px;
    height: 32px;
    ${typoMobileModifiers.caption2};
    font-weight: 900;
    @media only screen and (min-width: 880px) {
      min-width: 144px;
      height: 40px;
      ${typoDesktopModifiers.button};
    }
  `,
  PricePerItem: styled.div``,
  ConfirmSaleModal: styled(Modal)`
    .content {
      width: 340px;
      min-height: 397px;
      padding: 42px 21px;
      height: unset;
      @media only screen and (min-width: 880px) {
        width: 612px;
        min-height: 494px;
        padding: 63px 95px;
      }

      .close-icon {
        display: none;
      }
    }
  `,
  ModalTitle: styled.div`
    text-align: center;
    color: ${coreColors.neutral.grey600};
    ${typoMobileModifiers.subtitle};
    @media only screen and (min-width: 880px) {
      ${typoDesktopModifiers.h5};
    }
  `,
  ModalSubtitle: styled.div`
    text-align: center;
    color: ${mixColors.grey};
    margin-top: 8px;
    ${typoMobileModifiers.label2};
    @media only screen and (min-width: 880px) {
      ${typoDesktopModifiers.body2};
    }
  `,
  PreviewImage: styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: center;
  `,
  LoadingConfirm: styled.div`
    margin-top: 35px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .loading-icon {
      position: relative;
      margin: unset;
    }
  `,
  CustomLoading: styled(Loading)``,
  ConfirmTitle: styled.div`
    margin-left: 10px;
    color: ${mixColors.grey};
    ${typoMobileModifiers.label2};
    @media only screen and (min-width: 880px) {
      ${typoDesktopModifiers.body2};
      font-weight: 600;
    }
  `,
  MaxButton: styled(Button)`
    min-width: 63px;
    height: 38px;
  `,
};

export default Styled;
