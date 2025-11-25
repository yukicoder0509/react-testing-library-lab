import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import LoginForm from "./LoginForm";

// Define mockLogin globally and ensure it is used correctly
const mockLogin = vi.fn();
vi.mock("../requests/login", () => ({
  login: (username: string, password: string) => mockLogin(username, password),
}));

const mockNavigate = vi.fn();
vi.mock("react-router", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("LoginForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Should render login form correctly", () => {
    render(<LoginForm />);

    expect(screen.queryByLabelText("Username:")).toBeInTheDocument();
    expect(screen.queryByLabelText("Password:")).toBeInTheDocument();

    // assert there's a button and that its type attribute is "submit"
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });

  it("Should be able to fill the form fields", () => {
    user.setup();

    render(<LoginForm />);

    user.type(screen.getByLabelText("Username:"), "testuser");
    user.type(screen.getByLabelText("Password:"), "testpassword");

    waitFor(() => {
      expect(screen.getByLabelText("Username:")).toHaveValue("testuser");
      expect(screen.getByLabelText("Password:")).toHaveValue("testpassword");
    });
  });

  it("Should call login function on form submission", () => {
    user.setup();

    render(<LoginForm />);

    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByRole("button");

    user.type(usernameInput, "testuser");
    user.type(passwordInput, "testpassword");

    user.click(submitButton);

    waitFor(() =>
      expect(mockLogin).toHaveBeenCalledWith("testuser", "testpassword")
    );
  });

  it("Should navigate to /todos on successful login", async () => {
    // mock successful login response
    mockLogin.mockResolvedValueOnce({ token: "fake_token" });

    user.setup();

    render(<LoginForm />);

    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByRole("button");

    await user.type(usernameInput, "testuser");
    await user.type(passwordInput, "testpassword");

    await user.click(submitButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/todos");
    });
  });

  it("Should not navigate on failed login", async () => {
    // mock failed login response
    vi.spyOn(console, "error").mockImplementation(() => {});
    mockLogin.mockResolvedValueOnce({ error: "Invalid credentials" });

    user.setup();

    render(<LoginForm />);

    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByRole("button");

    await user.type(usernameInput, "wronguser");
    await user.type(passwordInput, "wrongpassword");

    await user.click(submitButton);

    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalled();
    });
  });
});
