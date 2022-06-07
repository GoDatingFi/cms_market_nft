import { useCallback, useMemo, useRef, useEffect } from "react";
import { MarketPlace } from "utils/interfaces";
import { BSC } from "utils/smart-contract";
import Web3 from "web3";
import bep20abi from "utils/smart-contract/abi/bep-20.json";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { getWalletSupports } from "utils/functions";
import { mainnet } from "utils/smart-contract/mainnet";
import { testnet } from "utils/smart-contract/testnet";
import { DataV1, Order, NFTSG, Part, LazyMint } from "utils/order";
import {
  Types,
  TypesMint721,
  TypesMint1155,
  createTypeData,
} from "utils/sign/EIP712";

interface SignInProps {
  nonce: string;
  address: string;
  errorCb?: (e: Error) => void;
}

interface DataColection {
  addressSC: string;
  name: string;
  description: string;
  image: string;
  cover: string;
}

interface SignCollectionProps {
  data: DataColection;
  address: string;
  errorCb?: (e: Error) => void;
}

const createWalletConnectProvider = () => {
  return new WalletConnectProvider({
    infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
    qrcodeModalOptions: {
      mobileLinks: getWalletSupports(),
    },
    rpc: {
      56: mainnet.config.rpcUrls[0],
      97: testnet.config.rpcUrls[0],
    },
    // accept number
    chainId: BSC.config.chainIdNumber,
  });
};

let walletConnectProvider = createWalletConnectProvider();

let _isClearData: boolean = true;

type ChangeWallet = "toMetamask" | "toWalletConnect" | "empty";

let changeWalletRef: ChangeWallet = "empty";

