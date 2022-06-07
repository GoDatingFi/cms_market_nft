import styled from "styled-components";
import Input from "components/input";
import {
  elevations,
  typoDesktopModifiers,
  typoMobileModifiers,
} from "utils/styles";
import { coreColors, mixColors } from "utils/colors";
import Select from "components/dropdown/select";
import Button from "components/button";
import RefreshSvg from "assets/images/icons/refresh.svg";
import FatArrowUpSvg from "assets/images/icons/fat-arrow-up.svg";
import FatArrowDownSvg from "assets/images/icons/fat-arrow-down.svg";
import Table from "components/table";
import Image from "next/image";
import Pagination from "components/pagination";

const Styled = {
  SortHeader: styled.div`
    text-align: left;
    cursor: pointer;
  `,
  Image: styled(Image)`
    border-radius: 100%;
    object-fit: cover;
  `,
  NftName: styled.div`
    max-width: calc(100% - 50px);
  `,
  SelectWrapper: styled.div`
    order: 3;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 32px;
    @media only screen and (min-width: 768px) {
      order: 2;
    }
  `,
  TimeCell: styled.div`
    text-align: left;
    color: ${coreColors.neutral.grey600};
    ${typoMobileModifiers.label2};
    @media only screen and (min-width: 768px) {
      ${typoDesktopModifiers.body2};
      font-weight: 600;
    }
  `,
  StatusCell: styled.div`
    display: flex;
    justify-content: center;
  `,
  NtfNameWrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${coreColors.neutral.grey600};
    ${typoMobileModifiers.label2};
    @media only screen and (min-width: 768px) {
      ${typoDesktopModifiers.body2};
      font-weight: 600;
    }
  `,
  OptionsBar: styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    row-gap: 20px;
    @media only screen and (min-width: 768px) {
      justify-content: space-between;
      flex-wrap: wrap;
    }
  `,
  LeftHand: styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    row-gap: 20px;
    columns: 20px;
    justify-content: center;
  `,
  SearchNFTInput: styled(Input)`
    order: 1;
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
      margin-right: 32px;
    }
  `,
  Select: styled(Select)`
    width: 50%;
    .custom-select {
      width: 100%;
      min-width: 150px;
      display: flex;
      align-items: center;
      background-color: ${coreColors.neutral.white};
      border: 2px solid ${coreColors.neutral.grey300};
      div {
        position: relative;
        width: 100%;
      }
      @media only screen and (min-width: 768px) {
        min-width: 188px;
      }
    }
    .selected {
      max-width: 150px;
      overflow-x: hidden !important;
      font-weight: 600;
      font-size: ${typoMobileModifiers.caption};
      white-space: nowrap;
      @media only screen and (min-width: 768px) {
        font-size: ${typoDesktopModifiers.subtitle1};
        max-width: 300px;
      }
    }
    .select-wrapper {
      width: 100%;
    }
    .custom-select-options {
      max-height: 60vh;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        width: 9px;
        height: 9px;
      }

      ::-webkit-scrollbar-track {
        background: ${coreColors.neutral.white};
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
    }
  `,
  PageSizeSelect: styled(Select)`
    order: 2;
    @media only screen and (min-width: 768px) {
      order: 1;
    }
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
    margin-left: auto;
    margin-right: auto;
    @media only screen and (min-width: 768px) {
      margin-right: 0;
    }
  `,
  RefreshButton: styled.div`
    order: 2;
    width: 24px;
    height: 24px;
    @media only screen and (min-width: 768px) {
      order: 3;
      margin-left: 36px;
    }
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31));
    }
  `,
  RefreshIcon: styled(RefreshSvg)`
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31));
    }
  `,
  ListingTable: styled(Table)`
    margin-top: 45px;
    padding: 12px;
    background-color: ${coreColors.neutral.white};

    .table-header-overlay {
      height: 60px;
      background: ${mixColors.ash};
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;

      @media only screen and (min-width: 768px) {
        height: 68px;
      }
    }

    .table-wrap {
      min-height: 120px;
      max-height: 600px;
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
  Collection: styled.div`
    text-align: left;
    color: ${coreColors.neutral.grey600};
    ${typoMobileModifiers.label2};
    @media only screen and (min-width: 768px) {
      ${typoDesktopModifiers.body2};
      font-weight: 600;
    }
  `,
  Cell: styled.div`
    text-align: center;
    color: ${coreColors.neutral.grey600};
    ${typoMobileModifiers.label2};
    @media only screen and (min-width: 768px) {
      ${typoDesktopModifiers.body2};
      font-weight: 600;
    }
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
    text-align: end;
    &:hover {
      text-decoration: underline;
    }
  `,
  PaginationBar: styled.div`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  `,
  Pagination: styled(Pagination)`
    order: 1;
    @media only screen and (min-width: 768px) {
      order: 2;
    }
  `,
  ImageWrap: styled.div`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    overflow: hidden;
    margin-right: 8px;
  `,
  FatArrowUp: styled(FatArrowUpSvg)``,
  FatArrowDown: styled(FatArrowDownSvg)``,
  HeaderWithSort: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    column-gap: 6px;

    .arrow-wrapper {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      row-gap: 3px;
      cursor: pointer;
    }
  `,
  CenterHeader: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  `,
  RightHeader: styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
    align-items: center;
    margin-right: 45px;
  `,
  LeftHeader: styled.div`
    text-align: left;
  `,
};

export default Styled;
