import { createContext, FC, PropsWithChildren, useReducer } from "react";

import { useReadLocalStorage } from "usehooks-ts";

import { User } from "@/models/user";

type Action = { type: "login"; payload: User } | { type: "logout" };
type Dispatch = (action: Action) => void;
type State = {
  user: User | undefined;
};

const userReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "login":
      window.localStorage.setItem("user", JSON.stringify(action.payload));
      return { user: action.payload };

    case "logout":
      window.localStorage.removeItem("user");
      return { user: undefined };
  }
};

export const UserContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const user = useReadLocalStorage<User>("user") as User;
  const [state, dispatch] = useReducer(userReducer, { user });
  const value = { state, dispatch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
