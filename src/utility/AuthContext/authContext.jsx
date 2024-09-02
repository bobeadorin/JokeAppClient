/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";
import api from "../axiosConfig/axiosConfig";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUserData, setLoggedUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const pingUser = async () => {
      setIsLoading(true);
      try {
        const res = await api.get("/ping", { withCredentials: true });
        setLoggedUserData(res.data);
        setIsLoggedIn(true);

        console.log("it Works", res.data);
      } catch {
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };
    pingUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ loggedUserData, isLoggedIn, isLoading, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
