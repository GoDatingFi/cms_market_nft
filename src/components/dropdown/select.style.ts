import styled from "styled-components";
import Image from "next/image";
import { coreColors, mixColors } from "utils/colors";
import { typoDesktopModifiers, elevations } from "utils/styles";
import ChevDown from "assets/images/icons/chevDown.svg";

const Styled = {
  Label: styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: ${mixColors.title};
    &.custom-label {
      margin-bottom: 12px;
    }
  `,
  Start: styled.span`
    color: red;
  `,
  ValueWrapper: styled.div`
    display: flex;
    width: 97%;
    justify-content: flex-start;
    overflow: hidden;
    align-items: center;
    span {
      margin-right: 5px !important;
    }
  `,
  SubLabel: styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${coreColors.neutral.grey600};
    margin-top: 5px;
    margin-bottom: 8px;
  `,
  SelectBox: styled.div`
    cursor: pointer;
    border-radius: 12px;
    border: 1px solid ${coreColors.neutral.grey300};
    box-sizing: border-box;
    padding: 7px 15px;
    position: relative;
    ${typoDesktopModifiers.body1};
    font-weight: 700;
    color: ${coreColors.neutral.grey600};
    display: flex;
    justify-content: space-between;
    height: 36px;
    width: 135px;

    .selected {
      ${typoDesktopModifiers.body2}
      font-weight: 600;
      color: ${coreColors.neutral.grey600};
    }
    .selected.placeholder {
      color: ${coreColors.neutral.grey400};
    }

    @media only screen and (min-width: 768px) {
      height: 42px;
      width: 170px;
    }
  `,
  SelectWrapper: styled.div`
    position: relative;

    &.create-nft_collection-dropdown {
      .custom-select-options > div {
        &:hover {
          color: #373c3e !important;
          background: #f5f5f5 !important;
        }
      }
    }
  `,
  OptionsWrap: styled.div<{ isActive: boolean }>`
    z-index: 100;
    min-height: 38px;
    width: 100%;
    cursor: pointer;
    position: absolute;
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    ${elevations.lvl3}
    border-radius: 10px;
    padding: 8px 0;
    background: ${coreColors.neutral.white};
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 19px;
    ::-webkit-scrollbar {
      width: 9px;
      height: 9px;
    }

    ::-webkit-scrollbar-track {
      background: ${coreColors.neutral.white};
      border-radius: 10px;
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
      background: ${coreColors.neutral.white};
    }
  `,
  SelectOption: styled.div`
    box-sizing: border-box;
    padding: 7px 15px;
    display: flex;
    align-items: center;
    ${typoDesktopModifiers.body1}
    font-weight: 700;
    cursor: pointer;
    color: ${coreColors.neutral.grey600};
    background: ${coreColors.neutral.white};

    &:hover {
      color: ${coreColors.neutral.white};
      background: ${coreColors.brand.blue};
      > .create-collection {
        /* background: unset !important;
        -webkit-background-clip: unset !important;
        -webkit-text-fill-color: unset !important;
        color: ${coreColors.neutral.white} !important; */
        font-weight: 900 !important;
        font-size: 18px !important;
        line-height: 24px !important;
      }
    }
    span {
      margin-right: 6px !important;
    }
  `,
  Arrow: styled(ChevDown)<{ $isActive: boolean }>`
    width: 24px;
    transform: rotate(${({ $isActive }) => $isActive && "-180deg"});
    transition: all 0.3s ease-in-out;
  `,
  Image: styled(Image)``,
  PlaceHolder: styled.span``,
};

export default Styled;
