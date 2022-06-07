import { FC, memo } from "react";
import Switch from "components/switch";
import Styled from "assets/styles/nft/create.style";
import { InitValuesNFT } from "./validate";
import { FormikErrors } from "formik";

export interface ShowOnMarketPlaceProps {
  values: InitValuesNFT;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<InitValuesNFT>> | Promise<void>;
}

const ShowOnMarketPlace: FC<ShowOnMarketPlaceProps> = ({
  values,
  setFieldValue,
}) => {
  return (
    <>
      <Styled.SwitchWrapper>
        <Styled.Title>Display on marketplace</Styled.Title>
        <Switch
          value={values.displayOnMarketplace}
          onChange={(value) => {
            setFieldValue("displayOnMarketplace", value);
            if (values.pushItemOnSale) {
              setFieldValue("pushItemOnSale", false);
              setFieldValue("price", undefined);
            }
          }}
        />
      </Styled.SwitchWrapper>
      <Styled.SubTitleSwitch>
        Show/hide your NFT on Mirana&apos;s marketplace
      </Styled.SubTitleSwitch>
    </>
  );
};

export default memo(ShowOnMarketPlace);
