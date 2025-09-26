// === Globals ===
let basket, char, tree, grass;
let titleFont, title;

let fallingEmojis = [];
let lastEmojiSpawn = 0;
let score = 0;
let lives = 3;

let character = "default"; // selected character
let gameState = "title"; // title, character, character2, playing, pause, gameover

let startTime;
let countdown = 4;
let goDuration = 1;
let gameStarted = false;

// Characters
let dog, cat, angelina, tim, raul, sponge, dora, tire;
let abounaGDisplay, abounaDDisplay;
let abouna_g_game, abouna_d_game;

// === Preload ===
function preload() {
  tree = loadImage("mahraganTree.png");
  grass = loadImage("mahraganGrass.png");
  abouna_g_game_pic = loadImage("abouna_g_game.png");
  abouna_d_game_pic = loadImage("abouna_d_game.png");
  abounaDavidStanding = loadImage("abounaDavidStanding.png");
  abounaGregStanding = loadImage("abounaGregStanding.png");
  titleFont = loadFont("Assets/PressStart2P-Regular.ttf");
}

// === Setup ===
function setup() {
  createCanvas(555, 600);
  title = new Title(0, 0);
  initCharacters();
  resetGame();
}

// === Init Characters ===
function initCharacters() {
  angelina = new Angelina(5, 400);
  raul = new Raul(108, 370);
  sponge = new SpongeBob(-50, 280, 1.55);
  cat = new Cat(160, 400, 0.6);
  tim = new TimHortonsCookie(120, 370, 0.8);
  dora = new Dora(60, 420);
  tire = new CanadianTire(120, 370, 0.1);
  basket = new Basket(178, 280);
  char = new Character(0, 0);
  dog = new Dog(205, 280, 0.45);
  abouna_g_game = new Abouna(abouna_g_game_pic, 50, -120, 300, 700, 1);
  abouna_d_game = new Abouna(abouna_d_game_pic, 300, 100, 300, 400, 0.8);
  abounaDDisplay = new Abouna(abounaDavidStanding, 275, 145, 300, 380, 0.7);
  abounaGDisplay = new Abouna(abounaGregStanding, 85, 120, 225, 300, 1);
}

// === Reset Game ===
function resetGame() {
  score = 0;
  lives = 3;
  fallingEmojis = [];
  gameStarted = false;
  startTime = millis();
  countdown = 4;
  goDuration = 1; // duration of "GO!" message
}

// === Main Draw Loop ===
function draw() {
  background(107, 218, 248);

  switch (gameState) {
    case "title":
      drawTitleScreen();
      break;
    case "character":
      drawCharacterScreen();
      break;
    case "character2":
      drawCharacterScreen2();
      break;
    case "playing":
      drawGameScreen();
      break;
    case "pause":
      drawPauseScreen();
      break;
    case "gameover":
      drawGameOverScreen();
      break;
  }
}

// === Screens ===
function drawTitleScreen() {
  textAlign(CENTER, CENTER);
  textFont(titleFont);
  title.drawTitle();

  // Draw selected/default character
  drawTitleCharacter();

  // The arrow function is used to define the onClick behavior
  // width is built-in from canvas setup
  drawButton(width / 2, 505, 200, 50, "Play", () => {
    resetGame();
    gameState = "playing";
  });

  drawButton(475, 520, 100, 40, "Character", () => {
    gameState = "character";
  });
}

