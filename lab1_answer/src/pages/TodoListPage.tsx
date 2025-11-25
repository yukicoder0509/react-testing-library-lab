import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import { getTodoList } from "../requests/getTodoList";
import type { Todo } from "../types/types";

export default function TodoListPage() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [errorFetchingTodos, setErrorFetchingTodos] = useState<boolean>(false);

  useEffect(() => {
    getTodoList()
      .then((data) => {
        setTodoList(data);
        setErrorFetchingTodos(false);
      })
      .catch(() => setErrorFetchingTodos(true));
  }, []);

  return (
    <div>
      {errorFetchingTodos ? (
        <p>Error fetching todo list. Please try again later.</p>
      ) : (
        <TodoList todoList={todoList} />
      )}
    </div>
  );
}
