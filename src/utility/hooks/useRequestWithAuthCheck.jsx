import { useState, useEffect, useContext } from "react";
import api from "../axiosConfig/axiosConfig";
import { AuthContext } from "../AuthContext/authContext";

export default function useRequestWithAuthCheck(
  requestCallback,
  params = null
) {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const handleRequest = async () => {
      try {
        console.log(requestCallback, "in hook");
        console.log(params, "in hook");

        await makeOriginalRequest();
      } catch (err) {
        console.log("First request failed, attempting refresh...");
        if (err.response.status === 401) {
          const refreshSuccessful = await refreshToken();
          if (refreshSuccessful) {
            try {
              console.log("Making the request again after refresh...");
              setIsLoggedIn(true);
              await makeOriginalRequest();
            } catch (err) {
              console.log("Request failed again after refresh, logging out...");
              await logout();
            }
          } else {
            console.log("Refresh token failed, logging out...");
            await logout();
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    handleRequest();
  }, [requestCallback, params]);

  const makeOriginalRequest = async () => {
    setIsLoading(true);
    try {
      const originalRequest =
        params == null
          ? await requestCallback()
          : await requestCallback(params);
      setData(originalRequest);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setErrorData({ isError: isError, data: err });
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

  return { data, isLoading, errorData };
}
