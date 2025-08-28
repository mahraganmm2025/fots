export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const { username, score } = JSON.parse(event.body);
  global.users = global.users || {};

  if (!global.users[username]) {
    return { statusCode: 400, body: "User not found" };
  }

  if (score > global.users[username].score) {
    global.users[username].score = score;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Score updated",
      score: global.users[username].score
    })
  };
}
