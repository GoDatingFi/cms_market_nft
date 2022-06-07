import { useCallback, useMemo, useState, useEffect, useRef } from "react";
import Styled from "./index.style";
import FoxPng from "assets/images/fox.png";
import DownloadSvg from "assets/images/icons/new-download.svg";
import Image from "next/image";
import { ERRORS, METAMASK_DOWNLOAD_LINK } from "utils/constants";
import cx from "classnames";
import {
  getMetamaskInfo,
  login,
  logoutAdmin,
  updateProfile,
} from "api/user/index.api";
import { ConnectWalletSteps, PersonalInfo } from "utils/interfaces";
import useSessionStorage from "hooks/useSessionStorage";
import useWeb3 from "hooks/useWeb3";
import { BSC } from "utils/smart-contract";
import { useRouter } from "next/router";
import { useStore } from "store";
import { isEmpty } from "utils/functions";
import WalletConnectPng from "assets/images/wallet-connect.png";
import FailSvg from "assets/images/icons/fail.svg";

interface Props {
  startStep: ConnectWalletSteps;
  isShowModal: boolean;
  closeModal: () => void;
}
interface IError {
  email: string[];
  username: string[];
}

const removeWhiteSpaceRegxp = /\s+/g;

const ConnectWallet = ({ isShowModal, closeModal }: Props) => {
  const router = useRouter();
  const web3 = useWeb3();
  const wrongNetworkStatus = useRef(false);
  const { store } = useStore();
  const [step, setStep] = useState<ConnectWalletSteps>("init");
  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
  });
  const [errors, setErrors] = useState<IError>({ email: [], username: [] });
  const [isWalletConnect, setIsWalletConnect] = useState<boolean>(false);

  const [personalInfo, setPersonalInfo] = useSessionStorage<PersonalInfo | null>(
    "personal-info",
    null,
  );

  useEffect(() => {
    wrongNetworkStatus.current = false;
    if (isShowModal) {
      setStep("init");
    }
  }, [isShowModal]);

  const validateUserInfo = useCallback(() => {
    const errors: any = {};
    const emailRegex = /^[\w-\._]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const usernameRegex = /^[\w-\._]+$/g;
    if (!emailRegex.test(userInfo.email) && userInfo.email.length > 0) {
      errors.email = errors.email ? errors.email.push(ERRORS.E1) : [ERRORS.E1];
    }

    if (
      !usernameRegex.test(userInfo.username) &&
      userInfo.username.length > 0
    ) {
      errors.username = errors.username
        ? errors.username.push(ERRORS.E12)
        : [ERRORS.E12];
    }

    if (userInfo.email.length > 256) {
      errors.email = errors.email
        ? [...errors.email, ERRORS.E3("Email", 256)]
        : [ERRORS.E3("Email", 256)];
    }

    if (userInfo.username.length > 256) {
      errors.username = errors.username
        ? [...errors.username, ERRORS.E3("Username", 256)]
        : [ERRORS.E3("Username", 256)];
    }

    return errors;
  }, [userInfo]);

  const handleUpdateProfile = useCallback(async () => {
    const validateErrors = validateUserInfo();
    if (!isEmpty(validateErrors)) {
      setErrors(validateErrors);
      return;
    }
    try {
      const response = await updateProfile(personalInfo?.user?._id || "", {
        username: userInfo.username,
        email: userInfo.email,
      });
      const updatedInfo = {
        ...personalInfo,
        user: response.data.data,
      } as PersonalInfo;
      setPersonalInfo(updatedInfo);
    } catch (error: any) {
      console.log("Error Update", error);
      if (error.errors && error.errors.message) {
        if (error.errors.message.search("Email") > -1) {
          validateErrors.email = validateErrors.email
            ? [...validateErrors.email, ERRORS.E0("Email")]
            : [ERRORS.E0("Email")];
        }
        if (error.errors.message.search("Username") > -1) {
          validateErrors.username = validateErrors.username
            ? [...validateErrors.username, ERRORS.E0("Username")]
            : [ERRORS.E0("Username")];
        }
      }
    }
    isEmpty(validateErrors) ? closeModal() : setErrors(validateErrors);
  }, [
    closeModal,
    personalInfo,
    setPersonalInfo,
    userInfo.email,
    userInfo.username,
    validateUserInfo,
  ]);

  const handleLogin = useCallback(
    async (address: string, signature: string) => {
      try {
        const userInfo = await login({ address, signature });
        return userInfo.data;
      } catch (error) {
        setStep("error-connecting");
        return null;
      }
    },
    [],
  );

  const handleShowMetaNotiToSign = useCallback(
    async (address: string, nonce: string) => {
      try {
        const signature = await web3.signIn({
          address,
          nonce,
          errorCb: (error: Error) => {
            if (error) {
              setStep("error-connecting");
            }
          },
        });
        return signature;
      } catch (_) {
        setStep("error-connecting");
        return "";
      }
    },
    [web3],
  );

  const handleDisconnect = useCallback(async () => {
    try {
      await logoutAdmin({
        refreshToken: personalInfo?.tokens.refresh.token || "",
      });
      setPersonalInfo(null);
      setStep("error-connecting");
    } catch (error) {
      console.log(error);
      setStep("error-connecting");
    }
  }, [personalInfo?.tokens.refresh.token, setPersonalInfo]);

  const handleConnect = useCallback(async () => {
    const address = await web3.getAddress();
    try {
      const metamaskInfo = await getMetamaskInfo(address);
      const signature = await handleShowMetaNotiToSign(
        address,
        metamaskInfo.data.data.nonce,
      );
      if (!signature) {
        return;
      }

      await handleLogin(address, signature);
      if (
        store.personalInfo?.user?.address?.toLowerCase() !==
        address?.toLowerCase()
      ) {
        await handleDisconnect();
        return;
      }

      setPersonalInfo(store.personalInfo);

      if (metamaskInfo.data.data.isNew) {
        setStep("update-profile");
      } else {
        closeModal();
      }

      router.push("/home");
    } catch (error) {
      setStep("error-connecting");
    }
  }, [
    closeModal,
    handleDisconnect,
    handleLogin,
    handleShowMetaNotiToSign,
    router,
    setPersonalInfo,
    store.personalInfo,
    web3,
  ]);

  const handleConnectWallet = useCallback(async () => {
    setIsWalletConnect(false);
    if (!web3.isMetamaskInstalled) {
      setStep("metamask-not-found");
      return;
    }
    setStep("connecting-to-metamask");

    try {
      await web3.createWeb3Instance();
    } catch (error: any) {
      switch (error.code) {
        case 4001:
          // User cancel
          setStep("error-connecting");
          return;
        default:
          setStep("error-connecting");
          return;
      }
    }

    try {
      const chainID = await web3.getNetworkChainID();
      if (
        web3.isHex(chainID)
          ? chainID !== BSC.config.chainId
          : web3.toHex(chainID) !== BSC.config.chainId
      ) {
        setStep("wrong-network");
        wrongNetworkStatus.current = true;
      } else {
        handleConnect();
        wrongNetworkStatus.current = false;
      }
    } catch (error) {
      setStep("error-connecting");
    }
  }, [handleConnect, web3]);

  useEffect(() => {
    web3.listenWalletConnectSessionReject(
      async (error: any, payload: any, _isClearData: boolean) => {
        if (web3.isWalletConnecting && !wrongNetworkStatus.current) {
          setStep("error-connecting");
        }
        if (web3.isWalletConnecting && wrongNetworkStatus.current) {
          setStep("wrong-network");
        }
        if (web3.isWalletConnected) {
          //signout button
          if (_isClearData) {
            setPersonalInfo(null);
            router.reload()
          }
        }
      },
    );
  }, [web3, setPersonalInfo, router]);

  const handleConnectWalletConnect = useCallback(async () => {
    try {
      setStep("connecting-to-metamask");
      const accounts = await web3.walletConnect();
      const metamaskInfo = await getMetamaskInfo(accounts[0].toLowerCase());
      const signature = await web3.signWalletConnect(
        metamaskInfo.data.data.nonce,
        accounts[0],
        (error: any) => {
          if (error) {
            setStep("error-connecting");
          }
        },
      );

      if (web3.getWalletConnectChainId() !== BSC.config.chainIdNumber) {
        wrongNetworkStatus.current = true;
        setStep("wrong-network");
        await web3.disconnectWalletConnect();
        return;
      }

      const personalInfo = await handleLogin(
        accounts[0].toLowerCase(),
        signature,
      );
      if (!personalInfo) {
        return;
      }

      setPersonalInfo(personalInfo.data);

      if (metamaskInfo.data.data.isNew) {
        setUserInfo({ email: "", username: "" });
        setStep("update-profile");
      } else {
        closeModal();
      }
      router.push("/home");
    } catch (error: any) {
      console.error(error, "error");
      setStep("error-connecting");
    }
  }, [web3, handleLogin, closeModal, setPersonalInfo, router]);

  const handleClickWalletConnect = useCallback(async () => {
    setIsWalletConnect(true);
    try {
      await handleConnectWalletConnect();
    } catch (error) {
      setStep("error-connecting");
    }
  }, [handleConnectWalletConnect]);

  const handleSwitchNetwork = useCallback(async () => {
    await web3.switchNetwork();
    setStep("connecting-to-metamask");
    handleConnect();
  }, [handleConnect, web3]);

  const initStep = useMemo(() => {
    return (
      <Styled.ModalContentWrap>
        <div className="title">Connect to a Wallet</div>
        <div className="desc">
          {
            "Please connect with one of our available \n wallet providers to continue"
          }
        </div>
        <>
          <Styled.InitButton
            onClick={handleConnectWallet}
            postIcon={
              <>
                <Image src={FoxPng} alt="icon" width={40} height={40} />
              </>
            }
            preIcon={
              <>
                <span className="label">Metamask</span>
              </>
            }
          />
          <Styled.InitButton
            onClick={handleClickWalletConnect}
            postIcon={
              <>
                <Image
                  src={WalletConnectPng}
                  alt="icon"
                  width={40}
                  height={40}
                />
              </>
            }
            preIcon={<span className="label">WalletConnect</span>}
          />
        </>
      </Styled.ModalContentWrap>
    );
  }, [handleConnectWallet, handleClickWalletConnect]);

  const metamaskNotFoundStep = useMemo(() => {
    return (
      <Styled.ModalContentWrap>
        <Styled.InstallMetamask>
          <Image src={FoxPng} alt="fox-icon" width={64} height={64} />
        </Styled.InstallMetamask>
        <div className="title">Metamask Not Found</div>
        <div className="desc">Don&#39;t have Metamask Wallet?</div>
        <Styled.Download
          href={METAMASK_DOWNLOAD_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Download MetaMask
          <DownloadSvg width={20} height={20} />
        </Styled.Download>
      </Styled.ModalContentWrap>
    );
  }, []);

  const connectingToMetamaskStep = useMemo(() => {
    return (
      <Styled.ModalContentWrap>
        <Styled.DotSpinner width={56} height={56} />
        <div className="title" style={{ marginTop: "25px" }}>
          Initializing
        </div>
        <div className="desc">Connecting to a wallet...</div>
      </Styled.ModalContentWrap>
    );
  }, []);

  const errorConnectingStep = useMemo(() => {
    return (
      <Styled.ModalContentWrap>
        <Styled.ErrorIcon>
          <FailSvg width={64} height={64} />
        </Styled.ErrorIcon>
        <div className="title">Failed</div>
        <div className="desc">
          {"Connecting to a wallet failed.\nPlease try again"}
        </div>
      </Styled.ModalContentWrap>
    );
  }, []);

  const updateProfileStep = useMemo(() => {
    return (
      <Styled.ModalContentWrap>
        <div className="title">Update your profile</div>
        <div>
          <div className="input-label first">Email</div>
          <Styled.UpdateProfileInput
            placeholder="Please enter your email"
            value={userInfo.email}
            onChange={(e: any) => {
              const email = e.target.value.replace(removeWhiteSpaceRegxp, "");
              setErrors((prev) => ({ ...prev, email: [] }));
              setUserInfo((prev) => ({ ...prev, email }));
            }}
          />
          {errors && errors.email && (
            <Styled.ErrorAlertContainer>
              {errors.email.map((error: string, idx: number) => (
                <span key={idx}>{error}</span>
              ))}
            </Styled.ErrorAlertContainer>
          )}
        </div>
        <div style={{ marginTop: "16px" }}>
          <div className="input-label">Username</div>
          <Styled.UpdateProfileInput
            placeholder="Please enter your name"
            value={userInfo.username}
            onChange={(e: any) => {
              const username = e.target.value.replace(
                removeWhiteSpaceRegxp,
                "",
              );
              setErrors((prev) => ({ ...prev, username: [] }));
              setUserInfo((prev) => ({ ...prev, username }));
            }}
          />
          {errors && errors.username && (
            <Styled.ErrorAlertContainer>
              {errors.username.map((error: string, idx: number) => (
                <span key={idx}>{error}</span>
              ))}
            </Styled.ErrorAlertContainer>
          )}
        </div>
        <Styled.UpdateProfileButton onClick={handleUpdateProfile}>
          Update your profile
        </Styled.UpdateProfileButton>
        <div className="skip-btn" onClick={closeModal}>
          Skip
        </div>
      </Styled.ModalContentWrap>
    );
  }, [
    closeModal,
    handleUpdateProfile,
    userInfo.email,
    userInfo.username,
    errors,
  ]);

  const wrongNetworkStep = useMemo(() => {
    return (
      <Styled.ModalContentWrap>
        <Styled.ErrorIcon>
          <FailSvg width={64} height={64} />
        </Styled.ErrorIcon>
        <div className="title">Wrong Network</div>
        <div className="desc network">
          Please change network on your wallet to
        </div>
        <div className="network-name" onClick={handleSwitchNetwork}>
          {BSC.config.chainName}
        </div>
      </Styled.ModalContentWrap>
    );
  }, [handleSwitchNetwork]);

  const connectSteps = useMemo(
    () => ({
      init: initStep,
      "metamask-not-found": metamaskNotFoundStep,
      "connecting-to-metamask": connectingToMetamaskStep,
      "error-connecting": errorConnectingStep,
      "wrong-network": wrongNetworkStep,
      "update-profile": updateProfileStep,
    }),
    [
      initStep,
      metamaskNotFoundStep,
      connectingToMetamaskStep,
      errorConnectingStep,
      wrongNetworkStep,
      updateProfileStep,
    ],
  );

  return (
    <Styled.ConnectWalletFlow
      isShow={isShowModal}
      close={closeModal}
      content={connectSteps[step]}
      preventClickOutside={true}
      className={cx(step)}
    />
  );
};

export default ConnectWallet;
