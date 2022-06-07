import styled from "styled-components";
import Input from "components/input";
import { typoDesktopModifiers, typoMobileModifiers } from "utils/styles";
import { coreColors, mixColors } from "utils/colors";
import Select from "components/dropdown/select";
import Button from "components/button";
import RefreshSvg from "assets/images/icons/refresh.svg";
import Table from "components/table";
import SearchSvg from "assets/images/icons/search.svg";

const Styled = {
  OptionsBar: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  LeftHand: styled.div`
    display: flex;
    align-items: center;
  `,
  SearchSvg: styled(SearchSvg)`
    path {
      fill: ${coreColors.neutral.grey900};
    }
  `,
  SearchNFTInput: styled(Input)`
    .input {
      height: 36px;
      width: 166px;
      ${typoMobileModifiers.caption2};
      background-color: ${coreColors.neutral.white};
      border: 2px solid ${coreColors.neutral.grey300};

      ::placeholder {
        color: ${coreColors.neutral.grey600};
      }

      @media only screen and (min-width: 768px) {
        height: 42px;
        width: 254px;
        ${typoDesktopModifiers.body2};
        font-weight: 600;
      }
    }

    .pre-icon {
      top: 56%;
      z-index: 1;
    }

    @media only screen and (min-width: 768px) {
      margin-right: 21px;
    }
  `,
  Select: styled(Select)`
    margin-right: 32px;
    .custom-select {
      width: 184px;
      display: flex;
      align-items: center;
      background-color: ${coreColors.neutral.grey200};
    }
    .selected {
      font-weight: 600;
    }
  `,
  PageSizeSelect: styled(Select)`
    .custom-select {
      width: 115px;
      display: flex;
      border-radius: 30px;
      align-items: center;
      background-color: ${coreColors.neutral.white};
      border: 1px solid ${coreColors.neutral.grey900};
    }

    .selected {
      ${typoDesktopModifiers.caption};
      ${coreColors.neutral.grey500};
    }

    .custom-option {
      padding: 8px 15px;
    }

    .custom-select-options {
      top: 25px;
    }
  `,
  CreateNFTButton: styled(Button)`
    height: 40px;
    min-width: 144px;
  `,
  RefreshButton: styled(RefreshSvg)`
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31));
    }
  `,
  ListingTable: styled(Table)`
    margin-top: 45px;
    padding: 0 12px 12px 12px;
    background-color: ${coreColors.neutral.white};

    .table-header-overlay {
      height: 68px;
      background: ${mixColors.ash};
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
    }

    .table-header-cell {
      height: 68px;
    }

    .table-wrap {
      background: ${coreColors.neutral.white};
    }
    .table-header {
      th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: transparent;
      }
      tbody th {
        position: sticky;
        left: 0;
      }
    }
    .table-body {
      background-color: ${coreColors.neutral.white};
    }

    .table-body-cell,
    .table-header-cell {
      padding: 19px 24px;
    }
  `,
  EmptyText: styled.div`
    width: 100%;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 768px) {
      height: 262px;
    }
  `,
  EmptyTitle: styled.div`
    ${typoDesktopModifiers.body2};
    font-weight: 600;
    color: ${coreColors.neutral.grey400};
    margin-left: -18px;
    margin-top: 33px;
  `,
  Cell: styled.div`
    text-align: center;
    color: ${coreColors.neutral.grey600};
    ${typoDesktopModifiers.body2};
    font-weight: 600;
  `,
  Date: styled.div`
    text-align: left;
    color: ${coreColors.neutral.grey600};
    ${typoDesktopModifiers.body2};
    font-weight: 600;
  `,
  HeaderLeft: styled.div`
    text-align: left;
  `,
  HeaderCenter: styled.div`
    text-align: center;
  `,
  Name: styled.div`
    text-align: center;
    color: ${coreColors.neutral.grey600};
    ${typoDesktopModifiers.body2};
    font-weight: 600;
    display: flex;
    align-items: center;
  `,
  ViewDetail: styled.div`
    cursor: pointer;
    color: ${coreColors.functional.info};
    text-align: center;
    &:hover {
      text-decoration: underline;
    }
  `,
  PaginationBar: styled.div`
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
  `,
  ImageWrap: styled.div`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    overflow: hidden;
    margin-right: 8px;
  `,
};

export default Styled;
