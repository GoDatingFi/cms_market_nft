import styled from "styled-components";
import { coreColors, mixColors } from "utils/colors";
import {
  typoDesktopModifiers,
  elevations,
  typoMobileModifiers,
} from "utils/styles";
import Button from "components/button";
import ChevDown from "assets/images/icons/chevDown.svg";

const Styled = {
  Select: styled.div`
    display: block;
    position: relative;

    .select-button {
      cursor: pointer;
    }

    &:hover .select-container {
      position: absolute;
      display: block;
    }

    .select-container {
      z-index: 100;
      display: none;
      top: 44px;
    }

    .select-option-active {
      color: ${coreColors.neutral.white};
      background: ${coreColors.brand.blue};
    }
  `,
  SelectOptions: styled.div`
    box-sizing: border-box;
    margin-top: 24px;
    padding: 10px 0;
    min-width: 186px;
    border-radius: 10px;
    background: ${coreColors.neutral.white};
    ${elevations.lvl3}
  `,
  Option: styled.div`
    box-sizing: border-box;
    padding: 7px 21px;
    display: flex;
    align-items: center;
    ${typoDesktopModifiers.body1}
    font-weight: 700;
    cursor: pointer;
    color: ${coreColors.neutral.grey900};

    &:hover {
      color: ${coreColors.neutral.white};
      background: ${coreColors.brand.blue};
    }
  `,
  ButtonGroup: styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    min-width: 279px;
    padding: 20px 41px;
  `,
  ClearButton: styled(Button)`
    background: ${coreColors.neutral.grey500};
    min-width: 86px;
    height: 35px;

    &:hover {
      background: ${coreColors.neutral.grey700};
    }

    &:focus {
      background: ${coreColors.neutral.grey700};
    }
  `,
  ApplyButton: styled(Button)`
    min-width: 86px;
    height: 35px;
  `,
  Label: styled.div`
    position: relative;
    width: 100%;
    height: 52px;
    border-radius: 12px;
    background: ${coreColors.neutral.white};
    border: 1px solid ${coreColors.neutral.grey300};
    cursor: pointer;
    padding: 16px 52px 16px 22px;
    color: ${coreColors.neutral.grey600};
    ${typoMobileModifiers.label};
    @media only screen and (min-width: 880px) {
      ${typoDesktopModifiers.button};
    }
  `,
  CurrentValueWrapper: styled.div`
    width: 100%;
    overflow-x: auto;

    ::-webkit-scrollbar {
      width: 0;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: transparent;
    }

    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  `,
  CurrentValue: styled.div`
    width: max-content;
  `,
  Placeholder: styled.div`
    ${typoDesktopModifiers.body2};
    font-weight: 600;
    color: ${coreColors.neutral.grey400};
  `,
  SelectOptionsCheck: styled.div<{ $isActive: boolean }>`
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
    position: absolute;
    z-index: 10;
    box-sizing: border-box;
    margin-top: 12px;
    padding: 10px 0;
    min-width: 186px;
    width: 100%;
    border-radius: 10px;
    background: ${coreColors.neutral.white};
    ${elevations.lvl3}
  `,
  SelectOptionsWrapper: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 24px 20px;
    @media only screen and (min-width: 880px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 20px 50px;
    }
    @media only screen and (min-width: 1200px) {
      grid-template-columns: repeat(6, 1fr);
      padding: 28px 54px;
    }
  `,
  Arrow: styled(ChevDown)<{ $isActive: boolean }>`
    position: absolute;
    right: 14px;
    top: 14px;
    width: 24px;
    transform: rotate(${({ $isActive }) => $isActive && "-180deg"});
    transition: all 0.3s ease-in-out;
  `,
  OptionLabel: styled.div`
    cursor: pointer;
    display: flex;
    margin: 12px 0;

    .select-checkbox-active {
      background: ${coreColors.brand.blue};
      transition: all 0.3s ease-in-out;
    }

    ${typoMobileModifiers.label};
    color: ${coreColors.neutral.grey600};

    @media only screen and (min-width: 768px) {
      ${typoDesktopModifiers.button};
      color: ${coreColors.neutral.grey600};
    }
  `,
  Checkbox: styled.div`
    width: 16px;
    height: 16px;
    margin-right: 7px;
    border: 1px solid ${coreColors.neutral.grey400};
    background: ${coreColors.neutral.white};
  `,
  LabelText: styled.div``,
  MainLabel: styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: ${mixColors.title};

    &.custom-label {
      margin-bottom: 12px;
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
};

export default Styled;
