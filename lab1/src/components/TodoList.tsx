import { type Todo } from "../types/types";
import styles from "./TodoList.module.css";

export default function TodoList({ todoList }: { todoList: Todo[] }) {
  return (
    <div>
      <p>Todo List</p>
      <ul className={styles.list}>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.title}
              {todo.completed ? " [Completed]" : " [Not Completed]"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
