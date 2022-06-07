import { FC, useMemo, useState, useEffect, memo, useCallback } from "react";
import Styled from "./index.style";
import AlertTriangleSvg from "assets/images/icons/alertTriangle.svg";
import Image from "next/image";
import cx from "classnames";
import { CreateNFTSteps } from "utils/interfaces";
import {
  NFTDetail,
  ProcessMintNftProps,
} from "modules/nft-components/validate";
import { useRouter } from "next/router";
import { getBSCScanLink } from "utils/functions";

interface Props {
  isShowModal: boolean;
  isPushItemOnSale: boolean;
  process: ProcessMintNftProps;
  nftPreview: string;
  closeModal: () => void;
  onCreateAnotherNFT: () => void;
  nftInfo?: NFTDetail;
}

const CreateNFTModal: FC<Props> = ({
  isShowModal,
  closeModal,
  isPushItemOnSale,
  process,
  nftPreview,
  onCreateAnotherNFT,
  nftInfo,
}) => {
  const [step, setStep] = useState<CreateNFTSteps>("approve");
  const router = useRouter();
  useEffect(() => {
    if (
      process.isMintSuccess &&
      process.step !== "approve" &&
      process.step !== "mint" &&
      process.step !== "signsalesorder"
    ) {
      setStep("complete");
    }
    if (process.isError) {
      setStep("error");
    }
  }, [process]);

  const approveStep = useMemo(() => {
    return (
      <div>
        <Styled.Label>Create NFT</Styled.Label>
        <Styled.ApproveBox>
          <Styled.BoxLabel>1. Approve</Styled.BoxLabel>
          <Styled.Description>
            {process.step === "approve" ||
            process.isLoadingMint ||
            !(process.isLoadingApprove && process.isLoadingMint) ? (
              process.isLoadingApprove ? (
                <Styled.DotSpinner width={33} height={33} className="approve" />
              ) : (
                <Styled.Checked width={32} height={32} className="approve" />
              )
            ) : (
              <Styled.CheckedGray width={32} height={32} className="approve" />
            )}
            <div>Approve performing transactions with your wallet</div>
          </Styled.Description>
        </Styled.ApproveBox>

        <Styled.PurchaseBox>
          <Styled.BoxLabel>2. Create & Mint</Styled.BoxLabel>
          <Styled.Description>
            {process.step === "mint" || process.step === "signsalesorder" ? (
              process.isLoadingMint ? (
                <Styled.DotSpinner width={33} height={33} className="approve" />
              ) : (
                <Styled.Checked width={32} height={32} className="approve" />
              )
            ) : (
              <Styled.CheckedGray width={32} height={32} className="approve" />
            )}
            <div>Send transaction to create your NFT</div>
          </Styled.Description>
        </Styled.PurchaseBox>

        {isPushItemOnSale && (
          <Styled.SignSalesOrderBox>
            <Styled.BoxLabel>3. Confirm sales order</Styled.BoxLabel>
            <Styled.Description>
              {process.step === "signsalesorder" ? (
                process.isLoadingSign ? (
                  <Styled.DotSpinner
                    width={33}
                    height={33}
                    className="approve"
                  />
                ) : (
                  <Styled.Checked width={32} height={32} className="approve" />
                )
              ) : (
                <Styled.CheckedGray
                  width={32}
                  height={32}
                  className="approve"
                />
              )}
              <div>Confirm the transaction request on your wallet</div>
            </Styled.Description>
          </Styled.SignSalesOrderBox>
        )}
      </div>
    );
  }, [process, isPushItemOnSale]);

  const errorStep = useMemo(() => {
    return (
      <Styled.Error>
        <div className="title">Something went wrong!</div>
        <Styled.ErrorIcon>
          <AlertTriangleSvg width={60} height={60} />
        </Styled.ErrorIcon>
        <div className="desc">
          There was an error with your transaction! Please try again
        </div>
        <a
          href={`${getBSCScanLink(process.txHash)}`}
          target={"_blank"}
          rel="noreferrer"
        >
          <Styled.ViewBSCButton>View on BSCScan</Styled.ViewBSCButton>
        </a>
      </Styled.Error>
    );
  }, [process.txHash]);

  const onRedirectToDetail = useCallback(
    (e: any, id: string) => {
      e.preventDefault();
      window.scrollTo(0, 0);
      router.push(`/nft/${id}`);
    },
    [router],
  );

  const completeStep = useMemo(() => {
    return (
      <Styled.Complete>
        <div className="title">Congratulation!</div>
        {nftPreview && (
          <Image src={nftPreview} width={202} height={272} alt={""} />
        )}
        <div className="desc">
          {nftInfo?.pushItemOnSale
            ? "Your NFT is successfully created and sold on Mirana"
            : "Your NFT is successfully created on Mirana"}
        </div>
        <Styled.GroupButton>
          <Styled.CreateAnotherButton
            onClick={() => {
              onCreateAnotherNFT();
              setStep("approve");
            }}
          >
            Create another
          </Styled.CreateAnotherButton>
          <Styled.ViewNFTButton
            onClick={(e) => {
              onRedirectToDetail(e, nftInfo?._id || '');
              setStep("approve");
            }}
          >
            View NFT
          </Styled.ViewNFTButton>
        </Styled.GroupButton>
      </Styled.Complete>
    );
  }, [
    nftInfo?._id,
    nftInfo?.pushItemOnSale,
    nftPreview,
    onCreateAnotherNFT,
    onRedirectToDetail,
  ]);

  const connectSteps = useMemo(
    () => ({
      approve: approveStep,
      complete: completeStep,
      error: errorStep,
    }),
    [approveStep, errorStep, completeStep],
  );

  return (
    <Styled.CreateNFTFlow
      preventClickOutside
      isShow={isShowModal}
      close={closeModal}
      content={connectSteps[step]}
      showCloseBtn={step === "complete"}
      className={cx(step)}
    />
  );
};

export default memo(CreateNFTModal);
