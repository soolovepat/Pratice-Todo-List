import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../redux/modules/todos";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const TodoItem = ({ todo }) => {
  const { id, title, desc, isDone } = todo;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <ListBox key={id}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div>
        {isDone ? (
          <>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={handleToggle}>취소</button>
          </>
        ) : (
          <>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={handleToggle}>완료</button>
          </>
        )}
      </div>
      <div>
        <Link to={`/${id}`}>상세보기</Link>
      </div>
    </ListBox>
  );
};

export default TodoItem;

const ListBox = styled.div`
  width: 220px;
  margin-right: 10px;
  border: 1px solid #5fff87;
  border-radius: 24px;
`;
