import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authanticate: function (token) {},
  logout: function () {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  function authanticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("authToken", token)
      .then(() => console.log("Token stored successfully"))
      .catch((error) => console.log("Error storing token:", error));
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("authToken")
      .then(() => console.log("Token removed successfully"))
      .catch((error) => console.log("Error removing token:", error));
  }

  useEffect(() => {
    AsyncStorage.getItem("authToken")
      .then((token) => {
        if (token) {
          authanticate(token);
        }
      })
      .catch((error) => console.log("Error retrieving token:", error));
  }, []);

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authanticate: authanticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
