import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

function DetailTodo() {
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  const foundData = todos.find((item) => {
    console.log(params.id, item.id);
    return item.id === parseInt(params.id);
  });

  return (
    <div>
      <span>ID : {foundData.id}</span>
      <button onClick={() => Navigate("/")}>이전으로</button>
      <h1>{foundData.title}</h1>
      <p>{foundData.desc}</p>
    </div>
  );
}

export default DetailTodo;
