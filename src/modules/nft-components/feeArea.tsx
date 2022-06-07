import { FC, memo } from "react";
import Styled from "assets/styles/nft/create.style";
import { InitValuesNFT } from "./validate";
import { priceWithEConverter } from "utils/functions";
interface FeeFrops {
  values: InitValuesNFT;
  usdPrice: string;
}

const FeeArea: FC<FeeFrops> = ({ values, usdPrice }) => {
  return (
    <Styled.FeeWrapper>
      <Styled.ServiceFee>
        <Styled.ServiceFeeWrapper>
          Service Fee{" "}
          <Styled.TooltipText
            className="service-fee"
            content={
              "A portion of each successful deal goes to Mirana as service fee"
            }
            shouldShow
          >
            <Styled.QuestionCircle />
          </Styled.TooltipText>
        </Styled.ServiceFeeWrapper>
        <Styled.ServiceFeeValue>0%</Styled.ServiceFeeValue>
      </Styled.ServiceFee>
      <Styled.Receive>
        <Styled.ReceiveWrapper>
          You will receive{" "}
          <Styled.TooltipText
            className="receive"
            content={"Your profit of one copy after deducting the service fee"}
            shouldShow
          >
            <Styled.QuestionCircle />
          </Styled.TooltipText>
        </Styled.ReceiveWrapper>
        <Styled.ReceiveValue>
          <div>
            {Number(values.price) > 0
              ? priceWithEConverter(values.price || 0)
              : values.price}
          </div>
          <div style={{ marginLeft: "5px" }}>{values.unitPrice}</div>
        </Styled.ReceiveValue>
      </Styled.Receive>
      <Styled.ApproximatelyWrapper>
        <Styled.ReceiveWrapper />
        <Styled.ApproximatelyValue>
          {`~$ ${
            Number(usdPrice) > 0
              ? priceWithEConverter(Number(usdPrice))
              : usdPrice
          }`}
        </Styled.ApproximatelyValue>
      </Styled.ApproximatelyWrapper>
    </Styled.FeeWrapper>
  );
};

export default memo(FeeArea);
