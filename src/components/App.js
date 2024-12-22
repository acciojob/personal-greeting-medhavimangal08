import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [text, setText] = useState(""); // We use state to store the input value

  function setword(e) {
    setText(e.target.value); // Directly update the state with the input value
  }

  return (
    <div>
      <label>Enter your name:</label>
      <br />
      <input type="text" onChange={setword} />
      <p>{text.length > 1 ? `Hello ${text}!` : ""}</p>
    </div>
  );
};

export default App;
