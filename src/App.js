import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
// import { BrowserRouter as Router, Route, Switch ,} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been Enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/"> */}
        <TextForm
          heading="Enter the Text to Analize below text"
          showAlert={showAlert}
          mode={mode}
        />
        {/* </Route> */}
        {/* <Route path="/about">
            <About />
          </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;
