// API spec
// POST /api/login
// Request body: { username: string, password: string }
// Response body:
//   On success (status 200): { token: string }
//   On failure (status 401): { error: string }

type LoginSuccessResponse = {
  token: string;
};

type LoginFailureResponse = {
  error: string;
};

export async function login(
  username: string,
  password: string
): Promise<LoginSuccessResponse | LoginFailureResponse> {
  // Mock implementation
  if (username == "username" && password == "password") {
    return Promise.resolve({
      token: "fake-jwt-token",
    });
  } else {
    return Promise.resolve({
      error: "Invalid username or password",
    });
  }

  // Real implementation would be something like this:
  /*
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    return res.json() as Promise<LoginFailureResponse>;
  }

  return res.json() as Promise<LoginSuccessResponse>;
*/
}
