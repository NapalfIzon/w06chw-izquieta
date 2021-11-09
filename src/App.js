import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";
import Robot from "./components/Robot/Robot";
import useUser from "./hooks/useUser";

function App() {
  const {
    user: { isAuthenticated },
  } = useUser();

  return (
    <>
      {isAuthenticated ? (
        <div className="App">
          <h1>MY ROBOT LIST</h1>
          <div className="separator" />
          <Form />
          <div className="separator" />
          <ul className="container__robots">
            <Robot />
          </ul>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
