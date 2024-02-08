import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";
export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authanticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authanticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authanticate: authanticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
