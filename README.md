# React Testing Library Lab

This repository is designed as a practice lab to improve your frontend testing skills using **React Testing Library** and **Vitest**. It provides a hands-on environment to learn how to write robust, maintainable tests for React applications.

## 📂 Project Structure

- **`lab1/`**: The starter project. This contains the source code without the full test setup or with failing/missing tests. Use this directory to practice setting up the environment and writing tests from scratch.
- **`lab1_answer/`**: The reference solution. This directory contains the completed project with a fully configured testing environment and passing tests. Refer to this if you get stuck or want to compare your solution.

## 🛠 Technologies

- **React**: UI library
- **Vite**: Build tool and dev server
- **Vitest**: Blazing fast unit test framework
- **React Testing Library**: Testing utilities that encourage good testing practices

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yukicoder0509/react-testing-library-lab
   cd react-testing-library-lab
   ```

2. Navigate to the lab directory:

   ```bash
   cd lab1
   # or
   cd lab1_answer
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

## Running Application

To run the application that you are going to test:

```bash
pnpm dev
```

## 🧪 Running Tests

To run the tests in the `lab1_answer` directory (or `lab1` once configured):

```bash
pnpm test
```

To run tests in watch mode (default in Vitest):

```bash
pnpm test --watch
```

To run tests with coverage:

```bash
pnpm test --coverage
```

## 🎯 Learning Objectives

By working through this lab, you will learn how to:

1. **Configure Vitest**: Set up a modern testing environment for React.
2. **Component Testing**: Write unit tests for React components using `render` and `screen`.
3. **User Interaction**: Simulate user events (clicking, typing) using `@testing-library/user-event`.
4. **Mocking**:
   - Mock external modules and hooks (e.g., `react-router`, API clients).
   - Mock functions using `vi.fn()` and `vi.spyOn()`.
5. **Asynchronous Testing**: Handle async operations and state updates with `waitFor` and `findBy*`.
6. **Best Practices**: Learn to query elements by accessibility roles (`getByRole`, `getByLabelText`) rather than implementation details.

## 📝 Exercises (Lab 1)

1. **Setup**: Install `vitest`, `jsdom`, and `@testing-library/react` in `lab1`.
2. **Basic Rendering**: Write a test to verify that the `LoginForm` renders correctly.
3. **Interaction**: Test that the user can type into the username and password fields.
4. **Mocking API**: Mock the `login` request function to simulate a successful and failed login.
5. **Navigation**: Verify that the user is redirected to the Todo list upon successful login.

   Have a look at the README file in `/lab1` for more information.

Happy Testing! 🧪
