import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";

function TodoCreate() {
  const dispatch = useDispatch();
  const [nextId, setNextId] = useState(3);
  // const todos = useSelector((state) => {
  //   return state.todos;
  // });

  const titleChangeHandler = (event) => {
    setTodo({ ...todo, title: event.target.value });
  };

  const descChangeHandler = (event) => {
    setTodo({ ...todo, desc: event.target.value });
  };

  const [todo, setTodo] = useState({ title: "", desc: "" });

  const addTodoHandler = () => {
    const newTodo = { id: nextId, ...todo, isDone: false };
    setNextId((prevId) => prevId + 1); // nextId 값을 1 증가
    dispatch(addTodo(newTodo));

    setTodo({ title: "", desc: "" }); //input값 초기화
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
