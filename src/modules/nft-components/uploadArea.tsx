import { FC, useCallback, memo } from "react";
import Styled from "assets/styles/nft/create.style";
import { FILE_TYPE, MAX_FILE_SIZE } from "utils/constants";
import { FormikErrors } from "formik";
import { InitValuesNFT } from "./validate";

interface UploadProps {
  isDrag: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<InitValuesNFT>> | Promise<void>;
  setFieldTouched: (
    field: string,
    touched?: boolean,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<InitValuesNFT>> | Promise<void>;
  values: InitValuesNFT;
  imagePreview: string;
  inputFileRef: any;
  setIsDrag: (isDrag: boolean) => void;
  setImagePreview: (value: string) => void;
}

const UploadArea: FC<UploadProps> = ({
  isDrag,
  values,
  imagePreview,
  inputFileRef,
  setIsDrag,
  setFieldValue,
  setFieldTouched,
  setImagePreview,
}) => {
  const dragOver = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const dragEnter = useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDrag(true);
    },
    [setIsDrag],
  );

  const dragLeave = useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.currentTarget.contains(e.relatedTarget)) return;
      setIsDrag(false);
    },
    [setIsDrag],
  );

  const onTriggerOpenUploadFile = useCallback(
    (e: any) => {
      inputFileRef.current?.click();
    },
    [inputFileRef],
  );

  const onFileChange = useCallback(
    (e: any) => {
      const files = e.target.files[0];
      if (files.size > MAX_FILE_SIZE) {
        setFieldTouched("content", true);
        setFieldValue("content", files, true);
        return;
      } else if (!FILE_TYPE.includes(files.type)) {
        setFieldTouched("content", true);
        setFieldValue("content", files, true);
        return;
      } else {
        const preview = URL.createObjectURL(files);
        setImagePreview(preview);
        setFieldValue("content", files);
        setFieldValue("previewImage", files);
        setFieldTouched("content", false);
      }
    },
    [setFieldTouched, setFieldValue, setImagePreview],
  );
  const fileDrop = useCallback(
    (e: any) => {
      e.preventDefault();
      setIsDrag(false);
      const files = e.dataTransfer.files[0];

      if (files.size > MAX_FILE_SIZE) {
        setFieldTouched("content", true);
        setFieldValue("content", files, true);
        return;
      } else if (!FILE_TYPE.includes(files.type)) {
        setFieldTouched("content", true);
        setFieldValue("content", files, true);
        return;
      } else {
        const preview = URL.createObjectURL(files);
        setImagePreview(preview);
        setFieldValue("content", files);
        setFieldValue("previewImage", files);
        setFieldTouched("content", false);
      }
    },
    [setFieldTouched, setFieldValue, setImagePreview, setIsDrag],
  );

  const onClearImagePreview = useCallback(
    (e: any) => {
      e.preventDefault();
      setFieldValue("content", "");
      setFieldValue("previewImage", "");
      setImagePreview("");
    },
    [setFieldValue, setImagePreview],
  );

  return (
    <>
      {" "}
      <Styled.Title>NFT Content *</Styled.Title>
      <Styled.NFTTitle>
        <Styled.NFTContentDescription>
          Upload Image, Video, Audio, or 3D Model. File types supported: JPG,
          PNG, GIF, SVG.
        </Styled.NFTContentDescription>
        <Styled.NFTContentDescription>
          Max size: 100 MB
        </Styled.NFTContentDescription>
      </Styled.NFTTitle>
      <Styled.UploadArea
        isDrag={isDrag}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        {values.content &&
        imagePreview &&
        FILE_TYPE.includes(values.content.type) &&
        values.content.size <= MAX_FILE_SIZE ? (
          <>
            <Styled.CloseIcon onClick={onClearImagePreview} />
            <Styled.Image
              width={199}
              height={287}
              layout="fixed"
              src={imagePreview}
            />
          </>
        ) : (
          <>
            <Styled.FileUpload />
            <Styled.DrapDropFileOr>DRAG & DROP FILE OR</Styled.DrapDropFileOr>
            <Styled.UploadFromYourDevice onClick={onTriggerOpenUploadFile}>
              UPLOAD FROM YOUR DEVICE
            </Styled.UploadFromYourDevice>
            <Styled.InputUploadFile
              ref={inputFileRef}
              onChange={onFileChange}
              type="file"
              name="content"
              id="content"
            />
          </>
        )}
      </Styled.UploadArea>
    </>
  );
};

export default memo(UploadArea);
