import React from "react";
import Todohead from "./components/Todohead";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function Home() {
  return (
    <div>
      <Todohead />
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default Home;
