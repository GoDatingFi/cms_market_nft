import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export interface CurrencyName {
  [key: string]: string;
}

export interface PriceToUSD {
  [key: string]: { usd: number };
}

export interface PersonalInfo {
  user: User;
  tokens: {
    access: TokenInfo;
    refresh: TokenInfo;
  };
}

export interface MarketPlace {
  contractAddress: string;
  contractAbi: any;
}

export interface User {
  _id: string;
  address: string;
  nonce: number;
  dateCreated: string;
  dateUpdated: string;
  email?: string;
  username?: string;
  role?: string;
  avatar?: string;
  cover?: string;
}

export interface Layout {
  headerTitle: string;
  pageName: string;
  hasSidebar: boolean;
}

export interface NFTOverview {
  available: number;
  owners: number;
}

export interface NFTDetailListingItem {
  status: string;
  _id: string;
  nftId: string;
  sellerId: string;
  orderListingId: string;
  price: number;
  usdPrice: number;
  quantity: number;
  remainQuantity: number;
  from: string;
  dateCreated: string;
  dateUpdated: string;
  original?: boolean;
  acceptedToken?: string;
  orderIdListing?: number;
  unitPrice?: string;
}

export interface NFT {
  [key: string]: any;
  isUnlockable: boolean;
  unlockAbleContent: {
    mode: boolean;
    content: string;
  };
  nftInterface: string;
  numberOfView: number;
  attributes: Attributes[];
  displaySetting: boolean;
  unitPrice: string;
  _id: string;
  name: string;
  royaltyFee: number;
  description: string;
  price: number;
  seller: Seller;
  numberOfCopy: number;
  content: string;
  previewImage: string;
  typeContent: string;
  dateCreated: string;
  dateUpdated: string;
  categoryId: string;
  collectionId: string;
  collection: CollectionItem;
  verified?: boolean;
  category: Category;
  ipfsImage: string;
  tokenURI: string;
  totalMinted: number;
  totalOwner: number;
  totalSold: number;
  stage: string;
  status: string;
  tokenId: string;
  onSaleQuantity: number;
  pushItemOnSale: boolean;
  contractAddress: string;
  displayOnMarketplace: boolean;
  listing: Listing;
  txHash: string;
  hasListing?: boolean;
  createdByAdmin?: boolean;
  nftId: string;
  isSeller?: boolean;
  totalOwnedQuantity?: number;
}

interface Attributes {
  key: string;
  imageIcon: string;
  type: string;
  value: string;
}

interface Seller {
  role: string;
  _id: string;
  address?: string;
  nonce: number;
  avatar?: string;
  username?: string;
  email?: string;
  dateCreated: string;
  dateUpdated: string;
}

export interface CollectionItem {
  [key: string]: any;
  _id: string;
  collectionType: string;
  logoImage: string;
  collectionBanner: string;
  collectionName: string;
  collectionDescription: string;
  numberOfViews: number;
  categoryId: string;
  sellerId: string;
  dateCreated: string;
  dateUpdated: string;
  seller: Seller;
  totalItems?: number;
  collectionTokenType?: string;
  collectionTokenName?: string;
  collectionTokenSymbol?: string;
  smartContractAddress?: string;
}

export interface Listing {
  dateCreated: string;
  dateUpdated: string;
  from: string;
  listingSaleType: string;
  nftId: string;
  orderIdListing: number;
  original: boolean;
  price: number;
  quantity: number;
  remainQuantity: number;
  sellerId: string;
  status: string;
  _id: string;
}

export interface Category {
  _id: string;
  name: string;
  icon: string;
  dateCreated: string;
  dateUpdated: string;
}

export interface TokenInfo {
  token: string;
  expires: string;
}

export interface MarketPlace {
  contractAddress: string;
  contractAbi: any;
}

export interface PropertiesForm {
  name: string;
  thumbnail?: string;
  value: string | number;
}

export interface DropdownOption {
  label: ReactNode | string;
  value: string;
  icon?: string;
  sc?: string;
}

export interface Cell {
  isSort?: boolean;
  headerName: string | ReactNode;
  field: string;
  align?: Align;
  width?: number | string;
  renderCell: (
    { value }: { value: any },
    cellData: any,
    index?: number,
  ) => ReactNode;
}

export interface TableSort {
  field: string;
  value: SortTable;
}

export type Sort = "desc" | "asc" | "";
export type SortTable = "desc" | "asc" | "";
type Align = "left" | "center" | "right";
export type BuyNowSteps = "checkout" | "purchase" | "approve" | "error";
export type CreateNFTSteps = "approve" | "complete" | "error";
export type CreateNFTProcess = "approve" | "mint" | "signsalesorder";
export type CreateOrderSteps = "approve" | "complete" | "error";
export type SmartContractInterfaces = "ERC-721" | "ERC-1155";

export type ConnectWalletSteps =
  | "init"
  | "metamask-not-found"
  | "connecting-to-metamask"
  | "error-connecting"
  | "wrong-network"
  | "update-profile";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
