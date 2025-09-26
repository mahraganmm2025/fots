let basket;
let screen = "start";
let character = "default";
let tree;
let grass;
let titleFont;
let title;
let userTable;
let fallingEmojis = [];
let lastEmojiSpawn = 0;
let score = 0;
let topScore = 0; //<---- change if you want access to abounas (500 minimum)
let char;
let dog, cat, angelina, tim, raul, sponge, dora, tire; // characters
let gameStartTimer = 0;
let abounaGDisplay;
let abounaDDisplay;
let abouna_g_game;
let abouna_d_game;
let lives = 3;

let startTime = null;
let countdown = 3;

let gameStarted = false;

function preload() {
  tree = loadImage("mahraganTree.png");
  grass = loadImage("mahraganGrass.png");
  abouna_g_game_pic = loadImage("abouna_g_game.png");
  abouna_d_game_pic = loadImage("abouna_d_game.png");
  abounaDavidStanding = loadImage("abounaDavidStanding.png");
  abounaGregStanding = loadImage("abounaGregStanding.png");
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
  tire = new CanadianTire(120, 370, 0.1);
  basket = new Basket(178, 280);
  char = new Character(0, 0);
  dog = new Dog(205, 280, 0.45);
  abouna_g_game = new Abouna(abouna_g_game_pic, 220, 240, 300, 700, 0.75);
  abouna_d_game = new Abouna(abouna_d_game_pic, 300, 100, 300, 400, 0.8);
  abounaDDisplay = new Abouna(abounaDavidStanding, 275, 120, 300, 380, 0.7);
  abounaGDisplay = new Abouna(abounaGregStanding, 85, 100, 225, 300, 1);
}

