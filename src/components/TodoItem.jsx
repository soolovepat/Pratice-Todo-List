import React from "react";

const TodoItem = ({ todo, removeTodo, toggleTodo }) => {
  const { id, title, desc, isDone } = todo;

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleToggle = () => {
    toggleTodo(id);
  };

  return (
    <div key={id}>
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
    </div>
  );
};

export default TodoItem;
