let basket;
let screen = "start";
let character = "cat";
let tree;
let grass;
let titleFont;
let title;
let usernameField, passwordField, signInBtn;
let userTable;
let fallingEmojis = [];
let lastEmojiSpawn = 0;
let score = 0;
let char;
let cat, angelina, tim, raul, sponge, dora; // characters
let scrollX = 0;
let clicked = false;
let lives = 3;
function preload() {
  tree = loadImage("mahraganTree.png");
  grass = loadImage("mahraganGrass.png");
  titleFont = loadFont("Assets/PressStart2P-Regular.ttf");
}

function setup() {
  createCanvas(555, 600);
  title = new Title(0, 0);
  angelina = new ANGELINA_CH(5, 400);
  raul = new Raul(108, 370);
  sponge = new SpongeBob(-50, 280, 1.55);
  cat = new Cat(160, 400, 0.6);
  tim = new TimHortonsCookie(120, 370, 0.8);
  dora = new Dora(60, 420);
  basket = new Basket(178, 280);
  char = new Character(0, 0);
  userTable = new p5.Table();
  userTable.addColumn("username");
  userTable.addColumn("password"); // ⚠️ plain text; see note below
  userTable.addColumn("highscore");

  // centered-ish boxes that fit canvas
  usernameField = new TextField(120, 220, 320, 44, false, titleFont);
  passwordField = new TextField(120, 340, 320, 44, true, titleFont);
  signInBtn = new Button(width / 2 - 100, 440, 200, 60, "Sign up");
}

