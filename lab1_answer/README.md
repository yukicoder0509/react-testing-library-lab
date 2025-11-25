# Example answer for lab1

## Exercise 1: Complete Login Flow

Component under test: `/src/components/LoginForm.tsx`

Test file: `/src/components/LoginForm.test.tsx`

Test cases:

1. Should render login form correctly
2. Should be able to fill the form fields
3. Should call login function on form submission
4. Should navigate to `/todos` on successful login
5. Should not navigate on failed login

Mock dependencies:

```ts
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
```

## Exercise 2: Ensure Todo List Displays Correctly

Component under test: `/src/pages/TodoListPage.tsx`

Test file: `/src/pages/TodoListPage.test.tsx`

1. Should render TodoListPage correctly
2. Should display error message on fetch failure

Mock dependencies

```ts
const mockGetTodoList = vi.fn().mockResolvedValue([]);
vi.mock("../requests/getTodoList", () => ({
  getTodoList: () => mockGetTodoList(),
}));
```
