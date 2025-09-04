// netlify/functions/signup.js
export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  const { username, password } = data;

  if (!username || !password) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Missing username or password" }),
    };
  }

  // In-memory database
  global.users = global.users || {};

  if (global.users[username]) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Username already exists" }),
    };
  }

  global.users[username] = { password, score: 0 };

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "Account created", username }),
  };
}
