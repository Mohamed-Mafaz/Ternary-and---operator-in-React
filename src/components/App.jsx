import React from "react";
import Form from "./Form";

const hello = false;

function find() {
  return <div>{hello === true ? <h1>Hello</h1> : <h1>Goodbye</h1>}</div>;
}

const time = new Date(2021, 12, 1, 21).getHours();

function work() {
  return <div>{time < 22 && <h1>Why are you still working?</h1>}</div>;
}

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Form></Form>
      {work()}
      {find()}
    </div>
  );
}

export default App;
