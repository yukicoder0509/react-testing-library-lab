import { type Todo } from "../types/types";

export async function getTodoList(): Promise<Todo[]> {
  // Mock implementation
  return Promise.resolve([
    { id: 1, title: "Learn TypeScript", completed: false },
    { id: 2, title: "Build a React App", completed: true },
  ]);

  // Real implementation would be something like this:
  /*
  const res = await fetch("/api/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch todo list");
  }

  return res.json() as Promise<Todo[]>;
  */
}
