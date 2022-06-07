import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import {
  Layout,
  NFTDetailListingItem,
  NFT,
  NFTOverview,
  PersonalInfo,
} from "utils/interfaces";

interface Store {
  nftDetail: NFT;
  nftOverview: NFTOverview;
  nftFirstListingItem: NFTDetailListingItem;
  nftListingItems: NFTDetailListingItem[];
  layout: Layout;
  personalInfo: PersonalInfo;
  isOffChain: boolean;
}

interface Context {
  store: Store;
  setStore: (values: SetStateAction<Store>) => void;
}

interface IInitStore {
  children?: ReactNode | null;
  initStore: Store;
}

const Context = createContext<Context>({
  store: {} as Store,
  setStore: (values) => values,
});

export const initialState = {
  nftDetail: {} as NFT,
  nftOverview: {} as NFTOverview,
  nftFirstListingItem: {} as NFTDetailListingItem,
  nftListingItems: [] as NFTDetailListingItem[],
  layout: {
    headerTitle: "",
    pageName: "",
    hasSidebar: true,
  },
  personalInfo: {} as PersonalInfo,
  isOffChain: false,
};

const Provider = ({ children, initStore }: IInitStore) => {
  const [store, setStore] = useState<Store>(initStore);

  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  );
};

export const useStore = () => useContext(Context);

export default Provider;
