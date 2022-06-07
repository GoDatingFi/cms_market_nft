import erc1155Abi from "utils/smart-contract/abi/erc1155.json";
import erc721Abi from "utils/smart-contract/abi/erc721.json";
import order721Abi from "utils/smart-contract/abi/order721.json";
import order1155Abi from "utils/smart-contract/abi/order1155.json";

export const config = {
  chainName: "Binance Smart Chain - Mainnet",
  chainId: "0x38",
  rpcUrls: [
    "https://bsc-dataseed1.binance.org",
    "https://bsc-dataseed2.binance.org",
    "https://bsc-dataseed3.binance.org",
    "https://bsc-dataseed4.binance.org",
    "https://bsc-dataseed1.defibit.io",
    "https://bsc-dataseed2.defibit.io",
    "https://bsc-dataseed3.defibit.io",
    "https://bsc-dataseed4.defibit.io",
    "https://bsc-dataseed1.ninicoin.io",
    "https://bsc-dataseed2.ninicoin.io",
    "https://bsc-dataseed3.ninicoin.io",
    "https://bsc-dataseed4.ninicoin.io",
    "wss://bsc-ws-node.nariox.org",
  ],
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18,
  },
  blockExplorerUrls: ["https://bscscan.com"],
  chainIdNumber: 56,
};

const TOKEN_ADDRESSES: any = {
  USD: "",
  BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  BNB: "0x0000000000000000000000000000000000000000",
  WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  ETH: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  DOR: "0x3465fD2D9f900e34280aBab60E8d9987B5b5bb47",
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

export const mainnet = {
  config,
  TOKEN_ADDRESSES,
  SMART_CONTRACT,
};
