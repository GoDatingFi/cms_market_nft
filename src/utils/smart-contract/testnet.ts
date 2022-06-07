import bep20Abi from "./abi/bep-20.json";
import erc1155Abi from "utils/smart-contract/abi/erc1155.json";
import erc721Abi from "utils/smart-contract/abi/erc721.json";
import order721Abi from "utils/smart-contract/abi/order721.json";
import order1155Abi from "utils/smart-contract/abi/order1155.json";

export const config = {
  chainName: "Binance Smart Chain - Testnet",
  chainId: "0x61",
  rpcUrls: [
    "https://data-seed-prebsc-1-s1.binance.org:8545",
    "https://data-seed-prebsc-2-s1.binance.org:8545",
    "https://data-seed-prebsc-1-s2.binance.org:8545",
    "https://data-seed-prebsc-2-s2.binance.org:8545",
    "https://data-seed-prebsc-1-s3.binance.org:8545",
    "https://data-seed-prebsc-2-s3.binance.org:8545",
  ],
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18,
  },
  blockExplorerUrls: ["https://testnet.bscscan.com"],
  chainIdNumber: 97,
};

export const CONTRACT_TOKEN = {
  BUSD: {
    contractAddress: "0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47",
    contractAbi: bep20Abi,
  },
  ETH: {
    contractAddress: "0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378",
    contractAbi: bep20Abi,
  },
  WBNB: {
    contractAddress: "0x97c012Ef10eDc79510A17272CEE3ecBE1443177F",
    contractAbi: bep20Abi,
  },
};

export const TOKEN_ADDRESSES: any = {
  USD: "",
  BNB: "0x0000000000000000000000000000000000000000",
  ETH: "0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378",
  WBNB: "0x97c012Ef10eDc79510A17272CEE3ecBE1443177F",
  BUSD: "0x8301f2213c0eed49a7e28ae4c3e91722919b8b47",
  DOR: "0x440b856beA3AB8dfDf140a7b292D9F170d2222e2",
  WETH: "0xc3Dc43e9344D2199996edC025b15D0f86cB01443",
};

export const SMART_CONTRACT = {
  ERC721: {
    abiMint: erc721Abi,
    addressMint: "0x2D62c8a36748845861681eba5416D54d3d9905bB",
    abiMarketPlace: order721Abi,
    marketPlaceAddress: "0xF86c5975EE544685BE1E71e786e0BbC2d0857753",
  },
  ERC1155: {
    abiMint: erc1155Abi,
    addressMint: "0xDFA923090A0C65851Aa5F3d2A3581911E8b9E838",
    abiMarketPlace: order1155Abi,
    marketPlaceAddress: "0xC30ffDB65A10D94BC453c0c60dB422636F47A753",
  },
};

export const testnet = {
  config,
  TOKEN_ADDRESSES,
  SMART_CONTRACT,
};
