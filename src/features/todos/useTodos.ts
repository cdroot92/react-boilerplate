import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, addTodo, Todo } from "./todosSlice";

export default function useTodos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const initialTodo: Todo = { items: [] };
  const [todo, setTodo] = useState<Todo>(initialTodo);
  const [item, setItem] = useState<string>("");

  const onAddTodo = () => {
    dispatch(addTodo(todo));
    onClearTodo();
  };

  const onSetTodo = () => {
    setTodo({ items: todo.items.concat(item) });
    setItem("");
  };

  const onClearTodo = () => {
    setTodo({ items: [] });
    setItem("");
  };

  const onSetItem = (i: string) => {
    setItem(i);
  };

  return { todos, todo, item, onAddTodo, onSetTodo, onClearTodo, onSetItem };
}
