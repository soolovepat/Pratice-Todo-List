import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function DetailTodo() {
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  const foundData = todos.find((item) => {
    console.log(params.id, item.id);
    return item.id === parseInt(params.id);
  });

  return <div>{foundData.id}</div>;
}

export default DetailTodo;
