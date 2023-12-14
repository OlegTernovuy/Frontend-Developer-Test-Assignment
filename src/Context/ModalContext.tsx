import * as React from "react";

export type StateModal = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
};

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = React.createContext<StateModal>(
  null as unknown as StateModal
);

export const ModalProvider = ({ children }: ContextProviderProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);

  const value = {
    open,
    setOpen,
    handleOpen,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
