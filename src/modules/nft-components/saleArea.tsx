import { FC, memo, useCallback } from "react";
import { FormikErrors, FormikTouched } from "formik";
import Switch from "components/switch";
import { onPreventString, priceToUSDConverter } from "utils/functions";
import Styled from "assets/styles/nft/create.style";
import Message from "components/message";
import {
  CURRENCY_NAME,
  CURRENCY_OPTIONS,
  MESSAGE_STATUS,
  REGEX_DECIMAL,
} from "utils/constants";
import { InitValuesNFT } from "./validate";
import FeeArea from "modules/nft-components/feeArea";
import { GeckoSimplePriceResponse } from "api/gecko/index.interface";

interface SaleAreaProps {
  values: InitValuesNFT;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<InitValuesNFT>> | Promise<void>;
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  errors: FormikErrors<InitValuesNFT>;
  touched: FormikTouched<InitValuesNFT>;
  priceToUSD: GeckoSimplePriceResponse | undefined;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1,
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const SaleArea: FC<SaleAreaProps> = ({
  values,
  setFieldValue,
  handleBlur,
  errors,
  touched,
  priceToUSD,
  handleChange,
}) => {
  const renderPrice = useCallback(
    (data: InitValuesNFT) => {
      return priceToUSDConverter({
        nftPrice: data.price ? Number(data.price) : 0,
        originalPrice: priceToUSD?.[CURRENCY_NAME?.[data.unitPrice!]]?.usd ?? 0,
        toFixed: 2,
      });
    },
    [priceToUSD],
  );

  return (
    <>
      <Styled.SwitchWrapper>
        <Styled.Title>Put item on sale</Styled.Title>
        <Switch
          value={values.pushItemOnSale}
          onChange={(value) => {
            setFieldValue("pushItemOnSale", value);
          }}
          disabled={!values.displayOnMarketplace}
        />
      </Styled.SwitchWrapper>
      <Styled.SubTitleSwitch>
        Sell your NFT on Mirana&apos;s marketplace
      </Styled.SubTitleSwitch>
      <Styled.FeeContainer isShow={values.pushItemOnSale}>
        {values.pushItemOnSale && (
          <div style={{ marginTop: "27px" }}>
            <Styled.Title>Type *</Styled.Title>
            <Styled.OnSaleTypeWrapper>
              <Styled.CardOnSaleType>
                <Styled.DollarCircle />
                <Styled.DollarCircleTitle>Fixed Price</Styled.DollarCircleTitle>
              </Styled.CardOnSaleType>
            </Styled.OnSaleTypeWrapper>
            <Styled.FeeInputWrapper>
              <Styled.PricePerItemWrapper>
                <Styled.Input
                  id="price"
                  name="price"
                  type="number"
                  marginTop={26}
                  step="any"
                  onBlur={handleBlur}
                  onKeyDown={onPreventString}
                  label="Price per item *"
                  onWheel={(e: any) => e.target.blur()}
                  value={values.price ?? ""}
                  placeholder="Enter price for one copy"
                  onChange={(e) => {
                    const { value } = e.target;
                    if (value && !REGEX_DECIMAL.test(value)) {
                      e.preventDefault();
                      return;
                    }
                    setFieldValue("price", e.target.value);
                  }}
                />
                {errors.price && touched.price ? (
                  <Message
                    message={errors.price}
                    status={MESSAGE_STATUS.DANGER}
                  />
                ) : null}
              </Styled.PricePerItemWrapper>
              <Styled.UnitPriceWrapper>
                <Styled.DropdownUnitPrice
                  id="unitPrice"
                  name="unitPrice"
                  currentValue={values.unitPrice}
                  options={CURRENCY_OPTIONS}
                  onChange={(value) => {
                    setFieldValue("unitPrice", value);
                  }}
                />
              </Styled.UnitPriceWrapper>
            </Styled.FeeInputWrapper>
            <FeeArea values={values} usdPrice={renderPrice(values)} />
          </div>
        )}
      </Styled.FeeContainer>
    </>
  );
};

export default memo(SaleArea);
