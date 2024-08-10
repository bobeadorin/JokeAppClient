import api from "../axiosConfig/axiosConfig";
import { useEffect, useState } from "react";

export default function useRegistration() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);
  const [registrationData, setRegistrationData] = useState(null);

  useEffect(() => {
    if (registrationData === null) return;
    else {
      console.log(registrationData);
      postRegistrationData();
    }
  }, [registrationData]);

  const postRegistrationData = async () => {
    try {
      data = await api.post("/register", registrationData);
      res = await data.json();
      setIsRegistered(res.data.Succes);
    } catch (error) {
      setError(error);
      setIsRegistered(false);
    }
  };
  return [isRegistered, error, setRegistrationData];
}
