import { useState, useContext } from "react";
import api from "../axiosConfig/axiosConfig";
import { AuthContext } from "../AuthContext/authContext";

export default function useOnClickRequestWithAuthCheck() {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleRequest = async (requestCallback, params = null) => {
    setIsLoading(true);
    try {
      await makeOriginalRequest(requestCallback, params);
    } catch (err) {
      console.log("First request failed, attempting refresh...");
      console.log(err);
      if (err.response?.status === 401) {
        const refreshSuccessful = await refreshToken();
        if (refreshSuccessful) {
          try {
            console.log("Making the request again after refresh...");
            await makeOriginalRequest(requestCallback, params);
            setIsLoggedIn(true);
          } catch (err) {
            console.log("Request failed again after refresh, logging out...");
            await logout();
          }
        } else {
          console.log("Refresh token failed, logging out...");
          await logout();
        }
      } else {
        setIsError(true);
        setErrorData(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const makeOriginalRequest = async (requestCallback, params) => {
    try {
      const originalRequest =
        params != null
          ? await requestCallback(params)
          : await requestCallback();
      setData(originalRequest);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setErrorData(err);
      throw err;
    }
  };

  const refreshToken = async () => {
    try {
      setIsLoading(true);
      const refreshRequest = await api.get("/refresh", {
        withCredentials: true,
      });
      if (refreshRequest.status === 200) {
        return true;
      }
    } catch (err) {
      console.error("Refresh token request failed", err);
    }
    return false;
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      const logoutRes = await api.get("/logout", { withCredentials: true });
      if (logoutRes.status === 200) {
        setIsLoggedIn(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);
    }
  };

  return { data, isLoading, handleRequest, errorData, isError };
}
