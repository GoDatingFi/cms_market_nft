import { BSC } from "./smart-contract";

export const getFromSession = (key: string) => {
  const value = window.sessionStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const getFromLocalStorage = (key: string) => {
  const value = window.localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const getWalletSupports = () => {
  const userAgentString =
    typeof window !== "undefined" ? navigator.userAgent : "";
  if (/iPad|iPhone|iPod/i.test(userAgentString)) {
    return ["metamask", "trust", "coin98"];
  }

  return undefined;
};

export const dotsSensitive = ({
  originalString,
  startPosition,
  endPosition,
}: {
  originalString?: string;
  startPosition?: number;
  endPosition?: number;
}) => {
  if (isEmpty(originalString)) {
    return "";
  }
  return (
    originalString?.substring(0, Number(startPosition)) +
    "..." +
    originalString?.substring(
      Number(endPosition),
      Number(originalString?.length),
    )
  );
};

export const isEmpty = (obj: any) => {
  return (
    [Object, Array].includes((obj || {}).constructor) &&
    !Object.entries(obj || {}).length
  );
};

export const omit = <Type extends object, Key extends keyof Type>(
  obj: Type,
  props: Key[],
) => {
  obj = { ...obj };
  props.forEach((prop) => delete obj[prop]);
  return obj;
};

export const omitBy = (
  obj: { [key: string]: any },
  check: (val: any) => boolean,
) => {
  obj = { ...obj };
  Object.entries(obj).forEach(
    ([key, value]) => check(value) && delete obj[key],
  );
  return obj;
};

export const parseJSON = <T>(jsonString: string | null): T | undefined => {
  try {
    return jsonString === "undefined"
      ? undefined
      : JSON.parse(jsonString ?? "");
  } catch (error) {
    console.log("Parsing error on ", { jsonString });
    return undefined;
  }
};

export const getBSCScanLink = (hash: string) => {
  return `${BSC.config.blockExplorerUrls}/tx/${hash}`;
};

export const priceWithEConverter = (price: number) => {
  if (price <= 1e-6) {
    const b = parseInt(price?.toString().split("e-")[1]);
    if (b) {
      const pricePow = (price * Math.pow(10, b - 1)).toFixed(1);
      return "0." + new Array(b)?.join("0") + pricePow.toString().substring(2);
    }
  }
  if (price >= 1e6) {
    const b = parseInt(price?.toString().split("e+")[1]);
    if (b) {
      const pricePow = price * Math.pow(10, b - 1);
      return new Array(b)?.join("0") + pricePow.toString().substring(2);
    }
  }
  return price;
};

export const onPreventString = (event: any) => {
  if (["+", "-", "e", "E", ","].includes(event.key)) {
    event.preventDefault();
  }
};

export const onPreventStringInteger = (event: any) => {
  if (["+", "-", "e", "E", ",", "."].includes(event.key)) {
    event.preventDefault();
  }
};

export const priceToUSDConverter = ({
  nftPrice = 0,
  originalPrice = 0,
  toFixed = 2,
}: {
  nftPrice: number;
  originalPrice: number;
  toFixed?: number;
}) => {
  return (nftPrice * originalPrice)?.toFixed(toFixed);
};