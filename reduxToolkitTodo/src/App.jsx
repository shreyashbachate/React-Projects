import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <h1 className="bg-gray-700 m-5 p-5 text-white text-3xl font-bold">
        ToDo using Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
