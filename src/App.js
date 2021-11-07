import "./App.css";
import Form from "./components/Form/Form";
import Robot from "./components/Robot/Robot";

function App() {
  return (
    <>
      <h1>MY ROBOT LIST</h1>
      <div className="separator" />
      <Form />
      <div className="separator" />
      <ul className="container__robots">
        <Robot />
      </ul>
    </>
  );
}

export default App;
