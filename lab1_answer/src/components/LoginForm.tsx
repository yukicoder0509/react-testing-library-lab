import "./LoginForm.module.css";
import { login } from "../requests/login";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    login(username, password).then((response) => {
      if ("token" in response) {
        console.log("Login successful, token:", response.token);
        navigate("/todos");
      } else {
        console.error("Login failed, error:", response.error);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username:</label>
      <input id="username" name="username" type="text" />

      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" />

      <button type="submit">Login</button>
    </form>
  );
}
