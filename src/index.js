import React from "react";
import ReactDOM from "react-dom";

function getBtnTxt() {
  return "Click Me!";
}

const App = () => {
  return (
    <div>
      <label class="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "black", color: "white" }}>
        {getBtnTxt()}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
