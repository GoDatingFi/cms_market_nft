import styled from "styled-components";
import { elevations, typoDesktopModifiers } from "utils/styles";
import { coreColors, mixColors } from "utils/colors";
import Input from "components/input";
import Button from "components/button";
import DotHamburgerSvg from "assets/images/icons/dotHamburger.svg";
import ChevDownSvg from "assets/images/icons/chevDown.svg";
import PropertiesArea from "modules/nft-components/propertiesArea";

const Styled = {
  UploadContent: styled.div`
    margin-bottom: 24px;
    @media only screen and (min-width: 768px) {
      margin-bottom: unset;
    }
  `,
  UploadTitle: styled.div`
    ${typoDesktopModifiers.body1};
    color: ${coreColors.neutral.grey900};
    font-weight: 700;
    margin-bottom: 12px;
  `,
  UploadSubtitle: styled.div`
    ${typoDesktopModifiers.subtitle2};
    color: ${coreColors.neutral.grey600};
    font-weight: 600;
    margin-bottom: 12px;
  `,
  UploadImageContainer: styled.div`
    width: 100%;
    height: 290px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background: ${mixColors.uploadBackGround};
  `,
  PreviewArea: styled.div``,
  PreviewTitle: styled.div`
    ${typoDesktopModifiers.body1};
    color: ${coreColors.neutral.grey900};
    font-weight: 700;
    margin-bottom: 12px;
  `,
  PreviewWrapper: styled.div`
    width: 100%;
    height: 364px;
    border: 1px dashed ${coreColors.neutral.grey600};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: ${coreColors.neutral.grey900};
  `,
  SubTitleSwitch: styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${coreColors.neutral.grey600};
  `,
  Card: styled.div`
    background: ${coreColors.neutral.white};
    ${elevations.lvl3};
    border-radius: 16px;
    padding: 33px;

    &.card-left {
      display: flex;
      flex-direction: column;
      grid-column: 1 / 3;
      @media only screen and (max-width: 1200px) {
        grid-column: 1 / 2;
      }
    }

    &.card-right {
      grid-column: 3 / 4;
      @media only screen and (max-width: 1200px) {
        grid-column: 2 / 3;
      }
    }

    &.card-input-property {
      margin-top: 34px;
      padding: 20px 50px;
    }

    &.card-put-item-on-sale {
      margin-top: 34px;
      padding: 20px 50px;
    }

    &.card-display-on-market-place {
      margin-top: 34px;
      padding: 20px 50px;
    }
  `,
  UploadContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
    grid-auto-rows: minmax(100px, auto);

    @media only screen and (min-width: 1024px) and (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 1024px) {
      display: unset;
    }
  `,
  NumberOfCopiesAndRoyalties: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    grid-auto-rows: minmax(100px, auto);
    @media only screen and (max-width: 1176px) {
      display: unset !important;
    }
  `,
  Input: styled(Input)<{ marginTop?: number }>`
    margin-top: ${({ marginTop }) => (marginTop ? marginTop + "px" : "unset")};

    input {
      height: 52px;
    }
  `,
  TextAreaWrapper: styled.div`
    margin-top: 24px;
  `,
  SwitchWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3px;
  `,
  DotHamburger: styled(DotHamburgerSvg)``,
  ActionWrapper: styled.div`
    display: flex;
    margin-top: 56px;
  `,
  Create: styled(Button)``,
  Discard: styled(Button)`
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
  InfoWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ValueInfo: styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: ${coreColors.neutral.grey600};
  `,
  PricePerItemWrapper: styled.div`
    width: 328px;
  `,
  UnitPriceWrapper: styled.div`
    width: 179px;
    margin-left: 48px;
  `,
  OnSaleTypeWrapper: styled.div`
    margin-top: 8px;
  `,
  CardOnSaleType: styled.div`
    width: 140.32px;
    height: 83px;
    background: #ffffff;
    box-shadow: 0 1px 1px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  FeeInputWrapper: styled.div`
    display: flex;
    margin-top: 28px;
  `,
  FeeWrapper: styled.div`
    margin-top: 36px;
  `,
  ServiceFee: styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #23262f;
    display: flex;
    margin-bottom: 17px;
  `,
  Receive: styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    display: flex;
  `,
  ServiceFeeWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 328px;
  `,
  ServiceFeeValue: styled.div`
    margin-left: 48px;
    width: 179px;
    display: flex;
    justify-content: flex-end;
  `,
  ReceiveWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 328px;
  `,
  ReceiveValue: styled.div`
    margin-left: 48px;
    width: 179px;
    display: flex;
    justify-content: flex-end;
  `,
  ApproximatelyWrapper: styled.div`
    display: flex;
    margin-bottom: 37px;
  `,
  ApproximatelyValue: styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #23262f;
    margin-left: 48px;
    width: 179px;
    display: flex;
    justify-content: flex-end;
  `,
  BackButton: styled.div`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    margin-bottom: 46px;
    cursor: pointer;
  `,
  Markdown: styled.a`
    color: ${coreColors.brand.blue};
    cursor: pointer;
  `,
  FeeContainer: styled.div<{ isShow: boolean }>`
    transition: height 0.4s ease-out;
    height: ${({ isShow }) => (isShow ? "376px" : "0px")};
  `,
  //new
  Properties: styled(PropertiesArea)`
    .plus-gradient-button {
      display: none;
    }
  `,
  DropdownCollectionFake: styled.div``,
  DropdownWrapper: styled.div`
    position: relative;
  `,
  DropdownFake: styled.input`
    background: none;
    outline: none;
    width: 100%;
    height: 52px;
    border-radius: 12px;
    border: 1px solid ${coreColors.neutral.grey300};
    padding: 15px 28px;
    ${typoDesktopModifiers.body2}
    font-weight: 600;
    color: ${coreColors.neutral.grey400};

    ::placeholder {
      color: ${coreColors.neutral.grey400};
    }

    :disabled {
      cursor: not-allowed;
    }
  `,
  DropdownTitle: styled.div`
    ${typoDesktopModifiers.body1};
    color: ${coreColors.neutral.grey900};
    font-weight: 700;
    margin-bottom: 8px;
    margin-top: 24px;
  `,
  Subtitle: styled.div`
    ${typoDesktopModifiers.subtitle2};
    color: ${coreColors.neutral.grey600};
    font-weight: 600;
    margin-bottom: 8px;
  `,
  ChevDown: styled(ChevDownSvg)`
    position: absolute;
    top: 16px;
    right: 15px;
    cursor: not-allowed;
  `,
};

export default Styled;
