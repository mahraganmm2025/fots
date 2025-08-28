export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  // Parse body
  const { username, password } = JSON.parse(event.body);
  if (!username || !password) {
    return { statusCode: 400, body: "Missing username or password" };
  }

  // In-memory database (later replace with file or DB)
  global.users = global.users || {};

  if (global.users[username]) {
    return { statusCode: 400, body: "Username already exists" };
  }

  global.users[username] = { password, score: 0 };

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Account created", username })
  };
}