function draw() {
  background(107, 218, 248);

  if (screen == "start") {
    push();
    rectMode(CENTER);
    textAlign(CENTER);
    textFont(titleFont);

    //draw title
    title.drawTitle();

    if (topScore > 0) {
      push();
      textSize(15);
      text("Top Score: " + topScore, width / 2, 450);
      pop();
    }

    angelina = new ANGELINA_CH(5, 400);
    raul = new Raul(108, 370);
    sponge = new SpongeBob(-50, 280, 1.55);
    cat = new Cat(160, 400, 0.6);
    tim = new TimHortonsCookie(120, 370, 0.8);
    tire = new CanadianTire(120, 370, 0.1);
    dora = new Dora(60, 420);
    basket = new Basket(178, 280);
    dog = new Dog(205, 280, 0.45);
    abouna_d_game = new Abouna(abouna_d_game_pic, 290, 100, 300, 380, 0.84);
    abouna_g_game = new Abouna(abouna_g_game_pic, 220, 240, 300, 700, 0.75);

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
    push();
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
  if (screen == "pregame") {
    if (startTime === null) {
      startTime = millis();
    }

    image(tree, 0, 0, 550, 775);
    image(grass, 0, 400, 650, 200);

    //draw person
    char.draw();
    basket.draw();
    basket.ctrlChar();

    let elapsed = int((millis() - startTime) / 1000);

    push();
    fill(255, 0, 0);
    textSize(40);
    textFont(titleFont);
    textAlign(CENTER);
    if (elapsed < 3) {
      text(countdown - elapsed, width / 2, height / 2);
    } else if (elapsed < 4) {
      text("GO!", width / 2, height / 2);
    } else {
      screen = "game";
      startTime = null;
    }
    pop();
  }
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
        //print(fallingEmojis);
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

    //pause button
    push();
    fill(200);
    if (
      mouseX >= 501 &&
      mouseX <= 541 &&
      mouseY >= 10 &&
      mouseY <= 35 &&
      screen == "game"
    ) {
      fill(110);
    }

    rect(500, 8, 40, 25);

    fill(0);
    rect(513, 15, 3, 12);
    rect(523, 15, 3, 12);

    pop();

    if (lives == 0) {
      if (score > topScore) {
        topScore = score;
      }
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

    gameStarted = false;
    countdown = 3;
  }
  if (screen == "character") {
    push();
    push();
    textAlign(CENTER);
    textFont(titleFont);
    title.drawCharacterTitle();
    pop();

    push();
    //draw dora
    push();
    scale(0.8);
    textAlign(LEFT);
    translate(-160, -290);
    dora.draw();
    pop();
    //draw cat
    push();
    scale(0.5);
    translate(250, 220);
    cat.draw();
    pop();
    //draw angelina
    push();
    scale(0.7);
    translate(170, -260);
    angelina.draw();
    pop();
    //draw tim
    push();
    scale(0.5);
    translate(575, -90);
    tim.draw();
    pop();
    //draw raul
    push();
    scale(0.7);
    translate(-85, 20);
    raul.draw();
    pop();
    // draw Canadian
    push();
    translate(53, 280);
    tire.draw();
    pop();
    //draw dog
    push();
    dog.draw();
    pop();
    //draw sponge
    push();
    scale(0.8);
    translate(260, 50);
    sponge.draw();
    pop();
    pop();

    fill(50, 205, 50);
    if (
      mouseX >= 59 &&
      mouseX <= 135 &&
      mouseY >= 302 &&
      mouseY <= 341 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(59, 300, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 97, 320);

    fill(50, 205, 50);
    if (
      mouseX >= 170 &&
      mouseX <= 245 &&
      mouseY >= 302 &&
      mouseY <= 341 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(169, 300, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 207, 320);

    fill(50, 205, 50);
    if (
      mouseX >= 280 &&
      mouseX <= 356 &&
      mouseY >= 302 &&
      mouseY <= 341 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(279, 300, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 317, 320);

    fill(50, 205, 50);
    if (
      mouseX >= 391 &&
      mouseX <= 465 &&
      mouseY >= 302 &&
      mouseY <= 341 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(389, 300, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 427, 320);

    fill(50, 205, 50);
    if (
      mouseX >= 60 &&
      mouseX <= 135 &&
      mouseY >= 552 &&
      mouseY <= 591 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(59, 550, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 97, 570);

    fill(50, 205, 50);
    if (
      mouseX >= 170 &&
      mouseX <= 245 &&
      mouseY >= 552 &&
      mouseY <= 591 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(169, 550, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 207, 570);

    fill(50, 205, 50);
    if (
      mouseX >= 280 &&
      mouseX <= 355 &&
      mouseY >= 552 &&
      mouseY <= 591 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(279, 550, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 317, 570);

    fill(50, 205, 50);
    if (
      mouseX >= 390 &&
      mouseX <= 465 &&
      mouseY >= 552 &&
      mouseY <= 591 &&
      screen == "character"
    )
      fill(34, 139, 34);
    rect(389, 550, 75, 40);
    fill(0);
    textSize(10);
    text("Select", 427, 570);
    // pop();
    if (topScore >= 500) {
      fill(200);
      if (mouseX > 502 && mouseX < 541 && mouseY > 245 && mouseY < 315) {
        fill(150); // hover color
      }

      push();
      rectMode(CENTER);
      rect(520, width / 2, 40, 70);
      pop();

      fill(0);
      textSize(15);
      textAlign(CENTER, CENTER);
      text(">", 520, width / 2);
    }
    pop();
  }
  if (screen == "character2") {
    push();
    textSize(20);
    textFont(titleFont);
    // first char page button on character2 screen
    // Check hover
    if (mouseX > 16 && mouseX < 56 && mouseY > 244 && mouseY < 314) {
      fill(150); // hover color
    } else {
      fill(200); // normal color
    }
    push();
    rectMode(CENTER);
    rect(35, width / 2, 40, 70);
    pop();

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(15);
    text("<", 35, width / 2);

    // Show abounas
    abounaDDisplay.display();
    abounaGDisplay.display();

    // push();
    fill(50, 205, 50);
    if (mouseX >= 151 && mouseX <= 251 && mouseY >= 440 && mouseY <= 480)
      fill(34, 139, 34);
    rect(150, 440, 100, 40);
    fill(0);
    textSize(10);
    text("Select", 200, 460);

    fill(50, 205, 50);
    if (mouseX >= 366 && mouseX <= 466 && mouseY >= 440 && mouseY <= 480)
      fill(34, 139, 34);
    rect(365, 440, 100, 40);
    fill(0);
    textSize(10);
    text("Select", 415, 460);
    pop();
  }
  if (screen == "pause") {
    push();
    textFont(titleFont);

    push();
    textAlign(CENTER);

    textSize(40);
    fill(191, 64, 191);
    stroke(0);
    strokeWeight(3);
    text("Paused", 275, 50);
    pop();

    push();
    textAlign(CENTER);
    rectMode(CENTER);
    fill(50, 205, 50);
    if (
      mouseX >= 205 &&
      mouseX <= 347 &&
      mouseY >= 176 &&
      mouseY <= 225 &&
      screen == "pause"
    ) {
      fill(34, 139, 34);
    }
    rect(275, 200, 140, 50);
    fill(0);
    textSize(15);
    text("Resume", 275, 210);
    pop();

    push();
    textAlign(CENTER);
    rectMode(CENTER);
    fill(255, 0, 0);
    if (
      mouseX >= 205 &&
      mouseX <= 347 &&
      mouseY >= 276 &&
      mouseY <= 325 &&
      screen == "pause"
    ) {
      fill(130, 0, 0);
    }
    rect(275, 300, 140, 50);
    fill(0);
    textSize(15);
    text("Exit", 275, 310);
    pop();
    pop();
  }

  // push();
  // textFont("Arial");
  // text("(" + mouseX + ", " + mouseY + " )", mouseX, mouseY);
  // pop();
}

function mousePressed() {
  if (
    mouseX >= 178 &&
    mouseX <= 378 &&
    mouseY >= 482 &&
    mouseY <= 532 &&
    screen == "start"
  )
    screen = "pregame";

  if (
    ((mouseX >= 430 && mouseX <= 520 && mouseY >= 480 && mouseY <= 503) ||
      (mouseX >= 450 && mouseX <= 500 && mouseY >= 480 && mouseY <= 560)) &&
    screen == "start"
  )
    screen = "character";

  if (
    mouseX >= 391 &&
    mouseX <= 465 &&
    mouseY >= 302 &&
    mouseY <= 341 &&
    screen == "character"
  ) {
    character = "tim";
    screen = "start";
  }
  if (
    mouseX >= 280 &&
    mouseX <= 356 &&
    mouseY >= 302 &&
    mouseY <= 341 &&
    screen == "character"
  ) {
    character = "angelina";
    screen = "start";
  }
  if (
    mouseX >= 170 &&
    mouseX <= 245 &&
    mouseY >= 302 &&
    mouseY <= 341 &&
    screen == "character"
  ) {
    character = "cat";
    screen = "start";
  }
  if (
    mouseX >= 59 &&
    mouseX <= 135 &&
    mouseY >= 302 &&
    mouseY <= 341 &&
    screen == "character"
  ) {
    character = "default";
    screen = "start";
  }

  if (
    mouseX >= 60 &&
    mouseX <= 135 &&
    mouseY >= 552 &&
    mouseY <= 591 &&
    screen == "character"
  ) {
    character = "raul";
    screen = "start";
  }

  if (
    mouseX >= 170 &&
    mouseX <= 245 &&
    mouseY >= 552 &&
    mouseY <= 591 &&
    screen == "character"
  ) {
    character = "tire";
    screen = "start";
  }

  if (
    mouseX >= 280 &&
    mouseX <= 355 &&
    mouseY >= 552 &&
    mouseY <= 591 &&
    screen == "character"
  ) {
    character = "dog";
    screen = "start";
  }

  if (
    mouseX >= 390 &&
    mouseX <= 465 &&
    mouseY >= 552 &&
    mouseY <= 591 &&
    screen == "character"
  ) {
    character = "sponge";
    screen = "start";
  }

  // char page 1 to char page 2
  if (
    mouseX > 502 &&
    mouseX < 541 &&
    mouseY > 245 &&
    mouseY < 315 &&
    screen == "character" &&
    topScore >= 500
  ) {
    screen = "character2";
  }

  if (
    mouseX >= 151 &&
    mouseX <= 251 &&
    mouseY >= 440 &&
    mouseY <= 480 &&
    screen == "character2"
  ) {
    character = "abounaG";
    screen = "start";
  }

  if (
    mouseX >= 366 &&
    mouseX <= 466 &&
    mouseY >= 440 &&
    mouseY <= 480 &&
    screen == "character2"
  ) {
    character = "abounaD";
    screen = "start";
  }

  // char page 2 to char page 1
  if (
    mouseX > 16 &&
    mouseX < 56 &&
    mouseY > 244 &&
    mouseY < 314 &&
    screen == "character2"
  ) {
    screen = "character";
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

  if (
    mouseX >= 501 &&
    mouseX <= 541 &&
    mouseY >= 10 &&
    mouseY <= 35 &&
    screen == "game"
  ) {
    screen = "pause";
  }

  if (
    mouseX >= 205 &&
    mouseX <= 347 &&
    mouseY >= 176 &&
    mouseY <= 225 &&
    screen == "pause"
  ) {
    screen = "game";
  }

  if (
    mouseX >= 205 &&
    mouseX <= 347 &&
    mouseY >= 276 &&
    mouseY <= 325 &&
    screen == "pause"
  ) {
    screen = "start";
    lives = 3;
    score = 0;
    // gameStarted = false;
    countdown = 3;
  }
}
