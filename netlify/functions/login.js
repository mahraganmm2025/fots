export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const { username, password } = JSON.parse(event.body);
  global.users = global.users || {};

  if (!global.users[username] || global.users[username].password !== password) {
    return { statusCode: 400, body: "Invalid username or password" };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Login successful",
      user: { username, score: global.users[username].score }
    })
  };
}
