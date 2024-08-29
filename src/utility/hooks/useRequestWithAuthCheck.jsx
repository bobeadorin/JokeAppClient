import { useState, useEffect } from "react";
import api from "../axiosConfig/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function useRequestWithAuthCheck(requestCallback) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleRequest = async () => {
      try {
        await makeOriginalRequest();
      } catch (err) {
        console.log("First request failed, attempting refresh...");
        const refreshSuccessful = await refreshToken();
        if (refreshSuccessful) {
          try {
            console.log("Making the request again after refresh...");
            await makeOriginalRequest();
          } catch (err) {
            console.log("Request failed again after refresh, logging out...");
            await logout();
          }
        } else {
          console.log("Refresh token failed, logging out...");
          await logout();
        }
      } finally {
        setIsLoading(false);
      }
    };

    handleRequest();
  }, []);

  const makeOriginalRequest = async () => {
    setIsLoading(true);
    try {
      const originalRequest = await requestCallback();
      setData(originalRequest);
      setError(false);
    } catch (err) {
      setError(true);
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
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  return { data, isLoading };
}
