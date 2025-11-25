import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import { getTodoList } from "../requests/getTodoList";
import type { Todo } from "../types/types";

export default function TodoListPage() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    getTodoList().then(setTodoList);
  }, []);

  return (
    <div>
      <TodoList todoList={todoList} />
    </div>
  );
}
