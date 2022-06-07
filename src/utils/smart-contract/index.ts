import { mainnet } from "./mainnet";
import { testnet } from "./testnet";
import collectionErc721Abi from "utils/smart-contract/abi/collection-erc721.json";
import collectionErc1155Abi from "utils/smart-contract/abi/collection-erc1155.json";
import order from "./abi/order.json";

export const contractBNB = "0x0000000000000000000000000000000000000000";
export const ZERO = "0x0000000000000000000000000000000000000000";

export const SCOrder = {
  address: "0xee4bD1070D8AcE63f0423FB4Ed01801165fA7b87",
  abi: order,
};

export const AddressTransfer = "0x39afD2C5b4d44A3b9ECcA52E251463d096064d91";

export const BSC: { [key: string]: any } =
  process.env.APP_ENV === "production" ? mainnet : testnet;

export const SCCollection: { [key: string]: any } = {
  "ERC-1155": "0x72b18Ed5528232b90f134a5A70Ee5985E90263CC",
  "ERC-721": "0xa6b92C5E5c08abd82Ac0868dEFf3A1b284B74894",
};

export const SCCollectionAbi: { [key: string]: any } = {
  "ERC-1155": collectionErc1155Abi,
  "ERC-721": collectionErc721Abi,
};
