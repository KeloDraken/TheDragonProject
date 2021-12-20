import { createContext } from "react";

export const userAuthContext = createContext({
  isLoggedIn: false,
  toggleAuthStatus: () => {},
});
