import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const btnTxt = { text: "Click Me Again!" };
  const style = { backgroundColor: "black", color: "white" };
  return (
    <div>
      <label class="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={style}>{btnTxt.text}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
