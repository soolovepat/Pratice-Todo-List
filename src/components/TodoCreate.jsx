import React, { useState } from "react";

function TodoCreate({ todos, setTodos }) {
  const titleChangeHandler = (event) => {
    setTodo({ ...todo, title: event.target.value });
  };

  const descChangeHandler = (event) => {
    setTodo({ ...todo, desc: event.target.value });
  };

  const [todo, setTodo] = useState({ title: "", desc: "" });

  let nextId = 3;
  const addTodoHandler = () => {
    const newTodo = { id: nextId, ...todo, isDone: false };
    setTodos([...todos, newTodo]);
    nextId++;

    //input값 초기화
    setTodo({ title: "", desc: "" });
  };
  return (
    <form>
      <input
        type="text"
        value={todo.title}
        onChange={titleChangeHandler}
      ></input>
      <input type="text" value={todo.desc} onChange={descChangeHandler}></input>
      <button type="button" onClick={addTodoHandler}>
        추가하기
      </button>
    </form>
  );
}

export default TodoCreate;