const useWeb3 = () => {
  const web3 = useRef<Web3 | null>();

  //disable extension Coin98 wallet
  useEffect(() => {
    if ((window as any).ethereum && (window as any).ethereum.isCoin98) {
      (window as any).ethereum = (window as any).web3.currentProvider;
    }
  });

  const connectAfterReload = useCallback(async () => {
    if (walletConnectProvider.connector.connected) {
      await walletConnectProvider.enable();
    }
  }, []);

  useEffect(() => {
    connectAfterReload();
  }, [connectAfterReload]);

  const isMetamaskInstalled = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return (window as any).ethereum;
  }, []);

  const setChangeWalletRef = useCallback((changeWallet: ChangeWallet) => {
    changeWalletRef = changeWallet;
  }, []);

  const createWeb3Instance = useCallback(async () => {
    if (
      (!isMetamaskInstalled && !walletConnectProvider.connected) ||
      typeof window === "undefined"
    ) {
      return;
    }
    const isWalletConnect =
      changeWalletRef === "empty"
        ? walletConnectProvider.connector.connected
        : changeWalletRef === "toWalletConnect";
    web3.current = new Web3(
      isWalletConnect
        ? (walletConnectProvider as any)
        : (window as any).ethereum,
    );
    return isWalletConnect
      ? walletConnectProvider.request({
        method: "eth_requestAccounts",
      })
      : await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
  }, [isMetamaskInstalled]);

  const walletConnect = useCallback(async () => {
    try {
      walletConnectProvider = createWalletConnectProvider();
      return await walletConnectProvider.enable();
    } catch (error: any) {
      console.error(error, "error");
      walletConnectProvider = createWalletConnectProvider();
      throw error;
    }
  }, []);

  const signWalletConnect = useCallback(
    async (nonce: number | string, address: string, errorCb: any) => {
      try {
        const web3 = new Web3(walletConnectProvider as any);
        return await web3.eth.personal.sign(
          `I am signing my one-time nonce: ${nonce}`,
          address,
          "",
          (e) => errorCb(e),
        );
      } catch (error: any) {
        console.error(error, "error");
        await walletConnectProvider.disconnect();
        _isClearData = false;
        throw error;
      }
    },
    [],
  );

  const disconnectWalletConnect = useCallback(
    async (
      isClearData: boolean = false,
      callbackAfterDisconnect = () => {},
    ) => {
      await walletConnectProvider.disconnect();
      walletConnectProvider = createWalletConnectProvider();
      _isClearData = false;
      if (isClearData) {
        _isClearData = true;
        callbackAfterDisconnect?.();
      }
    },
    [],
  );

  const listenWalletConnectSessionReject = useCallback((cb: any) => {
    return walletConnectProvider.connector.on(
      "disconnect",
      (error: any, payload: any) => {
        cb(error, payload, _isClearData);
        walletConnectProvider = createWalletConnectProvider();
      },
    );
  }, []);

  const signIn = useCallback(
    async ({ nonce, address, errorCb }: SignInProps) => {
      if (!isMetamaskInstalled) {
        return;
      }
      const signature = await web3.current?.eth?.personal?.sign(
        `I am signing my one-time nonce: ${nonce}`,
        address,
        "",
        (e: Error) => {
          errorCb?.(e);
        },
      );
      return signature || "";
    },
    [isMetamaskInstalled],
  );

  const signCollection = useCallback(
    async ({ data, address, errorCb }: SignCollectionProps) => {
      if (!isMetamaskInstalled) {
        return;
      }
      const web3 = new Web3((window as any).ethereum);
      return await web3.eth.personal.sign(
        `I would like to update preferences for
        \n${data.addressSC}.
        \nShort url is ${data.name}. Description is ${data.description}.
        \nPicture is ${data.image}. Cover is ${data.cover}`,
        address,
        "",
        (e: Error) => {
          errorCb?.(e);
        },
      );
    },
    [isMetamaskInstalled],
  );

  const id = useCallback((str: any) => {
    const web3 = new Web3((window as any).provider);
    return web3.utils?.keccak256(str).substring(0, 10);
  }, []);

  const enc = useCallback((token: any, tokenId: any) => {
    const web3 = new Web3((window as any).provider);
    if (tokenId) {
      return web3.eth.abi.encodeParameters(
        ["address", "uint256"],
        [token, tokenId],
      );
    } else {
      return web3.eth.abi.encodeParameter("address", token);
    }
  }, []);

  async function getSignOrder(
    order: Order,
    account: any,
    verifyingContract: any,
  ) {
    if (!isMetamaskInstalled) {
      return;
    }
    return new Promise(async (resolve, reject) => {
      async function cb(err: any, result: any) {
        if (err) {
          return reject(err);
        }
        if (result.error) {
          return reject(result.error);
        }
        const sig = result.result;
        const sig0 = sig.substring(2);
        const r = "0x" + sig0.substring(0, 64);
        const s = "0x" + sig0.substring(64, 128);
        const v = parseInt(sig0.substring(128, 130), 16);
        resolve({
          data,
          sig,
          sig0,
          r,
          v,
          s,
        });
      }
      const web3 = new Web3((window as any).ethereum);
      const chainId = await web3.eth.getChainId();
      const data = createTypeData(
        {
          name: "MiranaOrder",
          version: "1",
          chainId,
          verifyingContract,
        },
        "Order",
        order,
        Types,
      );
      await (window as any).ethereum.sendAsync(
        {
          method: "eth_signTypedData_v4",
          params: [account, JSON.stringify(data)],
          from: account,
        },
        cb,
      );
    });
  }

  async function getSignMint721(
    nft: LazyMint,
    account: any,
    verifyingContract: any,
  ) {
    if (!isMetamaskInstalled) {
      return;
    }
    return new Promise(async (resolve, reject) => {
      async function cb(err: any, result: any) {
        if (err) {
          return reject(err);
        }
        if (result.error) {
          return reject(result.error);
        }
        const sig = result.result;
        const sig0 = sig.substring(2);
        const r = "0x" + sig0.substring(0, 64);
        const s = "0x" + sig0.substring(64, 128);
        const v = parseInt(sig0.substring(128, 130), 16);
        resolve({
          data,
          sig,
          sig0,
          r,
          v,
          s,
        });
      }
      const web3 = new Web3((window as any).ethereum);
      const chainId = await web3.eth.getChainId();
      const data = createTypeData(
        {
          name: "Mint721",
          version: "1",
          chainId,
          verifyingContract,
        },
        "Mint721",
        nft,
        TypesMint721,
      );
      console.log(data);
      await (window as any).ethereum.sendAsync(
        {
          method: "eth_signTypedData_v4",
          params: [account, JSON.stringify(data)],
          from: account,
        },
        cb,
      );
    });
  }

  async function getSignMint1155(
    nft: LazyMint,
    account: any,
    verifyingContract: any,
  ) {
    if (!isMetamaskInstalled) {
      return;
    }
    return new Promise(async (resolve, reject) => {
      async function cb(err: any, result: any) {
        if (err) {
          return reject(err);
        }
        if (result.error) {
          return reject(result.error);
        }
        const sig = result.result;
        const sig0 = sig.substring(2);
        const r = "0x" + sig0.substring(0, 64);
        const s = "0x" + sig0.substring(64, 128);
        const v = parseInt(sig0.substring(128, 130), 16);
        resolve({
          data,
          sig,
          sig0,
          r,
          v,
          s,
        });
      }
      const web3 = new Web3((window as any).ethereum);
      const chainId = await web3.eth.getChainId();
      const data = createTypeData(
        {
          name: "Mint1155",
          version: "1",
          chainId,
          verifyingContract,
        },
        "Mint1155",
        nft,
        TypesMint1155,
      );
      console.log(data);
      await (window as any).ethereum.sendAsync(
        {
          method: "eth_signTypedData_v4",
          params: [account, JSON.stringify(data)],
          from: account,
        },
        cb,
      );
    });
  }

  const getAddress = useCallback(async () => {
    if (!isMetamaskInstalled && !walletConnectProvider.connector.connected) {
      return "";
    }
    const address = await web3.current?.eth?.getCoinbase();
    if (typeof window === "undefined") {
      return "";
    }
    if (!address) {
      return "";
    }
    return address || "";
  }, [isMetamaskInstalled]);

  const signatureMessage = useCallback(
    async (publicAddress: string, nonce: number) => {
      if (!isMetamaskInstalled && !walletConnectProvider.connector.connected) {
        return;
      }
      const web3 = new Web3((window as any).ethereum);
      return await web3.eth.personal.sign(
        `I am signing my one-time nonce: ${nonce}`,
        publicAddress,
        "",
      );
    },
    [isMetamaskInstalled],
  );

  const getContract = useCallback(
    (contract: MarketPlace) => {
      if (!isMetamaskInstalled && !walletConnectProvider.connector.connected) {
        return;
      }
      const isWalletConnect =
        changeWalletRef === "empty"
          ? walletConnectProvider.connector.connected
          : changeWalletRef === "toWalletConnect";
      const web3 = isWalletConnect
        ? new Web3(walletConnectProvider as any)
        : new Web3((window as any).ethereum || BSC.config.rpcUrls[0]);
      return new web3.eth.Contract(
        contract.contractAbi,
        contract.contractAddress,
      );
    },
    [isMetamaskInstalled],
  );

  const getContractOfNetwork = useCallback(
    (contract: MarketPlace) => {
      if (!isMetamaskInstalled && !walletConnectProvider.connector.connected) {
        return;
      }
      const isWalletConnect =
        changeWalletRef === "empty"
          ? walletConnectProvider.connector.connected
          : changeWalletRef === "toWalletConnect";

      const web3 = isWalletConnect
        ? new Web3(walletConnectProvider as any)
        : new Web3(BSC.config.rpcUrls[0]);
      return new web3.eth.Contract(
        contract.contractAbi,
        contract.contractAddress,
      );
    },
    [isMetamaskInstalled],
  );

  const getBalanceOfToken = useCallback(
    async (account: string, token: any) => {
      if (
        (!isMetamaskInstalled && !walletConnectProvider.connector.connected) ||
        !account
      ) {
        return "";
      }
      const isWalletConnect =
        changeWalletRef === "empty"
          ? walletConnectProvider.connector.connected
          : changeWalletRef === "toWalletConnect";
      const web3 = isWalletConnect
        ? new Web3(walletConnectProvider as any)
        : new Web3((window as any).ethereum);
      const contract = getContract({
        contractAbi: bep20abi,
        contractAddress: token,
      });
      const balance = await contract?.methods.balanceOf(account).call();
      return web3.utils.fromWei(balance);
    },
    [getContract, isMetamaskInstalled],
  );

  const getBalance = useCallback(
    async (account: string) => {
      if (
        (!isMetamaskInstalled && !walletConnectProvider.connector.connected) ||
        !account
      ) {
        return "";
      }
      const isWalletConnect =
        changeWalletRef === "empty"
          ? walletConnectProvider.connector.connected
          : changeWalletRef === "toWalletConnect";
      const web3 = isWalletConnect
        ? new Web3(walletConnectProvider as any)
        : new Web3((window as any).ethereum);
      const balance = await web3.eth.getBalance(account);
      return web3.utils.fromWei(balance);
    },
    [isMetamaskInstalled],
  );

  const generateOrderID = useCallback(() => {
    if (!isMetamaskInstalled && !walletConnectProvider.connector.connected) {
      return;
    }
    const isWalletConnect =
      changeWalletRef === "empty"
        ? walletConnectProvider.connector.connected
        : changeWalletRef === "toWalletConnect";
    const web3 = isWalletConnect
      ? new Web3(walletConnectProvider as any)
      : new Web3((window as any).ethereum);
    return Number(web3.utils.randomHex(32));
  }, [isMetamaskInstalled]);

  const switchNetwork = useCallback(
    async (cancelCb?: () => void) => {
      if (!isMetamaskInstalled) {
        return;
      }

      try {
        await (window as any).ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: BSC.config.chainId }],
        });
      } catch (error: any) {
        if (error.code === 4001) {
          cancelCb?.();
        }

        // This error code indicates that the chain has not been added to MetaMask.
        if (error.code === 4902) {
          await (window as any).ethereum.request({
            method: "wallet_addEthereumChain",
            params: [BSC.config],
          });
        } else {
          throw error;
        }
        // handle other "switch" errors
      }
    },
    [isMetamaskInstalled],
  );

  const getNetworkChainID = useCallback(async () => {
    if (!isMetamaskInstalled && !walletConnectProvider.connector.connected) {
      return;
    }
    const isWalletConnect =
      changeWalletRef === "empty"
        ? walletConnectProvider.connector.connected
        : changeWalletRef === "toWalletConnect";
    return isWalletConnect
      ? await walletConnectProvider.request({ method: "eth_chainId" })
      : await (window as any).ethereum.request({ method: "eth_chainId" });
  }, [isMetamaskInstalled]);

  const listenNetworkChange = useCallback(
    (cb?: (chaindID: any) => void) => {
      if (!isMetamaskInstalled) {
        return;
      }
      (window as any).ethereum.on("chainChanged", cb);
    },
    [isMetamaskInstalled],
  );

  const disconnect = useCallback(async () => {
    if (!isMetamaskInstalled) {
      return;
    }
    return await (window as any).ethereum.request({
      method: "eth_requestAccounts",
      params: [{ eth_accounts: {} }],
    });
  }, [isMetamaskInstalled]);

  const listenAccountChange = useCallback(
    (cb?: (accounts: Array<string>) => void) => {
      if (!isMetamaskInstalled) {
        return;
      }
      (window as any).ethereum.on("accountsChanged", cb);
    },
    [isMetamaskInstalled],
  );

  const getCurrentAddress = useCallback(() => {
    if (!isMetamaskInstalled && !walletConnectProvider.connector.connected) {
      return;
    }
    const isWalletConnect =
      changeWalletRef === "empty"
        ? walletConnectProvider.connector.connected
        : changeWalletRef === "toWalletConnect";
    return isWalletConnect
      ? walletConnectProvider.request({ method: "eth_accounts" })
      : (window as any).ethereum.request({ method: "eth_accounts" });
  }, [isMetamaskInstalled]);

  const getWalletConnectChainId = useCallback(() => {
    return walletConnectProvider.chainId;
  }, []);

  return {
    signIn,
    signCollection,
    id,
    enc,
    getSignOrder,
    getSignMint721,
    getSignMint1155,
    isMetamaskInstalled,
    getAddress,
    signatureMessage,
    getContract,
    getContractOfNetwork,
    getBalanceOfToken,
    getBalance,
    generateOrderID,
    switchNetwork,
    getNetworkChainID,
    listenNetworkChange,
    createWeb3Instance,
    disconnect,
    listenAccountChange,
    getCurrentAddress,
    setChangeWalletRef,
    walletConnect,
    isWalletConnected: walletConnectProvider.connector.connected,
    listenWalletConnectSessionReject,
    getWalletConnectChainId,
    isWalletConnecting: walletConnectProvider.isConnecting,
    isHex: Web3.utils.isHexStrict,
    toHex: Web3.utils.toHex,
    changeWalletRef,
    signWalletConnect,
    disconnectWalletConnect,
  };
};

export default useWeb3;
