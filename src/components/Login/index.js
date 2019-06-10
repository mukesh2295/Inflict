import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import ValidatedLoginForm from "./ValidateForm";

const form = function Form() {
  return (
    <div className="App">
      <h1> Login Form</h1>
      <ValidatedLoginForm />
    </div>
  );
}

export default form;