import { useState } from "react";
import useUser from "../../hooks/useUser";

const Login = () => {
  const [formularyData, setFormularyData] = useState({
    // TODO ver si se puede deconstruir por formularyData -> { username, password }
    username: "",
    password: "",
  });
  const { loginUser } = useUser();

  const changeText = (event) => {
    setFormularyData({
      ...formularyData,
      [event.target.id]: event.target.value,
    });
  };

  const loginRequest = (event) => {
    event.preventDefault();
    loginUser(formularyData);
  };

  return (
    <div className="login">
      <form
        className="login-formulary"
        onSubmit={loginRequest}
        noValidate
        autoComplete="off"
      >
        <h2 className="login__title">Login</h2>
        <input
          type="text"
          id="username"
          className="login__input"
          placeholder="Username"
          value={formularyData.username}
          onChange={changeText}
        />
        <input
          type="password"
          id="password"
          className="login__input"
          placeholder="Password"
          value={formularyData.password}
          onChange={changeText}
        />
        <button className="login__button">Engines on!</button>
      </form>
    </div>
  );
};

export default Login;
