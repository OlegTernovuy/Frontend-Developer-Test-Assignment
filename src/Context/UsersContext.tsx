import * as React from "react";

export type TUser = {
  id: number;
  email: string;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: string;
};

export type StateUser = {
  users: TUser[];
  setUsers: React.Dispatch<React.SetStateAction<TUser[]>>;
};

type ContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = React.createContext<StateUser>(
  null as unknown as StateUser
);

export const UserProvider = ({ children }: ContextProviderProps) => {
  const [users, setUsers] = React.useState<TUser[]>([]);

  const value = {
    users,
    setUsers,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
