import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import { Todo, Item } from "./todosSlice";
import { getTodos, postTodos } from "../../api/todos";

export default function useTodos() {
  //const todos = useSelector(selectTodos);
  //const dispatch = useDispatch();

  const initialTodo: Todo = { items: [], tags: [] };
  const initialItem: Item = { body: "" };
  const [todo, setTodo] = useState<Todo>(initialTodo);
  const [item, setItem] = useState<Item>(initialItem);

  useEffect(() => {}, []);

  const { data: todos } = useQuery("getTodos", getTodos);

  const onAddTodo = () => {
    //dispatch(addTodo(todo));
    postTodos(todo)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
    onClearTodo();
  };

  const onSetTodo = () => {
    setTodo({ ...todo, items: todo.items.concat(item) });
    setItem(initialItem);
  };

  const onClearTodo = () => {
    setTodo(initialTodo);
    setItem(initialItem);
  };

  const onSetItem = (i: string) => {
    setItem({ ...item, body: i });
  };

  return { todos, todo, item, onAddTodo, onSetTodo, onClearTodo, onSetItem };
}
