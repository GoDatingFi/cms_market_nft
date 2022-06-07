import styled from "styled-components";
import { coreColors } from "utils/colors";
import { typoDesktopModifiers, elevations } from "utils/styles";
import Button from "components/button";
import ChevDown from "assets/images/icons/chevDown.svg";
import Input from "../input";
import PriceRange from "assets/images/icons/priceRange.svg";
import DeleteDoubleLine from "assets/images/icons/deleteDoubleLine.svg";

const Styled = {
  Select: styled.div<{ $width: string; isActive: boolean }>`
    height: 44px;
    width: ${({ $width }) => $width};
    margin-right: 12px;
    z-index: 100;
    display: block;
    position: relative;

    .select-button {
      cursor: pointer;
    }

    .select-container {
      z-index: 100;
      display: ${({ isActive }) => (isActive ? "block" : "none")};
      top: 44px;
      position: absolute;
    }
    .active-button {
      position: absolute;
      display: block;
      color: ${coreColors.neutral.white};
      background: ${coreColors.neutral.primary100};
      svg {
        path {
          stroke: ${coreColors.neutral.white};
        }
      }
    }

    .select-option-active {
      justify-content: space-between;
      color: ${coreColors.neutral.primary100};
      background: ${coreColors.neutral.white};
    }
  `,
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    background: #ffffff;
    border: 0.5px solid #d1d1d6;
    box-sizing: border-box;
    border-radius: 50px;
    font-size: 14px;
    line-height: 19.6px;
    padding: 12px 16px;
    svg {
      margin-left: 4px;
    }
  `,
  PriceRangeIcon: styled(PriceRange)`
    margin-right: 4px;
  `,
  RangeButtonGroup: styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-top: 41px;
    padding: 0 10px;
  `,
  ClearButton: styled.button`
    width: 73px;
    border-radius: 8px;
    background-color: ${coreColors.neutral.grey400} !important;
    height: 38px;
    color: ${coreColors.neutral.white} !important;
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 500;
    border: none;
    font-family: SF Pro Text;
    &:hover {
      cursor: pointer;
    }
  `,
  ApplyButton: styled.button`
    border: none;
    border-radius: 8px;
    height: 38px;
    width: 77px;
    background: ${coreColors.neutral.primary100};
    color: ${coreColors.neutral.white};
    font-family: SF Pro Text;
    font-weight: 500;
    font-size: 16px;
    line-height: 22.4px;
  `,
  SelectContainer: styled.div`
    box-sizing: border-box;
  `,
  SelectContent: styled.div`
    box-sizing: border-box;
    margin-top: 16px;
    padding: 20px 30px;
    width: 279px;
    border-radius: 10px;
    background: ${coreColors.neutral.white};
    ${elevations.lvl3}
  `,
  CustomSelect: styled.div`
    width: 220px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid ${coreColors.neutral.grey300};
    box-sizing: border-box;
    padding: 5px 15px 5px;
    position: relative;
    ${typoDesktopModifiers.body1}
    font-weight: 600;
    cursor: pointer;
    color: ${coreColors.neutral.grey600};
    display: flex;
    height: 38px;
    justify-content: space-between;
  `,
  CustomSelectOption: styled.div<{ isActive: boolean }>`
    z-index: 100;
    box-sizing: border-box;
    min-height: 38px;
    max-height: 114px;
    overflow-y: auto;
    cursor: pointer;
    position: absolute;
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    ${elevations.lvl3}
    border-radius: 10px;
  `,
  CustomOption: styled.div`
    box-sizing: border-box;
    padding: 13px 21px;
    height: 38px;
    width: 220px;
    display: flex;
    align-items: center;
    ${typoDesktopModifiers.body1}
    font-weight: 600;
    cursor: pointer;
    color: ${coreColors.neutral.grey600};
    background: ${coreColors.neutral.white};

    &:hover {
      color: ${coreColors.neutral.white};
      background: ${coreColors.brand.blue};
    }
  `,
  Arrow: styled(ChevDown)`
    width: 12px;
    transition: all 0.3s ease-in-out;
  `,
  Delete: styled(DeleteDoubleLine)`
    width: 12px;
    transition: all 0.3s ease-in-out;
    path {
      stroke: #908e9f;
    }
  `,
  InputGroup: styled.div`
    box-sizing: border-box;
    display: flex;
    margin-top: 25px;
    justify-content: space-between;
  `,
  CustomInput: styled(Input)`
    width: 95px;
    height: 35px;
    .input {
      border: 2px solid ${coreColors.neutral.grey300};
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
  `,
};

export default Styled;
