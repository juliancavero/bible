import { ProviderProps } from "@/types/common";
import { createContext, useContext, useState } from "react";

const initialState: {
  text: string;
  setText: (text: string) => void;
} = {
  text: "",
  setText: () => {},
};

const IndexBarContext = createContext<{
  text: string;
  setText: (text: string) => void;
}>(initialState);

const IndexBarProvider = ({ children }: ProviderProps) => {
  const [text, setText] = useState<string>("");

  return (
    <IndexBarContext.Provider
      value={{
        text,
        setText,
      }}
    >
      {children}
    </IndexBarContext.Provider>
  );
};

const useIndexBarContext = () => {
  return useContext(IndexBarContext);
};

export { IndexBarContext, IndexBarProvider, useIndexBarContext };
