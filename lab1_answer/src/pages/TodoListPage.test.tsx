import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import TodoListPage from "./TodoListPage";
import type { Todo } from "../types/types";

const mockGetTodoList = vi.fn().mockResolvedValue([]);
vi.mock("../requests/getTodoList", () => ({
  getTodoList: () => mockGetTodoList(),
}));

describe("TodoListPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Should render TodoListPage correctly", () => {
    render(<TodoListPage />);

    const todoList: Todo[] = [
      { id: 1, title: "Test Todo 1", completed: false },
      { id: 2, title: "Test Todo 2", completed: true },
    ];
    mockGetTodoList.mockResolvedValueOnce(todoList);

    waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
      expect(screen.getByRole("list")).toBeInTheDocument();
      expect(screen.getAllByRole("listitem")).toHaveLength(2);
      expect(
        screen.getByText("Test Todo 1 [Not Completed]")
      ).toBeInTheDocument();
      expect(screen.getByText("Test Todo 2 [Completed]")).toBeInTheDocument();
    });
  });

  it("Should display error message on fetch failure", async () => {
    mockGetTodoList.mockRejectedValueOnce(new Error("Fetch error"));

    render(<TodoListPage />);

    waitFor(() => {
      expect(
        screen.getByText("Error fetching todo list. Please try again later.")
      ).toBeInTheDocument();
    });
  });
});
