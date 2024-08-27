import { useEffect, useState } from "react";
import api from "../axiosConfig/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function useUserData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [errorStatus, setErrorStatus] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
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
      if (err.response.status === 401) {
        console.log("in step getUser with error 401");
        const refreshResponse = await refreshToken();

        if (refreshResponse === 200) {
          getUserData();
          console.log("retry getUserData");
        }

        if (refreshResponse === 401) {
          console.log("go to login");

          navigate("/login");
        }
      }
    }
  };
  return { data, error };
}
