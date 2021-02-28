import client from "./baseClient";
import { Todo } from "../features/todos/todosSlice";

const getConfig = () => {
  return {
    auth: {
      username: "user",
      password: "user",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const getTodos = () => {
  return client.get<Todo[]>(`/todos/todo_list`, getConfig());
};

export const postTodos = (data: Todo) => {
  return client.post("/todos/todo_list", data, getConfig());
};