function draw() {
  background(107, 218, 248);

  // if (screen == "title") {
  //   push();
  //   rectMode(CENTER);
  //   textAlign(CENTER);
  //   textFont(titleFont);

  //   //draw title
  //   title.drawTitle();

  //   //draw sign in button
  //   fill(50, 205, 50);
  //   if (
  //     mouseX >= 328 &&
  //     mouseX <= 428 &&
  //     mouseY >= 227 &&
  //     mouseY <= 277 &&
  //     screen == "title"
  //   ) {
  //     fill(34, 139, 34);
  //   }
  //   rect(width / 2 + 100, 250, 100, 50);
  //   fill(0);

  //   text("Sign in", width / 2 + 100, 255);

  //   //draw sign up button
  //   fill(50, 205, 50);
  //   if (
  //     mouseX >= 128 &&
  //     mouseX <= 228 &&
  //     mouseY >= 227 &&
  //     mouseY <= 277 &&
  //     screen == "title"
  //   ) {
  //     fill(34, 139, 34);
  //   }
  //   rect(width / 2 - 100, 250, 100, 50);
  //   fill(0);
  //   text("Sign up", width / 2 - 100, 255);

  //   //draw skip button
  //   fill(50, 205, 50);
  //   if (
  //     mouseX >= 228 &&
  //     mouseX <= 328 &&
  //     mouseY >= 302 &&
  //     mouseY <= 352 &&
  //     screen == "title"
  //   ) {
  //     fill(34, 139, 34);
  //   }
  //   rect(width / 2, 325, 100, 50);
  //   fill(0);
  //   text("Skip", width / 2, 330);
  //   pop();
  // }
  // if (screen == "sign up") {
  //   push();
  //   rectMode(CENTER);
  //   textAlign(CENTER);
  //   textFont(titleFont);
  //   textSize(35);
  //   fill(191, 64, 191);
  //   stroke(0);
  //   strokeWeight(2);
  //   //title
  //   text("Sign up", width / 2, 75);

  //   //username and password text
  //   strokeWeight(1);
  //   fill(191, 64, 191);
  //   noStroke();
  //   textAlign(LEFT, CENTER);
  //   textSize(38);
  //   strokeWeight(2);
  //   text("Username", 123, 190);
  //   text("Password", 123, 315);

  //   // input boxes
  //   usernameField.draw();
  //   passwordField.draw();
  //   textSize(15);
  //   signInBtn.draw();

  //   //draw back button
  //   stroke(0);
  //   strokeWeight(3);
  //   fill(153);
  //   if (
  //     mouseX >= 26 &&
  //     mouseX <= 126 &&
  //     mouseY >= 27 &&
  //     mouseY <= 77 &&
  //     screen == "sign up"
  //   )
  //     fill(100);
  //   rect(75, 50, 100, 50, 3);
  //   fill(0);
  //   strokeWeight(1);
  //   text("Back", 45, 50);
  //   pop();
  // }
  if (screen == "start") {
    push();
    rectMode(CENTER);
    textAlign(CENTER);
    textFont(titleFont);

    //draw title
    title.drawTitle();

    angelina = new ANGELINA_CH(5, 400);
    raul = new Raul(108, 370);
    sponge = new SpongeBob(-50, 280, 1.55);
    cat = new Cat(160, 400, 0.6);
    tim = new TimHortonsCookie(120, 370, 0.8);
    dora = new Dora(60, 420);
    basket = new Basket(178, 280);

    fallingEmojis = [];

    //draw play button
    fill(50, 205, 50);
    if (
      mouseX >= 178 &&
      mouseX <= 378 &&
      mouseY >= 482 &&
      mouseY <= 532 &&
      screen == "start"
    ) {
      fill(34, 139, 34);
    }
    rect(width / 2, 505, 200, 50);
    fill(0);
    text("Play", width / 2, 510);
    pop();

    //draw character button
    fill(255, 0, 0);
    if (
      ((mouseX >= 430 && mouseX <= 520 && mouseY >= 480 && mouseY <= 503) ||
        (mouseX >= 450 && mouseX <= 500 && mouseY >= 480 && mouseY <= 560)) &&
      screen == "start"
    ) {
      fill(130, 0, 0);
    }
    rect(430, 480, 90, 23);
    rect(450, 480, 50, 80);
    push();
    strokeWeight(2);
    arc(475, 481, 30, 20, radians(0), radians(180));
    pop();

    push();
    fill(0);
    textSize(15);
    textAlign(CENTER);
    textFont(titleFont);
    text("Character", 475, 585);
    pop();

    push();
    translate(0, -250);
    charDisplay();
    pop();
  }
  // if (screen == "leaderboard") {
  //   push();
  //   rectMode(CENTER);
  //   textAlign(CENTER);
  //   textFont(titleFont);
  //   title.drawLeaderboard();

  //   //draw back button
  //   stroke(0);
  //   strokeWeight(3);
  //   fill(153);
  //   if (
  //     mouseX >= 26 &&
  //     mouseX <= 126 &&
  //     mouseY >= 27 &&
  //     mouseY <= 77 &&
  //     screen == "leaderboard"
  //   )
  //     fill(100);
  //   rect(75, 50, 100, 50, 3);
  //   fill(0);
  //   strokeWeight(1);
  //   textAlign(CENTER);
  //   textSize(15);
  //   text("Back", 75, 57);
  //   pop();
  // }
  if (screen == "game") {
    image(tree, 0, 0, 550, 775);
    image(grass, 0, 400, 650, 200);

    //draw person
    char.draw();
    basket.draw();
    basket.ctrlChar();

    // Spawn falling emojis
    if (millis() - lastEmojiSpawn > random(500, 2000)) {
      fallingEmojis.push(new FallingEmoji(random(50, width - 50), -50));
      lastEmojiSpawn = millis();
    }

    // Update and draw falling emojis
    for (let i = fallingEmojis.length - 1; i >= 0; i--) {
      fallingEmojis[i].update();
      fallingEmojis[i].draw();

      // Check collision with basket
      if (fallingEmojis[i].checkCollision(basket)) {
        print(fallingEmojis);
        if (
          fallingEmojis[i].emoji == "💣" ||
          fallingEmojis[i].emoji == "💔" ||
          fallingEmojis[i].emoji == "☹️" ||
          fallingEmojis[i].emoji == "😡" ||
          fallingEmojis[i].emoji == "👎"
        ) {
          lives -= 1;
          if (fallingEmojis[i].size == 40) {
            score -= 30;
          } else if (fallingEmojis[i].size == 30) {
            score -= 20;
          } else if (fallingEmojis[i].size == 20) {
            score -= 10;
          }
        } else {
          if (fallingEmojis[i].size == 20) {
            score += 30;
          } else if (fallingEmojis[i].size == 30) {
            score += 20;
          } else if (fallingEmojis[i].size == 40) {
            score += 10;
          }
        }

        fallingEmojis.splice(i, 1);
        continue;
      }

      // Remove emojis that are off screen
      if (fallingEmojis[i].isOffScreen()) {
        fallingEmojis.splice(i, 1);
      }
    }

    // Display the score on the canvas
    push();
    fill(0);
    stroke(0);
    textSize(20);
    textAlign(RIGHT, TOP);
    textFont(titleFont);
    text("Score: " + score, 490, 10); // Display score
    pop();

    push();
    textSize(35);
    for (let i = 0; i < lives; i++) {
      text("❤️", 10 + i * 40, 50);
    }
    pop();

    //exit button
    push()
    textFont(titleFont)
    fill(255, 0, 0);
    if(mouseX >= 501 && mouseX <= 541 && mouseY >= 10 && mouseY <= 35 && screen == "game"){
      fill(130, 0, 0)
    }

    rect(500, 8, 40, 25)
    fill(0)
    textSize(20)
    text("x", 511, 30)
    pop()
    
    if (lives == 0) {
      screen = "gameover";
    }
  }
  if (screen == "gameover") {
    push();
    textAlign(CENTER);
    textSize(20);
    textFont(titleFont);
    text("Game Over", width / 2 - 20, 200);
    push();
    textSize(30);
    textFont("Arial");
    text("💔", 370, 200);
    pop();
    text("Your score was: " + score, width / 2, 250);

    fill(50, 205, 50);
    if (
      mouseX >= 225 &&
      mouseX <= 325 &&
      mouseY >= 362 &&
      mouseY <= 412 &&
      screen == "gameover"
    ) {
      fill(34, 139, 34);
    }
    rect(225, 360, 100, 50);
    fill(0);
    textSize(15);
    text("Exit", width / 2, 395);
    pop();
  }
  if (screen == "character") {
    push();
    push();
    textAlign(CENTER);
    textFont(titleFont);
    title.drawCharacterTitle();
    pop();

    push();
    translate(scrollX, 0);
    //draw dora
    push();
    scale(0.8);
    translate(-160, -150);
    dora.draw();
    pop();
    //draw cat
    push();
    scale(0.5);
    translate(250, 420);
    cat.draw();
    pop();
    //draw angelina
    push();
    scale(0.7);
    translate(170, -100);
    angelina.draw();
    pop();
    // //draw tim
    push();
    scale(0.5);
    translate(575, 105);
    tim.draw();
    pop();
    // //draw raul
    // push()
    // raul.draw()
    // pop()
    // //draw sponge
    // push()
    // sponge.draw()
    // pop()

    fill(50, 205, 50);
    if (
      mouseX >= 59 &&
      mouseX <= 135 &&
      mouseY >= 400 &&
      mouseY <= 440 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(59, 400, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 97, 425);

    fill(50, 205, 50);
    if (
      mouseX >= 169 &&
      mouseX <= 245 &&
      mouseY >= 400 &&
      mouseY <= 440 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(169, 400, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 207, 425);

    fill(50, 205, 50);
    if (
      mouseX >= 279 &&
      mouseX <= 354 &&
      mouseY >= 400 &&
      mouseY <= 440 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(279, 400, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 317, 425);

    fill(50, 205, 50);
    if (
      mouseX >= 389 &&
      mouseX <= 464 &&
      mouseY >= 400 &&
      mouseY <= 440 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(389, 400, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 427, 425);
    pop();
    pop();

    if (scrollX >= 0) {
      push();
      rectMode(CENTER);
      fill(175);
      if (mouseX >= 495 && mouseX <= 545 && mouseY >= 250 && mouseY <= 350) {
        fill(100);
      }
      noStroke();
      rect(520, height / 2, 50, 100);

      stroke(0);
      fill(0);
      strokeWeight(3);
      line(520, 290, 535, 300);
      line(520, 310, 535, 300);
      line(505, 300, 535, 300);
      pop();
    }
    if (scrollX <= -500) {
      push();
      rectMode(CENTER);
      fill(175);
      if (mouseX >= 10 && mouseX <= 60 && mouseY >= 250 && mouseY <= 350) {
        fill(100);
      }
      noStroke();
      rect(35, height / 2, 50, 100);

      stroke(0);
      fill(0);
      strokeWeight(3);
      line(20, 300, 35, 290);
      line(20, 300, 35, 310);
      line(20, 300, 50, 300);
      pop();
    }

    if (scrollX >= -500 && clicked == true) {
      moveChars1();
    }
  }

  text("(" + mouseX + ", " + mouseY + " )", mouseX, mouseY);
}

function mouseReleased() {
  if (
    mouseX >= 228 &&
    mouseX <= 328 &&
    mouseY >= 302 &&
    mouseY <= 352 &&
    screen == "title"
  )
    screen = "start";
}
function mousePressed() {
  // menu buttons (yours as-is)
  if (
    mouseX >= 328 &&
    mouseX <= 428 &&
    mouseY >= 227 &&
    mouseY <= 277 &&
    screen == "title"
  )
    screen = "sign in";
  if (
    mouseX >= 128 &&
    mouseX <= 228 &&
    mouseY >= 227 &&
    mouseY <= 277 &&
    screen == "title"
  )
    screen = "sign up";

  // if (
  //   mouseX >= 178 &&
  //   mouseX <= 378 &&
  //   mouseY >= 447 &&
  //   mouseY <= 497 &&
  //   screen == "start"
  // )
  //   screen = "leaderboard";
  if (
    mouseX >= 178 &&
    mouseX <= 378 &&
    mouseY >= 482 &&
    mouseY <= 532 &&
    screen == "start"
  )
    screen = "game";
  if (
    mouseX >= 26 &&
    mouseX <= 126 &&
    mouseY >= 27 &&
    mouseY <= 77 &&
    screen == "sign up"
  )
    screen = "title";
  if (
    mouseX >= 26 &&
    mouseX <= 126 &&
    mouseY >= 27 &&
    mouseY <= 77 &&
    screen == "leaderboard"
  )
    screen = "start";
  if (
    ((mouseX >= 430 && mouseX <= 520 && mouseY >= 480 && mouseY <= 503) ||
      (mouseX >= 450 && mouseX <= 500 && mouseY >= 480 && mouseY <= 560)) &&
    screen == "start"
  )
    screen = "character";

  if (
    mouseX >= 389 &&
    mouseX <= 464 &&
    mouseY >= 400 &&
    mouseY <= 440 &&
    screen == "character"
  ) {
    character = "tim";
    screen = "start";
  }
  if (
    mouseX >= 279 &&
    mouseX <= 354 &&
    mouseY >= 400 &&
    mouseY <= 440 &&
    screen == "character"
  ) {
    character = "angelina";
    screen = "start";
  }
  if (
    mouseX >= 169 &&
    mouseX <= 245 &&
    mouseY >= 400 &&
    mouseY <= 440 &&
    screen == "character"
  ) {
    character = "cat";
    screen = "start";
  }
  if (
    mouseX >= 59 &&
    mouseX <= 135 &&
    mouseY >= 400 &&
    mouseY <= 440 &&
    screen == "character" &&
    scrollX == 0
  ) {
    character = "default";
    screen = "start";
  }
  if (
    mouseX >= 495 &&
    mouseX <= 545 &&
    mouseY >= 250 &&
    mouseY <= 350 &&
    screen == "character" &&
    scrollX >= 0
  ) {
    clicked = true;
  }

  if (
    mouseX >= 225 &&
    mouseX <= 325 &&
    mouseY >= 362 &&
    mouseY <= 412 &&
    screen == "gameover"
  ) {
    screen = "start";
    lives = 3;
    score = 0;
  }

  if(mouseX >= 501 && mouseX <= 541 && mouseY >= 10 && mouseY <= 35 && screen == "game"){
    screen = "start"
  }
}
function keyPressed() {
  if (screen !== "sign up") return;
  if (usernameField.focused) usernameField.onSpecialKey(keyCode);
  if (passwordField.focused) passwordField.onSpecialKey(keyCode);
  if (keyCode === ENTER) submit();
  if (keyCode === TAB) {
    // simple tab toggle
    const u = usernameField.focused;
    usernameField.focused = !u;
    passwordField.focused = u;
    return false; // prevent browser tabbing
  }
}
function keyTyped() {
  if (screen !== "sign up") return;
  if (usernameField.focused) usernameField.onType(key);
  if (passwordField.focused) passwordField.onType(key);
}
class TextField {
  constructor(x, y, w, h, isPassword = false, font = null) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isPassword = isPassword;
    this.font = font;
    this.value = "";
    this.focused = false;

    this.pad = 10;
    this.textSizePx = 24;
    this.caretVisible = true;
    this.lastBlink = 0;
  }

  draw() {
    push();
    rectMode(CORNER);
    stroke(0);
    strokeWeight(3);
    fill(255);
    rect(this.x, this.y, this.w, this.h);

    noStroke();
    fill(0);
    textAlign(LEFT, CENTER);
    if (this.font) textFont(this.font);
    textSize(this.textSizePx);

    const shown = this.isPassword ? "•".repeat(this.value.length) : this.value;
    const tx = this.x + this.pad;
    const ty = this.y + this.h / 2 + 1;
    text(shown, tx, ty);

    // caret blink
    if (this.focused) {
      if (millis() - this.lastBlink > 500) {
        this.caretVisible = !this.caretVisible;
        this.lastBlink = millis();
      }
      if (this.caretVisible) {
        const tw = textWidth(shown);
        stroke(0);
        strokeWeight(2);
        line(tx + tw + 2, this.y + 6, tx + tw + 2, this.y + this.h - 6);
      }
    }
    pop();
  }

  hit(mx, my) {
    return (
      mx >= this.x &&
      mx <= this.x + this.w &&
      my >= this.y &&
      my <= this.y + this.h
    );
  }

  onType(k) {
    if (k.length !== 1) return;

    // test what the next value would look like
    const next = this.value + k;
    const shownNext = this.isPassword ? "•".repeat(next.length) : next;

    push();
    if (this.font) textFont(this.font);
    textSize(this.textSizePx);
    const innerW = this.w - this.pad * 2;
    const fits = textWidth(shownNext) <= innerW;
    pop();

    if (fits) this.value = next; // only accept if it fits
  }

  onSpecialKey(code) {
    if (code === BACKSPACE) this.value = this.value.slice(0, -1);
  }
}
class Button {
  constructor(x, y, w, h, label) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    this.normal = color(50, 205, 50);
    this.hover = color(34, 139, 34);
  }
  draw() {
    push();
    rectMode(CORNER);
    stroke(0);
    strokeWeight(3);
    fill(this.hit(mouseX, mouseY) ? this.hover : this.normal);
    rect(this.x, this.y, this.w, this.h, 8);
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.label, this.x + this.w / 2, this.y + this.h / 2 + 1);
    pop();
  }
  hit(mx, my) {
    return (
      mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h
    );
  }
}
function submit() {
  const username = usernameField.value.trim();
  const password = passwordField.value;
  const highscore = 0;

  if (!username || !password) {
    console.log("Please enter both username and password.");
    return;
  }

  // const row = userTable.addRow();
  // row.setString("username", username); // <- match lowercase
  // row.setString("password", password); // <- match lowercase
  // row.setNum("highscore", highscore); // <- match lowercase

  // console.log(typeof username);
  signup(username, password);

  // saveTable(userTable, 'users.csv');    // downloads CSV (client-side)
  screen = "start";
}
async function signup(username, password) {
  console.log("HI");
  let res = await fetch("/.netlify/functions/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  let data = await res.json();
  console.log(data);
  return data;
}
async function login(username, password) {
  let res = await fetch("/.netlify/functions/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  return await res.json();
}
async function saveScore(username, score) {
  let res = await fetch("/.netlify/functions/saveScore", {
    method: "POST",
    body: JSON.stringify({ username, score }),
  });
  return await res.json();
}
function moveChars1() {
  if (scrollX >= -500) {
    scrollX -= 25;
  }
}
function moveChars2() {
  if (scrollX <= 0) {
    scrollX += 25;
  }
}
