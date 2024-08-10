import "./RegisterPageStyles.css";
import { useEffect, useState } from "react";
import useRegistration from "../../utility/hooks/useRegistration";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isRegistered, error, setRegistrationData] = useRegistration();

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    setRegistrationData({
      Email: email,
      Password: password,
      Username: username,
      FirstName: firstName,
      LastName: lastName,
      Country: country,
      Currency: currency,
      PhoneNumber: phoneNumber,
      Address: address,
    });
    clearInputState();
  };

  const clearInputState = () => {
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setUsername("");
    setFirstName("");
    setLastName("");
    setAddress("");
    setCountry("");
    setCurrency("");
    setPhoneNumber("");
  };

  useEffect(() => {
    console.log(isRegistered);
    if (isRegistered === true) {
      alert("merge");
    }
  }, [isRegistered]);

  return (
    <section className="register-page">
      <form className="register-form" action="" onSubmit={handleSubmitEvent}>
        <h1 className="register-form-title">Register_</h1>
        <hr className="text-underline" />
        <div className="register-form-account-data">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="Repeat Password"
          />
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
          />
        </div>
        <div className="register-form-personal-data">
          <div className="register-form-personal-data-section">
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="First Name"
            />
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Last name"
            />
          </div>
          <div className="register-form-personal-data-section">
            <input
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              placeholder="Country"
            />
            <input
              type="text"
              onChange={(e) => setCurrency(e.target.value)}
              value={currency}
              placeholder="Currency"
            />
          </div>
        </div>
        <div className="register-form-account-data">
          <input
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            placeholder="Phone"
          />
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="Address"
          />
        </div>
        <button className="register-form-submit-btn" type="submit">
          Register
        </button>
      </form>
    </section>
  );
}
