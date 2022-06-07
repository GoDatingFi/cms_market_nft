import { FC, memo } from "react";
import Styled from "assets/styles/nft/create.style";
import { FILE_TYPE, MAX_FILE_SIZE } from "utils/constants";
import { InitValuesNFT } from "./validate";

interface PreviewProps {
  values: InitValuesNFT;
  imagePreview: string;
}

const PreviewArea: FC<PreviewProps> = ({ values, imagePreview }) => {
  return (
    <>
      <Styled.Title>Preview</Styled.Title>
      <Styled.BorderDash>
        {values.content &&
        imagePreview &&
        FILE_TYPE.includes(values.content.type) &&
        values.content.size <= MAX_FILE_SIZE ? (
          <Styled.Image
            width={199}
            height={287}
            layout="fixed"
            src={imagePreview}
          />
        ) : (
          <>
            <Styled.ImagePreview />
            <Styled.PreviewOfYourNFT>Preview of your</Styled.PreviewOfYourNFT>
            <Styled.PreviewOfYourNFT>new NFT</Styled.PreviewOfYourNFT>
          </>
        )}
      </Styled.BorderDash>
    </>
  );
};

export default memo(PreviewArea);
