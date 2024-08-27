import api from "../axiosConfig/axiosConfig";
import { useEffect, useState } from "react";

export default function useLogin() {
  const [loginFormData, setLoginFormData] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loginFormData === null) return;
    else postLoginDataRequest();
  }, [loginFormData]);

  const postLoginDataRequest = async () => {
    try {
      const res = await api.post(
        "/login",
        {
          Username: loginFormData.Username,
          Password: loginFormData.Password,
        },
        { withCredentials: true }
      );
      console.log(res);

      setData(res.data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  return [data, error, setLoginFormData];
}
