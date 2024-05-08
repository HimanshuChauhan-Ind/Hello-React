import React from "react";
import ReactDOM from "react-dom/client";

const Greet = () => <h1>Welcome</h1>;

//React composition
const Heading = () => (
  <div className="head">
    <Greet />
    <h1>Hello React</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
