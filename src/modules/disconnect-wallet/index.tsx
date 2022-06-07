import { useCallback, useMemo } from "react";
import Styled from "./index.style";
import { logoutAdmin } from "api/user/index.api";
import { PersonalInfo } from "utils/interfaces";
import useSessionStorage from "hooks/useSessionStorage";
import useWeb3 from "hooks/useWeb3";
import { useRouter } from "next/router";

interface Props {
  isShowModal: boolean;
  closeModal: () => void;
}

const DisconnectWallet = ({ isShowModal, closeModal }: Props) => {
  const [personalInfo, setPersonalInfo] = useSessionStorage<PersonalInfo | null>(
    "personal-info",
    null,
  );
  const web3 = useWeb3();
  const router = useRouter();

  const handleDisconnect = useCallback(async () => {
    try {
      await logoutAdmin({
        refreshToken: personalInfo?.tokens.refresh.token || "",
      });
      setPersonalInfo(null);
      web3.isWalletConnected
        ? await web3.disconnectWalletConnect(true)
        : await web3.disconnect();
      closeModal?.();
      if (!web3.isWalletConnected) {
        router.reload();
        //window.locatreloadion
      }
    } catch (error) {
      console.error(error);
    }
  }, [
    closeModal,
    personalInfo?.tokens.refresh.token,
    setPersonalInfo,
    web3,
    router,
  ]);

  const content = useMemo(() => {
    return (
      <Styled.ModalContentWrap>
        <div className="title">Sign out</div>
        <div className="desc">Are you sure to disconnect your wallet?</div>
        <Styled.ButtonGroup>
          <Styled.CancelButton onClick={closeModal}>Cancel</Styled.CancelButton>
          <Styled.ProceedButton onClick={handleDisconnect}>
            Disconnect
          </Styled.ProceedButton>
        </Styled.ButtonGroup>
      </Styled.ModalContentWrap>
    );
  }, [closeModal, handleDisconnect]);

  return (
    <Styled.DisconnectModal
      isShow={isShowModal}
      close={closeModal}
      content={content}
    />
  );
};

export default DisconnectWallet;
