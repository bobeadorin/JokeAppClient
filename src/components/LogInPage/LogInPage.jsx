import { useState } from "react";
import Validate from "../../utility/validateFields";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (Validate.ValidateAccount(email, password)) {
      alert("it's okay");
      setEmail("");
      setPassword("");
    } else return;
  };

  return (
    <section className="register-page">
      <form className="register-form" action="" onSubmit={handleSubmitEvent}>
        <h1 className="register-form-title">LogIn_</h1>
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
        </div>

        <button className="register-form-submit-btn" type="submit">
          Log In !
        </button>
      </form>
    </section>
  );
}
