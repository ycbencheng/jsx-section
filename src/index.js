import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <label class="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button>Submit</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
