import api from "../axiosConfig/axiosConfig";
import { useEffect, useState } from "react";

export default function useRegistration() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);
  const [registrationData, setRegistrationData] = useState(null);

  useEffect(() => {
    if (registrationData === null) return;
    else {
      postRegistrationData();
    }
  }, [registrationData]);

  const postRegistrationData = async () => {
    try {
      res = await api.post("/register", registrationData);

      setIsRegistered(await res.data.Succes);
    } catch (error) {
      setError(error);
      setIsRegistered(false);
    }
  };
  return [isRegistered, error, setRegistrationData];
}
