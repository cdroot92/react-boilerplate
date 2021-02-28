import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";

import { selectTodos, addTodo, setTodos, Todo, Item } from "./todosSlice";
import { getTodos } from "../../api/todos";

export default function useTodos() {
  //const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const initialTodo: Todo = { items: [] };
  const initialItem: Item = { body: "" };
  const [todo, setTodo] = useState<Todo>(initialTodo);
  const [item, setItem] = useState<Item>(initialItem);

  useEffect(() => {}, []);

  const { data: todos } = useQuery("getTodos", getTodos);

  const onAddTodo = () => {
    dispatch(addTodo(todo));
    onClearTodo();
  };

  const onSetTodo = () => {
    setTodo({ items: todo.items.concat(item) });
    setItem(initialItem);
  };

  const onClearTodo = () => {
    setTodo({ items: [] });
    setItem(initialItem);
  };

  const onSetItem = (i: string) => {
    setItem({ ...item, body: i });
  };

  return { todos, todo, item, onAddTodo, onSetTodo, onClearTodo, onSetItem };
}
