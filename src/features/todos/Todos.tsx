import React from "react";
import useTodos from "./useTodos";
import styles from "./Todos.module.css";

function Todos() {
  const {
    todos,
    todo,
    item,
    onAddTodo,
    onSetItem,
    onSetTodo,
    onClearTodo,
  } = useTodos();

  const renderItems = (todo: any) =>
    todo.items.map((item: any, i: number) => {
      return (
        <div key={`item_${i}`} className="item">
          {item}
        </div>
      );
    });

  return (
    <div className={styles.grid_container}>
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => onSetItem(e.target.value)}
        ></input>
        <button onClick={onSetTodo}>+</button>
        <button onClick={onAddTodo}>추가</button>
        <button onClick={onClearTodo}>clear</button>
      </div>
      <div>{renderItems(todo)}</div>
      <div>
        {todos.map((todo) => {
          return (
            <div key={`todo_${todo.id}`} className={styles.todo}>
              {renderItems(todo)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
