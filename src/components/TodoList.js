import React from "react";

import Item from "./Item";

const TodoList = props => {
  // const sortedList = props.todolist.sort((a, b) => a.completed - b.completed);
  return (
    <div className="todo-list">
      {props.todolist.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default TodoList;