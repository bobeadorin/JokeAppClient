import { useEffect, useState } from "react";
import Validate from "../../utility/validateFields";
import useLogin from "../../utility/hooks/useLogin";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, error, setLoginFormData] = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (Validate.ValidateAccount(username, password)) {
      setLoginFormData({ Username: username, Password: password });
    } else {
      alert("Something is not okay");
    }
  };

  return (
    <section className="register-page">
      <form className="register-form" action="" onSubmit={handleSubmitEvent}>
        <h1 className="register-form-title">LogIn_</h1>
        <hr className="text-underline" />
        <div className="register-form-account-data">
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button className="register-form-submit-btn" type="submit">
          Log In!
        </button>
      </form>
    </section>
  );
}
