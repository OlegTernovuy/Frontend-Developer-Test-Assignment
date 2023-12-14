import * as React from "react";

export type IAccessAuth = {
  isAuthenticated: boolean;
  access: string;
}

export type IState = {
  isAuthenticated: IAccessAuth | undefined;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<IAccessAuth| undefined>>;
};

type ContextProviderProps = {
  children: React.ReactNode;
};

export const IsAuthenticatedContext = React.createContext<IState>(
  null as unknown as IState
);

export const IsAuthenticatedProvider = ({ children }: ContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<IAccessAuth>();

  const value = {
    isAuthenticated,
    setIsAuthenticated,
  };
  return (
    <IsAuthenticatedContext.Provider value={value}>
      {children}
    </IsAuthenticatedContext.Provider>
  );
};
