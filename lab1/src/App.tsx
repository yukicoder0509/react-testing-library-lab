import { Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/todos" element={<TodoListPage />} />
    </Routes>
  );
}

export default App;
