import styled from "styled-components";
import { elevations, typoDesktopModifiers } from "utils/styles";
import { coreColors, mixColors } from "utils/colors";
import Input from "components/input";
import Select from "components/dropdown/select";
import Button from "components/button";
import Image from "next/image";

import PlusGradientSvg from "assets/images/icons/plusGradient.svg";
import FileUploadSvg from "assets/images/icons/fileUpload.svg";
import DotHamburgerSvg from "assets/images/icons/dotHamburger.svg";
import CloseSvg from "assets/images/icons/close.svg";
import ImagePreviewSvg from "assets/images/icons/imagePreview.svg";
import AlertTriangleSvg from "assets/images/icons/alertTriangle.svg";
import DollarCircleSvg from "assets/images/icons/dollarCircle.svg";
import QuestionCircleSvg from "assets/images/icons/questionCircle.svg";
import Tooltip from "components/tooltip";

const Styled = {
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
      @media only screen and (max-width: 768px) {
        padding: 24px 32px !important;
      }
    }
    &.card-input-property {
      margin-top: 34px;
      padding: 20px 50px;
      @media only screen and (max-width: 768px) {
        margin-top: 25px !important;
        padding: 18px 15px !important;
        background: url("/images/backgroundCreateNFT.png") no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
    }
    &.card-put-item-on-sale {
      margin-top: 34px;
      padding: 20px 50px;
      @media only screen and (max-width: 768px) {
        margin-top: 25px !important;
        padding: 18px 15px !important;
      }
    }
    &.card-display-on-market-place {
      margin-top: 34px;
      padding: 20px 50px;
      @media only screen and (max-width: 768px) {
        margin-top: 25px !important;
        padding: 18px 15px !important;
      }
    }
  `,
  NFTTitle: styled.div`
    margin-top: 12px;
    margin-bottom: 12px;
  `,
  CollectionTitle: styled.div`
    margin: 12px 0 12px 18px;
  `,
  NFTContentDescription: styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.003em;
    color: ${mixColors.content3};
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
  CollectionLogoWrap: styled.div`
    display: flex;
    align-items: center;
    margin-top: 14px;
  `,
  UploadArea: styled.div<{ isDrag: boolean }>`
    span {
      position: absolute !important;
    }
    padding: 64px 8px;
    background: ${mixColors.uploadBackGround};
    border-radius: 16px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    position: relative;
    border: ${({ isDrag }) =>
      isDrag
        ? `1px dashed ${coreColors.neutral.grey600}`
        : "1px dashed transparent"};

    @media only screen and (max-width: 1024px) {
      padding: 15px 0px;
      height: 305px !important;
    }

    &.collection-logo {
      width: 160px;
      height: 160px;
      border-radius: 80px;
      padding: 0;

      svg {
        margin-bottom: unset;
      }
    }
    @media only screen and (max-width: 1025px) {
      margin-bottom: 24px;
    }
  `,
  DrapDropFileOr: styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${mixColors.neutrals4};
  `,
  UploadFromYourDevice: styled.div`
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: ${mixColors.link};
  `,
  BorderDash: styled.div`
    margin-top: 17px;
    background: ${coreColors.neutral.white};
    border: 1px dashed ${coreColors.neutral.grey600};
    box-sizing: border-box;
    border-radius: 10px;
    height: 364px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media only screen and (max-width: 768px) {
      height: 350px !important;
    }
  `,
  Input: styled(Input)<{ marginTop?: number }>`
    margin-top: ${({ marginTop }) => (marginTop ? marginTop + "px" : "unset")};
    input {
      height: 52px;
    }
  `,
  DropdownERC: styled(Select)`
    margin-top: 24px;
    .custom-select {
      height: 52px;
      width: 100%;
    }
  `,
  DropdownUnitPrice: styled(Select)`
    margin-top: 62px;
    .custom-select {
      height: 52px;
      width: 100%;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 16px;
    }
  `,
  DropdownCollection: styled(Select)`
    margin-top: 24px;
    .custom-select {
      height: 52px;
      width: 100%;
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
  PropertiesLeft: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  PropertiesWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 62px;
  `,
  PropertiesLeftTitle: styled.div`
    margin-left: 28px;
  `,
  PlusGradient: styled(PlusGradientSvg)`
    cursor: pointer;
  `,
  FileUpload: styled(FileUploadSvg)`
    margin-bottom: 10px;
  `,
  DotHamburger: styled(DotHamburgerSvg)``,
  CloseIcon: styled(CloseSvg)`
    z-index: 99999999;
    position: absolute;
    top: 17px;
    right: 24px;
    cursor: pointer;
  `,
  ImagePreview: styled(ImagePreviewSvg)`
    margin-bottom: 14px;
  `,
  AlertTriangle: styled(AlertTriangleSvg)`
    margin-right: 8px;
    width: 24px;
    height: 24px;
  `,
  DollarCircle: styled(DollarCircleSvg)`
    margin-bottom: 8px;
  `,
  QuestionCircle: styled(QuestionCircleSvg)`
    margin-left: 10px;
  `,
  DollarCircleTitle: styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  `,
  PreviewOfYourNFT: styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.003em;
    color: ${mixColors.content3};
  `,
  InputUploadFile: styled.input`
    visibility: hidden;
  `,
  Message: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  MessageText: styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: ${mixColors.content3};
  `,
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
  Image: styled(Image)``,
  InfoImage: styled(Image)``,
  PropertiesCardWrapper: styled.div`
    margin-top: 34px;
    gap: 40px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-bottom: 113px;
    @media only screen and (max-width: 1400px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media only screen and (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (max-width: 1100px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 576px) and (max-width: 960px) {
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 20px !important;
    }
    @media only screen and (min-width: 280px) and (max-width: 575px) {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 20px !important;
      gap: 6px !important;
    }
  `,
  CardInfoProperties: styled.div`
    background: ${coreColors.neutral.white};
    box-shadow: 0px 8px 30px rgba(31, 47, 70, 0.08);
    border-radius: 12px;
    width: 149px;
    height: 83px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media only screen and (max-width: 1100px) {
      justify-self: center;
    }
    @media only screen and (max-width: 960px) {
      justify-self: center;
    }
  `,
  NameInfo: styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: ${coreColors.neutral.grey600};
    margin-bottom: 5px;
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
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  `,
  UnitPriceWrapper: styled.div`
    width: 179px;
    margin-left: 48px;
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-left: 0px;
    }
  `,
  OnSaleTypeWrapper: styled.div`
    margin-top: 8px;
    @media only screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  `,
  CardOnSaleType: styled.div`
    width: 140.32px;
    height: 83px;
    background: ${coreColors.neutral.white};
    box-shadow: 0px 1px 1px rgba(9, 30, 66, 0.25),
      0px 0px 1px rgba(9, 30, 66, 0.31);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  FeeInputWrapper: styled.div`
    display: flex;
    @media only screen and (max-width: 768px) {
      display: block;
    }
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
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-left: 0px;
    }
  `,
  ReceiveWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 328px;
    @media only screen and (max-width: 768px) {
      width: 380px;
    }
  `,
  ReceiveValue: styled.div`
    margin-left: 48px;
    width: 179px;
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-left: 0px;
    }
  `,
  ApproximatelyWrapper: styled.div`
    display: flex;
    /* margin-bottom: 37px; */
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
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
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
    height: ${({ isShow }) => (isShow ? "350px" : "0px")};
    @media only screen and (max-width: 768px) {
      height: ${({ isShow }) => (isShow ? "430px" : "0px")};
    }
  `,
  TooltipText: styled(Tooltip)`
    display: flex;
    justify-content: center;
    align-items: center;

    .tooltip-content {
      text-align: left;
      padding: 12px 8px;
      width: 212px;
      min-height: 54px;
      height: unset;
      left: 4px;
      @media only screen and (min-width: 768px) {
        width: 360px;
        left: -70px !important;
      }
    }
  `,
  CreateCollectionList: styled.a`
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 16px !important;
    line-height: 20px !important;
    color: #6970fe !important;
    width: 100% !important;
  `,
};

export default Styled;
