import React from "react";
import Todohead from "./components/Todohead";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function Home() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "React Todo-List 반복 학습하기",
  //     desc: "10번 반복 !!!",
  //     isDone: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Redux 학습하기",
  //     desc: "예제 10번 따라하기 !",
  //     isDone: false,
  //   },
  // ]);
  return (
    <div>
      <Todohead />
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default Home;
