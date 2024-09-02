import { createContext, useEffect, useState } from "react";
import api from "../axiosConfig/axiosConfig";

export const CurrentUserContext = createContext();

export function UserDataContext() {
  const [isUserLogged, setIsUserLogged] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const pingUser = async () => {
      setIsLoading(true);
      try {
        const res = await api.get("/ping", { withCredentials: true });
        setIsUserLogged(res.data);
      } catch {
        setIsUserLogged(null);
      } finally {
        setIsLoading(false);
      }
    };
    pingUser();
  }, []);

  return { isUserLogged, isLoading };
}
