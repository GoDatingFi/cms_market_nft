import styled from "styled-components";
import { coreColors } from "utils/colors";
import { typoDesktopModifiers, elevations } from "utils/styles";
import ChevDown from "assets/images/icons/chevDown.svg";
import DeleteDoubleLine from "assets/images/icons/deleteDoubleLine.svg";
import CheckMultiSelect from "assets/images/icons/check-multi-select.svg";
import CheckDown from "assets/images/icons/chevDown.svg";

const Styled = {
  Select: styled.div<{ isActive: boolean }>`
    display: block;
    position: relative;
    width: 105px;
    height: 44px;
    .select-button {
      cursor: pointer;
    }

    .select-container {
      z-index: 100;
      display: ${({ isActive }) => (isActive ? "flex" : "none")};
      top: 44px;
      width: 278px;
      z-index: 185;
    }

    .active-button {
      color: ${coreColors.neutral.white};
      background: ${coreColors.neutral.primary100};
      svg {
        path {
          stroke: ${coreColors.neutral.white};
        }
      }
    }

    .select-option-active {
      display: flex;
      justify-content: space-between;
      color: ${coreColors.brand.primary} !important;
      background: ${coreColors.neutral.white} !important;
      color: ${coreColors.neutral.white};
      & svg {
        path {
          fill: ${coreColors.brand.primary};
        }
      }
    }
  `,
  Button: styled.button`
    display: flex;
    font-weight: 500;
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
  Arrow: styled(ChevDown)`
    width: 12px;
    transition: all 0.3s ease-in-out;
  `,
  CheckMultiSelect: styled(CheckMultiSelect)``,
  Delete: styled(DeleteDoubleLine)`
    width: 12px;
    transition: all 0.3s ease-in-out;
    path {
      stroke: #908e9f;
    }
  `,
  SelectOptions: styled.div`
    box-sizing: border-box;
    z-index: 100;
    width: 278px;
    box-sizing: border-box;
    padding: 12px;
    min-width: 186px;
    border-radius: 10px;
    margin-top: 16px;
    z-index: 100;
    background: ${coreColors.neutral.white};
    ${elevations.lvl3}
  `,
  CheckDown: styled(CheckDown)`
    width: 18px;
    margin-left: 4px;
  `,
  Option: styled.div`
    line-height: 22.4px;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 500;
    font-family: SF Pro Text;
    height: 46px;
    color: ${coreColors.neutral.grey900};

    &:hover {
      color: ${coreColors.neutral.white};
      background: ${coreColors.brand.blue};
    }
  `,
  SortByOption: styled.div`
    box-sizing: border-box;
    padding: 5px 21px;
    display: flex;
    align-items: center;
    ${typoDesktopModifiers.body1}
    font-weight: 600;
    color: ${coreColors.neutral.grey400};
    cursor: pointer;
  `,
  SelectContainer: styled.div`
    box-sizing: border-box;
    z-index: 100;
    position: absolute;
    right: 0;
  `,
};

export default Styled;