function drawCharacterScreen() {
  title.drawCharacterTitle();

  angelina.drawCharacter();
  drawButton(97, 320, 75, 40, "Select", () => {
    character = "angelina";
    gameState = "title";
  });

  raul.drawCharacter();
  drawButton(215, 320, 75, 40, "Select", () => {
    character = "raul";
    gameState = "title";
  });

  sponge.drawCharacter();
  drawButton(337, 320, 75, 40, "Select", () => {
    character = "sponge";
    gameState = "title";
  });

  cat.drawCharacter();
  drawButton(457, 320, 75, 40, "Select", () => {
    character = "cat";
    gameState = "title";
  });

  tim.drawCharacter();
  drawButton(97, 560, 75, 40, "Select", () => {
    character = "tim";
    gameState = "title";
  });

  dora.drawCharacter();
  drawButton(215, 560, 75, 40, "Select", () => {
    character = "dora";
    gameState = "title";
  });

  tire.drawCharacter();
  drawButton(337, 560, 75, 40, "Select", () => {
    character = "tire";
    gameState = "title";
  });

  dog.drawCharacter();
  drawButton(457, 560, 75, 40, "Select", () => {
    character = "dog";
    gameState = "title";
  });

  drawButton(width / 2, 560, 150, 40, "Abouna", () => {
    gameState = "character2";
  });
}

// === Helpers ===
function drawButton(x, y, w, h, label, onClick) {
  push();
  rectMode(CENTER);
  // Notation to pick colour based on mouse position
  fill(mouseOver(x, y, w, h) ? 150 : 200);
  rect(x, y, w, h);
  fill(0);
  textAlign(CENTER, CENTER);
  text(label, x, y);
  pop();

  // onClick is a built-in function that is called when the button is clicked
  if (mouseIsPressed && mouseOver(x, y, w, h)) onClick();
}

function mouseOver(x, y, w, h) {
  return (
    mouseX >= x - w / 2 &&
    mouseX <= x + w / 2 &&
    mouseY >= y - h / 2 &&
    mouseY <= y + h / 2
  );
}

function drawScoreAndLives() {
  push();
  fill(0);
  textFont(titleFont);
  textAlign(RIGHT, TOP);
  textSize(20);
  text("Score: " + score, width - 20, 10);
  pop();

  push();
  textSize(35);
  textFont("Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif");
  for (let i = 0; i < lives; i++) {
    text("❤️", 10 + i * 40, 50);
  }
  pop();
}

function drawCountdown() {
  let elapsed = (millis() - startTime) / 1000;
  let remaining = countdown - ceil(elapsed);

  if (remaining > 0 && remaining <= 3) {
    textSize(50);
    fill(255, 0, 0);
    text(remaining, width / 2, height / 2);
  } else if (elapsed < countdown + goDuration) {
    textSize(50);
    fill(255, 0, 0);
    text("GO!", width / 2, height / 2);
  } else {
    gameStarted = true;
  }
}

// Get emojiObj from gamescreen
function handleEmojiCatch(emojiObj) {
  const bad = ["💣", "💔", "☹️", "😡", "👎"];
  if (bad.includes(emojiObj.emoji)) {
    lives--;
    score -= emojiObj.size === 40 ? 30 : emojiObj.size === 30 ? 20 : 10;
  } else {
    score += emojiObj.size === 20 ? 30 : emojiObj.size === 30 ? 20 : 10;
  }
}

// Draw the selected character in-game
function drawSelectedCharacter() {
  switch (character) {
    case "angelina":
      angelina.draw();
      break;
    case "raul":
      raul.draw();
      break;
    case "sponge":
      sponge.draw();
      break;
    case "cat":
      cat.draw();
      break;
    case "tim":
      tim.draw();
      break;
    case "dora":
      dora.draw();
      break;
    case "tire":
      tire.draw();
      break;
    case "dog":
      dog.draw();
      break;
    case "abounaD":
      abouna_d_game.display();
      break;
    case "abounaG":
      abouna_g_game.display();
      break;
    default:
      char.draw();
      break;
  }
}

function drawTitleCharacter() {
  switch (character) {
    case "angelina":
      angelina.draw();
      break;
    case "raul":
      raul.draw();
      break;
    case "sponge":
      sponge.draw();
      break;
    case "cat":
      cat.draw();
      break;
    case "tim":
      tim.draw();
      break;
    case "tire":
      tire.draw();
      break;
    case "dog":
      dog.draw();
      break;
    case "abounaD":
      abounaDDisplay.display();
      break;
    case "abounaG":
      abounaGDisplay.display();
      break;
    default:
      dora.draw();
      break; // default character
  }
}
