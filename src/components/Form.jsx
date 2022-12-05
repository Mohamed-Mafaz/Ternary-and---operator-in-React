import React from "react";
import Input from "./Input";

function Form() {
  return (
    <div>
      <form className="form">
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Form;
