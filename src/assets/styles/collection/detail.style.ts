import Button from "components/button";
import Select from "components/dropdown/select";
import Modal from "components/modal";
import styled from "styled-components";
import { coreColors, mixColors } from "utils/colors";
import {
  elevations,
  typoDesktopModifiers,
  typoMobileModifiers,
} from "utils/styles";
import ReactMarkdown from "react-markdown";

const Styled = {
  Container: styled.div``,
  Card: styled.div`
    background: ${coreColors.neutral.white};
    ${elevations.lvl3};
    border-radius: 16px;
    padding: 12px 24px 70px 24px;
    position: relative;
  `,
  ImageWrap: styled.div`
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
    border-radius: 8px;
    background: ${coreColors.neutral.grey200};
  `,
  LogoWrap: styled.div`
    width: 160px;
    height: 160px;
    overflow: hidden;
    border-radius: 80px;
    padding: 2px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 103px;
    background: ${coreColors.neutral.white};

    img {
      width: 156px;
      height: 156px;
      border-radius: 78px;
    }
  `,
  Title: styled.div`
    color: ${mixColors.black};
    ${typoMobileModifiers.largeTitle}
    margin-top: 95px;
    text-align: center;
  `,
  Row: styled.div`
    display: flex;
    margin-top: 23px;

    &:first-of-type {
      margin-top: 36px;
    }
  `,
  Part: styled.div`
    width: 25%;
  `,
  PartLabel: styled.div`
    color: ${mixColors.dark2};
    ${typoDesktopModifiers.h5}
    margin-bottom: 5px;
  `,
  PartDescription: styled.div`
    white-space: break-spaces;
    word-break: break-word;
  `,
  Description: styled.div`
    margin-top: 48px;
  `,
  DescriptionLabel: styled.div`
    color: ${mixColors.dark2};
    ${typoDesktopModifiers.subtitle1}
    margin-bottom: 5px;
  `,
  DescriptionContent: styled(ReactMarkdown)`
    word-wrap: break-word;
    max-height: 142px;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 9px;
      height: 9px;
    }

    ::-webkit-scrollbar-track {
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      background: ${mixColors.ashBlue};
      border-radius: 32px;
      ${elevations.lvl2};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${coreColors.brand.blue};
    }

    ::-webkit-scrollbar-corner {
      background: ${mixColors.ash};
    }
  `,
  ActionsGroup: styled.div`
    display: flex;
    justify-content: flex-end;

    svg {
      margin-right: -170px;
    }
  `,
  Actions: styled(Select)`
    .custom-select {
      opacity: 0;
    }
  `,
  DeleteModal: styled(Modal)`
    .content {
      padding: unset;
    }

    @media only screen and (min-width: 768px) {
      .content {
        height: 332px;
        width: 502px;
        margin-left: 240px;
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
      color: ${coreColors.neutral.grey600};
      ${typoMobileModifiers.subtitle};

      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.h5};
      }
    }

    .desc {
      color: ${mixColors.grey};
      ${typoMobileModifiers.label2};
      max-width: 300px;
      white-space: break-spaces;
      word-break: break-word;
      text-align: center;
      margin: 8px auto 30px auto;

      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.body2};
        font-weight: 600;
        max-width: 356px;
        margin: 16px auto 40px auto;
      }
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    justify-content: center;
  `,
  CancelButton: styled(Button)`
    margin: 0 19px;
    color: ${mixColors.white2};
    background: ${coreColors.neutral.grey500};
    &:hover {
      background: ${coreColors.neutral.grey700};
    }
    &:focus {
      background: ${coreColors.neutral.grey700};
    }
  `,
  ProceedButton: styled(Button)`
    margin: 0 19px;
    color: ${mixColors.white2};
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
