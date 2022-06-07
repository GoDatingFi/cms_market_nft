import styled from "styled-components";
import { elevations, typoDesktopModifiers } from "utils/styles";
import { coreColors, mixColors } from "utils/colors";
import Input from "components/input";
import Select from "components/dropdown/multi";
import Button from "components/button";
import Image from "next/image";
import PlusGradientSvg from "assets/images/icons/plusGradient.svg";
import FileUploadSvg from "assets/images/icons/fileUpload.svg";
import DotHamburgerSvg from "assets/images/icons/dotHamburger.svg";
import CloseSvg from "assets/images/icons/close.svg";
import ImagePreviewSvg from "assets/images/icons/imagePreview.svg";
import AlertTriangleSvg from "assets/images/icons/alertTriangle.svg";

const Styled = {
  Title: styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: ${coreColors.neutral.grey900};
  `,
  SubTitleSwitch: styled.span`
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
      grid-row: 1;
      padding: 44px 0 0 29px;
    }
    &.card-right {
      grid-column: 3;
      grid-row: 1;
      background: ${mixColors.ash};
      padding: 14px 22px 25px 22px;
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
  NFTTitle: styled.div`
    margin-top: 12px;
    margin-bottom: 12px;
  `,
  CollectionTitle: styled.div`
    margin: 12px 0 12px 18px;
  `,
  NFTContentDescription: styled.div`
    ${typoDesktopModifiers.subtitle2};
    font-weight: 600;
    color: ${coreColors.neutral.grey600};
  `,
  UploadContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
    grid-auto-rows: minmax(100px, auto);
  `,
  NumberOfCopiesAndRoyalties: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    grid-auto-rows: minmax(100px, auto);
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
    overflow: hidden;
    border: ${({ isDrag }) =>
      isDrag
        ? `1px dashed ${coreColors.neutral.grey600}`
        : "1px dashed transparent"};

    &.collection-logo {
      width: 160px;
      height: 160px;
      border-radius: 80px;
      padding: 0;
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
    border: 1px solid ${coreColors.neutral.grey400};
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  Input: styled(Input)<{ marginTop?: number }>`
    margin-top: ${({ marginTop }) => (marginTop ? marginTop + "px" : "unset")};
    width: 100%;
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
    .custom-option {
      ${typoDesktopModifiers.body2}
      font-weight: 600;
      color: ${coreColors.neutral.grey600};
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
  BannerPreview: styled.div`
    width: 100%;

    > span {
      position: unset !important;
    }

    .image {
      object-fit: contain !important;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
      border-radius: 20px;
      max-height: 300px !important;
    }
    @media only screen and (min-width: 768px) {
      margin: auto;
      max-width: 450px;
    }
    @media only screen and (min-width: 1200px) {
      max-width: 758px;
    }
  `,
  CloseIcon: styled(CloseSvg)`
    z-index: 1000;
    position: absolute;
    top: 17px;
    right: 24px;
    cursor: pointer;
  `,
  ImagePreview: styled(ImagePreviewSvg)`
    margin-bottom: 14px;
  `,
  LogoPreview: styled(ImagePreviewSvg)`
    /* margin-bottom: 14px; */
    position: absolute;
  `,
  AlertTriangle: styled(AlertTriangleSvg)`
    margin-right: 8px;
    width: 24px;
    height: 24px;
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
  InputUploadLogoFile: styled.input`
    width: 100%;
    height: 100%;
    opacity: 0;
    position: relative;
    z-index: 1000;
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
  Create: styled(Button)`
    width: 144px;
  `,
  Discard: styled(Button)`
    margin-right: 38px;
    width: 144px;
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

    display: grid;
    grid-template-columns: repeat(6, 1fr);
  `,
  CardInfoProperties: styled.div`
    background: ${coreColors.neutral.white};
    box-shadow: 0 8px 30px rgba(31, 47, 70, 0.08);
    border-radius: 12px;
    width: 149px;
    height: 83px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
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
  Preview: styled.div`
    padding: 33px 15px 0 15px;
    width: 100%;
    height: 100%;
  `,
  PreviewBanner: styled.div`
    width: 100%;
    height: 98px;
    background: ${coreColors.neutral.grey200};
    border-radius: 12px;
    position: relative;
    overflow: hidden;
  `,
  PreviewLogoInner: styled.div`
    position: absolute;
    width: 76px;
    height: 76px;
    border-radius: 38px;
    margin-left: 2px;
    margin-top: 2px;
    background: ${coreColors.neutral.grey200};
    overflow: hidden;
  `,
  PreviewLogo: styled.div`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: ${coreColors.neutral.white};
    margin: -40px auto 0 auto;
    position: relative;
  `,
  PreviewName: styled.div`
    ${typoDesktopModifiers.body1};
    font-weight: 700;
    text-align: center;
    margin: 17px 0 16px 0;
    word-break: break-word;
    white-space: break-spaces;
  `,

  Markdown: styled.a`
    color: ${coreColors.brand.blue};
    cursor: pointer;
  `,
  BackButton: styled.div`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    margin-bottom: 46px;
    cursor: pointer;
  `,
  ButtonTitle: styled.div`
    color: ${coreColors.neutral.grey900};
    ${typoDesktopModifiers.h6};
    font-weight: 600;
    margin-left: 10px;
  `,
};

export default Styled;
