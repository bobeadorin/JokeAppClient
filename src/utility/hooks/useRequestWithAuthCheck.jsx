import { useState, useEffect } from "react";
import api from "../axiosConfig/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function useRequestWithAuthCheck(requestCallback) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isRefreshSuccessful, setIsRefreshSuccessful] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleRequest = async () => {
      try {
        await makeOriginalRequest();

        if (error) {
          console.log("is error first");
          await refreshToken();

          if (isRefreshSuccessful) {
            console.log("making the request again");
            await makeOriginalRequest();
          } else {
            console.log("logout");
            await logout();
          }
        }
      } catch (err) {
        console.error("An error occurred: ", err);
      } finally {
        setIsLoading(false);
      }
    };

    handleRequest();
  }, [error, isRefreshSuccessful]);

  const makeOriginalRequest = async () => {
    try {
      setIsLoading(true);
      const originalRequest = await requestCallback();
      console.log(originalRequest);
      setData(originalRequest);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  const refreshToken = async () => {
    try {
      setIsLoading(true);
      const refreshRequest = await api.get("/refresh", {
        withCredentials: true,
      });
      if (refreshRequest.status === 200) {
        setIsRefreshSuccessful(true);
      }
    } catch (err) {
      setIsRefreshSuccessful(false);
    }
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
