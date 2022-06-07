import * as Yup from "yup";
import {
  CURRENCY_OPTIONS,
  ERC_TOKEN,
  ERRORS,
  FILE_TYPE,
} from "utils/constants";
import { CreateNFTProcess, PropertiesForm } from "utils/interfaces";

interface IAttributes {
  key?: string;
  type?: string;
  value?: string;
  imageIcon?: string;
}

export interface NFTDetail {
  nftInterface: string;
  numberOfView: number;
  displayOnMarketplace: boolean;
  pushItemOnSale?: boolean;
  totalMinted: number;
  onSaleQuantity: number;
  totalSold: number;
  totalOwner: number;
  listCategoryId: string[];
  _id: string;
  name: string;
  royaltyFee: number;
  collectionId: string;
  sellerId: string;
  numberOfCopy: number;
  attributes: any[];
  tokenId: string;
  contractAddress: string;
  txHash: string;
  content: string;
  previewImage: string;
  typeContent: string;
  status: string;
  dateCreated: string;
  dateUpdated: string;
  price?: string;
  unitPrice?: string;
}

export interface InitValuesNFT {
  content: File | undefined;
  previewImage: File | undefined;
  name: string;
  nftInterface: string;
  numberOfCopy: number | undefined;
  description: string;
  royaltyFee: number | undefined;
  displayOnMarketplace: boolean;
  pushItemOnSale: boolean;
  price: number | undefined;
  unitPrice: string | undefined;
  collectionId: string | undefined;
  tokenId?: number;
  attributes?: IAttributes[];
}

export interface ProcessMintNftProps {
  step: CreateNFTProcess | string;
  txHash: string;
  isShowModalCreateNFT: boolean;
  isLoadingApprove: boolean;
  isLoadingMint: boolean;
  isLoadingSign: boolean;
  isApproveSuccess: boolean;
  isMintSuccess: boolean;
  isSignSuccess: boolean;
  isCreateNftSuccess: boolean;
  isError: boolean;
}

export interface OrderInfo {
  createOrder?: number;
  acceptedToken: string;
  nftToken: string;
  tokenId: string;
  quantities: number;
  targetPrice: number;
  priorityFee: number;
  duration: number;
  isSelling: boolean;
}

export const validationSchema = () =>
  Yup.object().shape({
    content: Yup.mixed()
      .required(ERRORS.E4("Content"))
      .test(
        "FILE_SIZE",
        ERRORS.E9(100),
        (value) => !value || (value && value.size / 1024 <= 10240),
      )
      .test("FILE_TYPE", ERRORS.E10, (value) => {
        return value && FILE_TYPE.includes(value.type);
      }),
    name: Yup.string()
      .required(ERRORS.E4("Name"))
      .max(256, ERRORS.E3("Name", 256)),
    nftInterface: Yup.string().required(ERRORS.E4("Type")),
    numberOfCopy: Yup.number()
      .required(ERRORS.E4("Number of copies"))
      .integer(ERRORS.E11("Number"))
      .min(1, ERRORS.E5("Number of copies", 0))
      .max(1000000, ERRORS.E6("quantity", 1000000)),
    royaltyFee: Yup.number()
      .required(ERRORS.E4("Royalties"))
      .max(50, ERRORS.E6("royalties", 50))
      .test("is-decimal", ERRORS.E6("decimal", 2), (value) =>
        // @ts-ignore
        String(value).match(/^([0-9]{0,2})?(?:[\.\,][0-9]{0,2})?$/),
      ),
    collectionId: Yup.string().required(ERRORS.E4("Collection")),
    pushItemOnSale: Yup.boolean(),
    price: Yup.number().when("pushItemOnSale", {
      is: true,
      then: Yup.number()
        .required(ERRORS.E4("Price per item"))
        .test(
          "is-greater-than-0",
          ERRORS.E5("Price per item", 0),
          (value) =>
            // @ts-ignore
            Number(value) > 0,
        )
        .test(
          "is-decimal",
          ERRORS.E6("decimal", 18) + " and " + ERRORS.E6("length", 12),
          (value) =>
            // @ts-ignore
            String(value).match(/^[0-9]{1,12}(\.[0-9]{0,18})?$/),
        ),
      otherwise: Yup.number(),
    }),
  });

export const initProperties: PropertiesForm[] = [];

export const initialValues: InitValuesNFT = {
  content: undefined,
  previewImage: undefined,
  name: "",
  nftInterface: ERC_TOKEN.ERC_1155,
  numberOfCopy: undefined,
  description: "",
  royaltyFee: 10,
  displayOnMarketplace: true,
  pushItemOnSale: false,
  price: undefined,
  unitPrice: CURRENCY_OPTIONS[0].value,
  collectionId: undefined,
};

export const initProcess: ProcessMintNftProps = {
  step: "",
  txHash: "",
  isShowModalCreateNFT: false,
  isLoadingApprove: false,
  isLoadingMint: false,
  isLoadingSign: false,
  isApproveSuccess: false,
  isMintSuccess: false,
  isSignSuccess: false,
  isCreateNftSuccess: false,
  isError: false,
};
