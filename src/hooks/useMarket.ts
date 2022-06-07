import { useCallback } from "react";
import useWeb3 from "./useWeb3";
import bep20abi from "utils/smart-contract/abi/bep-20.json";
import Big from "big.js";
import useSessionStorage from "./useSessionStorage";
import { PersonalInfo } from "utils/interfaces";
import { ERC_TOKEN } from "utils/constants";
import { InitValuesNFT } from "modules/nft-components/validate";

const useMarket = () => {
  const { getContract, getContractOfNetwork } = useWeb3();
  const [personalInfo] = useSessionStorage<PersonalInfo | null>(
    "personal-info",
    null,
  );

  const isApproveToken = useCallback(
    async (
      tokenAddress: string,
      amount: string,
      account: string,
      address: string,
    ) => {
      const contract = getContract({
        contractAbi: bep20abi,
        contractAddress: tokenAddress,
      });
      const num = await contract?.methods.allowance(account, address).call();
      return Big(num).cmp(Big(amount)) >= 0;
    },
    [getContract],
  );

  const approveToken = useCallback(
    async ({
        tokenAddress,
        account,
        address,
        errorCb,
      }: {
      tokenAddress: string;
      account: string;
      address: string;
      errorCb?: (error?: any) => void;
    }) => {
      const contract = getContract({
        contractAbi: bep20abi,
        contractAddress: tokenAddress,
      });
      try {
        const approveToken = await contract?.methods
          .approve(address, BigInt(2 ** 256 / 1.1))
          .send({ from: account });
        return approveToken;
      } catch (error) {
        errorCb?.(error);
        return false;
      }
    },
    [getContract],
  );

  const createMarket = useCallback(
    (contractMarket: any) => {
      return {
        contract: getContract(contractMarket),
        contractCurrentNetwork: getContractOfNetwork(contractMarket),
        address: contractMarket.contractAddress,
        account: personalInfo?.user.address || "",
      };
    },
    [getContract, getContractOfNetwork, personalInfo?.user.address],
  );

  const takeOrderMarketplace = useCallback(
    async ({
        contract,
        orderId,
        quantities,
        account,
        confirmCb,
        errorCb,
        targetPrice,
      }: {
      contract: any;
      orderId: string;
      quantities: number;
      account: string;
      confirmCb?: (params?: any) => void;
      errorCb?: (error?: any) => void;
      targetPrice?: string;
    }) => {
      try {
        const params: any = { from: account };
        if (targetPrice) {
          params.value = targetPrice;
        }
        const receitpOrder = await contract?.methods
          .takeOrder(orderId, quantities)
          .send(params, () => {
            confirmCb?.();
          });
        return receitpOrder;
      } catch (error) {
        errorCb?.(error);
        return "";
      }
    },
    [],
  );

  const approveBeforeMint = useCallback(
    async ({
        market,
        marketAddress,
      }: {
      market: any;
      marketAddress: string;
    }) => {
      const approve = await market.contract.methods
        .setApprovalForAll(marketAddress, true)
        .send({ from: market.account });
      return approve;
    },
    [],
  );

  const isApprovedForAll = useCallback(
    async ({
        owner,
        operator,
        market,
      }: {
      owner: string;
      operator: string;
      market: any;
    }) => {
      const isApprove = await market.contract.methods
        .isApprovedForAll(owner, operator)
        .call();
      return isApprove;
    },
    [],
  );

  const mint = useCallback(
    async ({
        personalInfo,
        values,
        market,
      }: {
      personalInfo: any;
      values: InitValuesNFT;
      market: any;
    }) => {
      const mintResponse =
        values.nftInterface === ERC_TOKEN.ERC_721
          ? await market.contract.methods
            .mint(personalInfo?.user.address)
            .send({ from: market.account })
          : await market.contract.methods
            .mintNewId(personalInfo?.user.address, values.numberOfCopy)
            .send({ from: market.account });
      return mintResponse;
    },
    [],
  );

  const sendTransactionToCreate = useCallback(
    async ({ orderInfo, market }: { orderInfo: any; market: any }) => {
      const createOrderResponse = await market.contract.methods
        .createOrder(...orderInfo)
        .send({ from: market.account });
      return createOrderResponse;
    },
    [],
  );

  const cancelOrder = useCallback(
    async ({ orderId, market }: { orderId: number; market: any }) => {
      return await market.contract.methods
        .cancelOrder(orderId)
        .send({ from: market.account });
    },
    [],
  );

  return {
    createMarket,
    isApproveToken,
    approveToken,
    takeOrderMarketplace,
    approveBeforeMint,
    mint,
    sendTransactionToCreate,
    cancelOrder,
    isApprovedForAll,
  };
};

export default useMarket;
