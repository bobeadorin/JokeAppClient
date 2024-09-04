/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";
import api from "../axiosConfig/axiosConfig";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUserData, setLoggedUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Start with loading

  useEffect(() => {
    const pingUser = async () => {
      try {
        const res = await api.get("/ping", { withCredentials: true });
        setLoggedUserData(res.data);
        console.log(res.data, "Data");
        setIsLoggedIn(true);
      } catch {
        await refreshToken();
      } finally {
        setIsLoading(false); // Done loading
      }
    };
    pingUser();
  }, [isLoggedIn]);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = async () => {
    try {
      await api.get("/logout", { withCredentials: true });
      setLoggedUserData(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const refreshToken = async () => {
    try {
      setIsLoading(true);
      const refreshRequest = await api.get("/refresh", {
        withCredentials: true,
      });
      if (refreshRequest.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (err) {
      setIsLoggedIn(false);
      setLoggedUserData(null);
      console.error("Refresh token request failed", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loggedUserData,
        isLoggedIn,
        isLoading,
        setIsLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
