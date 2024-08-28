import { useEffect, useState } from "react";
import api from "../axiosConfig/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function useUserData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      console.log("in step refresh");
      const res = await api.get("/refresh", { withCredentials: true });
      return res.status;
    } catch (error) {
      console.log(error, "refreshError");
    }
  };

  const getUserData = async () => {
    try {
      console.log("in step getUser");
      const res = await api.get("/getUser", { withCredentials: true });
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return { data, error };
}
