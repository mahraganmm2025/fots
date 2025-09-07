class ANGELINA_CH {
  constructor(x, y, s = 1) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push();
    if (screen == "game") {
      translate(this.x, this.y); // to move the whole character
    } else {
      translate(0, 400);
    }
    scale(this.s);

    fill(255);
    strokeWeight(1);
    stroke(0);
    push();
    fill(41, 28, 19);
    arc(275, 70, 80, 100, radians(180), radians(0));
    rect(235, 70, 80, 60);
    pop();

    // face
    fill(207, 157, 101);
    rect(250, 50, 50, 50);
    rect(262.5, 100, 25, 15);
    noFill();
    arc(275, 80, 20, 20, radians(0), radians(180));

    //left arm
    fill(173, 216, 230);
    rect(225, 40, 20, 150);
    stroke(207, 157, 101);
    strokeWeight(10);
    noFill();
    arc(235, 30, 30, 20, radians(10), radians(190));

    //right arm
    strokeWeight(1);
    stroke(0);
    fill(173, 216, 230);
    rect(305, 40, 20, 150);

    noFill();
    stroke(207, 157, 101);
    strokeWeight(10);
    arc(315, 30, 30, 20, radians(-10), radians(170));

    // body
    fill(173, 216, 230);
    stroke(0);
    strokeWeight(1);
    ellipse(275, 185, 100, 158);
    // legs
    push();
    fill(41, 28, 19);
    noStroke();
    rect(255, 45, 40, 10);
    pop();
    line(265, 60, 265, 70);
    line(285, 60, 285, 70);
    pop();

    pop();
  }
  move(dx) {
    if (
      (keyIsDown(LEFT_ARROW) && this.x >= -240) ||
      (mouseIsPressed && mouseX > 0 && mouseX < width / 2 && this.x >= -240)
    ) {
      this.x -= dx;
    }
    if (
      (keyIsDown(RIGHT_ARROW) && this.x <= 250) ||
      (mouseIsPressed && mouseX > width / 2 && mouseX < width && this.x <= 250)
    ) {
      this.x += dx;
    }
  }
}

class Raul {
  constructor(x, y, s = 0.85) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    if (screen == "game") {
      translate(this.x, this.y); // to move the whole character
    } else {
      translate(50, 450);
    }
    scale(this.s);
    // tail
    push();
    noFill();
    stroke(107, 80, 63);
    strokeWeight(15);
    arc(120, 265, 75, 50, radians(0), radians(270));
    pop();

    // legs
    fill(107, 80, 63);
    rect(170, 280, 20, 70, 20);
    rect(210, 280, 20, 70, 20);

    // arms
    rect(135, 70, 20, 140, 20);
    rect(245, 70, 20, 140, 20);

    // outside ears and outside bod
    strokeWeight(1);
    push();
    fill(107, 80, 63);
    ellipse(200, 230, 125, 150);
    ellipse(150, 100, 50, 50);
    ellipse(250, 100, 50, 50);
    pop();
    // inside ears and inside bod
    push();
    fill(196, 178, 167);
    ellipse(200, 230, 100, 120);
    ellipse(150, 100, 25, 25);
    ellipse(250, 100, 25, 25);
    pop();

    //   face
    push();
    fill(107, 80, 63);
    ellipse(200, 120, 100, 100);
    pop();

    // inside thing
    push();
    noStroke();
    fill(196, 178, 167);
    ellipse(185, 115, 50, 50);
    ellipse(215, 115, 50, 50);
    ellipse(200, 140, 60, 30);
    pop();

    // eyes
    push();
    fill(255);
    ellipse(180, 115, 30, 30);
    ellipse(220, 115, 30, 30);
    pop();
    push();
    fill(0);
    ellipse(180, 115, 20, 20);
    ellipse(220, 115, 20, 20);
    pop();
    push();
    fill(107, 80, 63);
    ellipse(200, 130, 10, 10);
    pop();
    push();
    fill(214, 92, 129);
    arc(200, 140, 20, 20, radians(0), radians(180));
    pop();
  }
  move(dx) {
    if (
      (keyIsDown(LEFT_ARROW) && this.x >= -140) ||
      (mouseIsPressed && mouseX > 0 && mouseX < width / 2 && this.x >= -140)
    ) {
      this.x -= dx;
    }
    if (
      (keyIsDown(RIGHT_ARROW) && this.x <= 350) ||
      (mouseIsPressed && mouseX > width / 2 && mouseX < width && this.x <= 350)
    ) {
      this.x += dx;
    }
  }
}

class Cat {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    if (screen == "game") {
      scale(0.8);
      translate(this.x + 40, this.y + 80); // to move the whole character
    } else if (screen == "character") {
      translate(15, 0);
    } else if (screen == "start") {
      translate(155, 400);
      scale(0.8);
    }

    push();
    scale(0.75);
    fill(255);

    push();
    fill(161, 156, 153);
    beginShape();
    vertex(216, 78);
    vertex(290, 42);
    vertex(288, 115);
    vertex(216, 78);
    endShape();

    beginShape();
    vertex(170, 78);
    vertex(95, 42);
    vertex(105, 123);
    vertex(170, 78);
    endShape();

    rect(140, 360, 40, 100, 10);
    rect(220, 360, 40, 100, 10);
    pop();

    push();
    fill(242, 170, 220);
    beginShape();
    vertex(108, 59);
    vertex(146, 75);
    vertex(115, 100);
    vertex(108, 59);
    endShape();

    beginShape();
    vertex(238, 74);
    vertex(278, 60);
    vertex(277, 93);
    vertex(238, 74);
    endShape();
    ellipse(200, 150, 200, 150);
    pop();

    push();
    fill(161, 156, 153);
    ellipse(200, 300, 150, 200);
    ellipse(200, 150, 200, 150);
    push();
    fill(255);
    ellipse(200, 300, 100, 150);
    pop();
    ellipse(280, 200, 50, 180);
    ellipse(120, 200, 50, 180);
    pop();

    ellipse(160, 130, 40, 40);
    ellipse(240, 130, 40, 40);

    push();
    fill(0);
    ellipse(160, 130, 25, 25);
    ellipse(240, 130, 25, 25);
    pop();

    fill(161, 156, 153);
    arc(194, 166, 20, 30, radians(0), radians(180));
    arc(215, 166, 20, 30, radians(0), radians(180));

    push();
    fill(242, 170, 220);
    ellipse(205, 164, 10, 5);
    pop();

    pop();
  }
  move(dx) {
    if (
      (keyIsDown(LEFT_ARROW) && this.x >= -150) ||
      (mouseIsPressed && mouseX > 0 && mouseX < width / 2 && this.x >= -150)
    ) {
      this.x -= dx;
    }
    if (
      (keyIsDown(RIGHT_ARROW) && this.x <= 460) ||
      (mouseIsPressed && mouseX > width / 2 && mouseX < width && this.x <= 460)
    ) {
      this.x += dx;
    }
  }
}

class CanadianTire {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  draw() {
    if (screen == "game") {
      scale(0.8);
      translate(this.x + 40, this.y + 80); // to move the whole character
    } else if (screen == "character") {
      translate(15, 0);
      scale(0.8);
    } else if (screen == "start") {
      translate(155, 400);
      scale(0.8);
    }

    // legs
    fill(0);
    rect(150, 260, 15, 60);
    rect(185, 260, 15, 60);

    // arms
    rect(120, 130, 15, 90);
    rect(215, 130, 15, 90);

    fill(237, 120, 52);
    beginShape();
    vertex(100, 191);
    vertex(175, 300);
    vertex(250, 191);
    vertex(100, 191);
    endShape();

    fill(0, 255, 0);
    arc(150, 190, 30, 50, radians(180), radians(0));
    arc(200, 190, 30, 50, radians(180), radians(0));
    arc(175, 190, 30, 90, radians(180), radians(0));

    fill(255);
    textStyle(BOLD);
    textFont(titleFont);
    textAlign(CENTER);
    text("CANADIAN", 175, 220);
    text("TIRED", 175, 235);
    fill(0);
  }
  move(dx) {
    if (
      (keyIsDown(LEFT_ARROW) && this.x >= -137) ||
      (mouseIsPressed && mouseX > 0 && mouseX < width / 2 && this.x >= -137)
    ) {
      this.x -= dx;
    }
    if (
      (keyIsDown(RIGHT_ARROW) && this.x <= 375) ||
      (mouseIsPressed && mouseX > width / 2 && mouseX < width && this.x <= 375)
    ) {
      this.x += dx;
    }
  }
}

class TimHortonsCookie {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push();
    translate(this.x, this.y); // to move the whole character
    scale(this.s); // apply scale from the constructor
    fill(230, 166, 103);
    ellipse(200, 200, 300);

    push();
    fill(230, 166, 103);
    ellipse(200, 200, 300);

    fill(33, 22, 12);
    ellipse(200, 200, 50);
    ellipse(300, 200, 30);
    ellipse(240, 140, 30);
    ellipse(100, 130, 40);
    ellipse(100, 250, 65);
    ellipse(157, 111, 30);
    ellipse(210, 300, 70);
    rect(270, 250, 40);
    rect(120, 170, 45);
    rect(244, 80, 25);
    textSize(20);
    pop();
    fill(179, 21, 139);

    ellipse(122, 149, 60, 60);
    ellipse(275, 145, 60, 60);

    push();

    strokeWeight(25);
    stroke(16, 139, 232);
    noFill();
    arc(198, 240, 200, 100, radians(0), radians(180));
    pop();

    pop();
  }

  move(dx) {
    if (
      (keyIsDown(LEFT_ARROW) && this.x >= -128) ||
      (mouseIsPressed && mouseX > 0 && mouseX < width / 2 && this.x >= -128)
    ) {
      this.x -= dx;
    }
    if (
      (keyIsDown(RIGHT_ARROW) && this.x <= 360) ||
      (mouseIsPressed && mouseX > width / 2 && mouseX < width && this.x <= 360)
    ) {
      this.x += dx;
    }
  }
}

class Dora {
  constructor(x, y, s = 0.8) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push();
    if (screen == "game") {
      translate(this.x, this.y); // to move the whole character
    } else {
      translate(60, 425);
    }
    scale(this.s); // apply scale from the constructor

    fill(207, 179, 130);

    // left arm
    beginShape();
    vertex(225, 123);
    vertex(225, 0);
    vertex(242, 0);
    vertex(242, 123);
    vertex(225, 123);
    endShape();

    // right arm
    beginShape();
    vertex(307, 130);
    vertex(307, 0);
    vertex(325, 0);
    vertex(325, 123);
    vertex(305, 130);
    endShape();

    // hair
    push();
    fill(41, 28, 19);
    arc(275, 70, 80, 100, radians(180), radians(0));
    rect(235, 70, 80, 25);
    pop();

    push();
    // face
    rect(250, 50, 50, 50);
    // bangs
    push();
    fill(41, 28, 19);
    rect(252.5, 50, 45, 7);
    pop();
    // neck
    rect(262.5, 100, 25, 15);
    // body
    fill(235, 110, 197);
    rect(225, 110, 100, 100);
    // shorts
    fill(224, 144, 22);
    rect(237.5, 210, 25, 25);
    rect(287.5, 210, 25, 25);
    pop();

    // legs
    rect(237.5, 235, 25, 40);
    rect(287.5, 235, 25, 40);

    // face features
    push();
    line(265, 60, 265, 70);
    line(285, 60, 285, 70);
    fill(224, 22, 190);
    arc(275, 80, 20, 20, radians(0), radians(180));
    pop();

    // name
    stroke(0);
    fill(0);
    textFont(titleFont);
    text("Dora", 250, 175);
    pop();
  }

  move(dx) {
    if (
      (keyIsDown(LEFT_ARROW) && this.x >= -188) ||
      (mouseIsPressed && mouseX > 0 && mouseX < width / 2 && this.x >= -188)
    ) {
      this.x -= dx;
    }
    if (
      (keyIsDown(RIGHT_ARROW) && this.x <= 300) ||
      (mouseIsPressed && mouseX > width / 2 && mouseX < width && this.x <= 300)
    ) {
      this.x += dx;
    }
    if (screen == "gameover") {
      this.x = 0;
    }
  }
}

class Basket {
  constructor(x, y, s = 0.5) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push();
    push();
    translate(this.x, this.y); // to move the whole character
    scale(this.s);
    noStroke();
    //outer basket
    fill(99, 70, 51);
    rect(100, 200, 200, 75);
    arc(200, 275, 200, 100, radians(0), radians(180));

    //inner basket/rim
    fill(56, 41, 31);
    stroke(84, 60, 44);
    strokeWeight(13);
    ellipse(200, 200, 200, 30);

    //handle
    noFill();
    stroke(89, 67, 52);
    strokeWeight(8);

    push();
    rotate(-0.5);
    arc(6, 230, 25, 100, radians(180), radians(-45));
    pop();

    push();
    rotate(0.5);
    arc(345, 40, 25, 100, radians(216), radians(-10));
    pop();

    //basket lining
    strokeWeight(1);
    stroke(84, 60, 45);
    noFill();
    arc(200, 210, 199, 35, radians(0), radians(180));
    arc(200, 225, 199, 40, radians(0), radians(180));
    arc(200, 240, 199, 45, radians(0), radians(180));
    arc(200, 255, 199, 50, radians(0), radians(180));
    arc(200, 270, 199, 55, radians(0), radians(180));
    arc(200, 285, 192, 60, radians(5), radians(175));
    pop();
  }

  move(dx) {
    if (
      (keyIsDown(LEFT_ARROW) && this.x >= -70) ||
      (mouseIsPressed && mouseX > 0 && mouseX < width / 2 && this.x >= -70)
    ) {
      this.x -= dx;
    }
    if (
      (keyIsDown(RIGHT_ARROW) && this.x <= 420) ||
      (mouseIsPressed && mouseX > width / 2 && mouseX < width && this.x <= 420)
    ) {
      this.x += dx;
    }
  }
  ctrlChar() {
    this.move(10);
  }
}

class Title {
  timer = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  drawLeaderboard() {
    this.timer++;
    push();
    translate(this.x, this.y); // to move the whole character
    textAlign(CENTER);
    textFont(titleFont);
    textSize(25);
    fill(191, 64, 191);
    stroke(0);
    strokeWeight(2);

    if (this.timer < 60) {
      this.y += 0.5;
    }
    if (this.timer >= 60 && this.timer < 120) {
      this.y -= 0.5;
    }
    if (this.timer >= 120) {
      this.timer = 0;
    }
    if (this.y < 0) {
      this.y = 0;
    }

    text("Leaderboard", width / 2, 100);
    pop();
  }
  drawTitle() {
    this.timer++;
    push();
    translate(this.x, this.y); // to move the whole character
    textAlign(CENTER);
    textFont(titleFont);
    textSize(25);
    fill(191, 64, 191);
    stroke(0);
    strokeWeight(2);

    if (this.timer < 60) {
      this.y += 0.5;
    }
    if (this.timer >= 60 && this.timer < 120) {
      this.y -= 0.5;
    }
    if (this.timer >= 120) {
      this.timer = 0;
    }
    if (this.y < 0) {
      this.y = 0;
    }

    text("Fruits of the Spirit", width / 2, 100);
    pop();
  }
  drawCharacterTitle() {
    this.timer++;
    push();
    translate(this.x, this.y); // to move the whole character
    textAlign(CENTER);
    textFont(titleFont);
    textSize(25);
    fill(191, 64, 191);
    stroke(0);
    strokeWeight(2);

    if (this.timer < 60) {
      this.y += 0.5;
    }
    if (this.timer >= 60 && this.timer < 120) {
      this.y -= 0.5;
    }
    if (this.timer >= 120) {
      this.timer = 0;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    text("Choose your character", width / 2, 70);
  }
}

let emojiArray = [
  "🍎",
  "🍊",
  "🍓",
  "🍋",
  "🍉",
  "🥭",
  "🥝",
  "🍌",
  "🫐",
  "💣",
  "💔",
  "☹️",
  "😡",
  "👎",
  "💣",
  "😡",
];

class SpongeBob {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  drawSponge() {
    //armRight
    push();
    translate(this.x, this.y); // to move the whole character
    scale(this.s);

    //body
    fill(255, 244, 99, 255);
    beginShape();
    vertex(248, 100); //1
    vertex(180, 100); //2
    vertex(165, 115); //3
    vertex(175, 168); //4
    vertex(190, 170); //5
    vertex(245, 170); //6
    vertex(248, 100); //7
    endShape();
    line(180, 100, 190, 170);

    //shirt
    fill(255);
    rect(190, 170, 55, 10);
    beginShape();
    vertex(190, 180);
    vertex(176, 178);
    vertex(175, 168);
    vertex(190, 170);
    endShape();

    //legs
    fill(255, 244, 99, 255);
    rect(195, 193, 5, 15);
    rect(225, 193, 5, 15);
    fill(255);
    //socks
    rect(195, 208, 5, 10);
    rect(225, 208, 5, 10);
    //pants things
    fill(173, 91, 40);
    ellipse(197, 193, 20, 10);
    ellipse(227, 193, 20, 10);
    //shoes
    fill(0);
    ellipse(230, 220, 14, 7);
    ellipse(200, 220, 14, 7);
    fill(173, 91, 40);

    //pants
    rect(190, 180, 55, 11);
    beginShape();
    vertex(190, 180);
    vertex(176, 178);
    vertex(176, 189);
    vertex(190, 191);
    endShape();

    //sleeveLeft
    push();
    rotate(0.1);
    fill(255, 244, 99, 255);
    rect(190, 70, 5, 75, 3);
    pop();
    fill(255);
    arc(175, 160, 13, 25, radians(0), radians(180));
    arc(175, 160, 13, 3, radians(180), radians(0));

    //eyes
    fill(255);
    ellipse(227, 125, 23);
    ellipse(207, 125, 23);
    fill(60, 183, 226);
    ellipse(225, 125, 8);
    ellipse(210, 125, 8);
    fill(0);
    ellipse(225, 125, 3);
    ellipse(210, 125, 3);
    push();
    strokeWeight(2);
    line(200, 115, 199, 112);
    line(206, 113, 206, 110);
    line(212, 114, 213, 111.5);

    line(220, 115, 219, 112);
    line(226, 113, 226, 110);
    line(232, 114, 233, 111.5);
    pop();

    //nose
    fill(255, 244, 99, 255);
    arc(216, 136, 25, 6, radians(270), radians(90));

    //mouth
    fill(255);
    rect(220, 149, 5);
    rect(211.5, 149, 5);
    fill(255, 244, 99, 255);
    arc(217, 140, 40, 20, radians(0), radians(180));
    arc(197, 139, 7, 5, radians(0), radians(180));
    arc(237, 139, 7, 5, radians(0), radians(180));

    //belt
    fill(0);
    rect(210, 182, 15, 2);
    rect(230, 182, 10, 2);
    rect(195, 182, 10, 2);
    beginShape();
    vertex(187, 182);
    vertex(180, 180.75);
    vertex(180, 182.75);
    vertex(187, 184);
    vertex(187, 182);
    endShape();

    //collar and tie
    fill(255);
    beginShape();
    vertex(215, 170);
    vertex(210, 175);
    vertex(202, 170);
    vertex(215, 170);
    endShape();

    beginShape();
    vertex(232, 170);
    vertex(225, 175);
    vertex(220, 170);
    vertex(230, 170);
    endShape();

    fill(250, 0, 0);
    push();
    strokeWeight(0.5);
    beginShape();
    vertex(217.5, 172);
    vertex(213.5, 182);
    vertex(217.5, 187);
    vertex(221.5, 182);
    vertex(217.5, 172);
    endShape();

    ellipse(217.5, 172, 6);
    pop();
    push();
    push();
    rotate(-0.1);
    stroke(0);
    fill(255, 244, 99, 255);
    strokeWeight(1);
    rect(228, 113, 5, 81, 3);
    pop();

    fill(255);
    stroke(1);
    strokeWeight(1);
    arc(245, 163, 13, 25, radians(0), radians(90));
    arc(245, 163, 13, 3, radians(270), radians(0));
    pop();
    pop();
  }
  draw() {
    //armRight
    push();
    translate(this.x, this.y); // to move the whole character
    scale(this.s);
    stroke(255, 244, 99, 255);
    strokeWeight(5);
    line(246, 170, 250, 195);

    fill(255);
    stroke(1);
    strokeWeight(1);
    arc(245, 170, 13, 25, radians(180), radians(0));
    arc(245, 170, 13, 3, radians(0), radians(180));

    //body
    fill(255, 244, 99, 255);
    beginShape();
    vertex(248, 100); //1
    vertex(180, 100); //2
    vertex(165, 115); //3
    vertex(175, 168); //4
    vertex(190, 170); //5
    vertex(245, 170); //6
    vertex(248, 100); //7
    endShape();
    line(180, 100, 190, 170);

    //shirt
    fill(255);
    rect(190, 170, 55, 10);
    beginShape();
    vertex(190, 180);
    vertex(176, 178);
    vertex(175, 168);
    vertex(190, 170);
    endShape();

    //legs
    fill(255, 244, 99, 255);
    rect(195, 193, 5, 15);
    rect(225, 193, 5, 15);
    fill(255);
    //socks
    rect(195, 208, 5, 10);
    rect(225, 208, 5, 10);
    //pants things
    fill(173, 91, 40);
    ellipse(197, 193, 20, 10);
    ellipse(227, 193, 20, 10);
    //shoes
    fill(0);
    ellipse(230, 220, 14, 7);
    ellipse(200, 220, 14, 7);
    fill(173, 91, 40);

    //pants
    rect(190, 180, 55, 11);
    beginShape();
    vertex(190, 180);
    vertex(176, 178);
    vertex(176, 189);
    vertex(190, 191);
    endShape();

    //sleeveLeft
    fill(255);
    push();
    stroke(255, 244, 99, 255);
    strokeWeight(5);
    line(174, 170, 170, 195);
    pop();
    arc(175, 170, 13, 25, radians(180), radians(0));
    arc(175, 170, 13, 3, radians(0), radians(180));

    //eyes
    fill(255);
    ellipse(227, 125, 23);
    ellipse(207, 125, 23);
    fill(60, 183, 226);
    ellipse(225, 125, 8);
    ellipse(210, 125, 8);
    fill(0);
    ellipse(225, 125, 3);
    ellipse(210, 125, 3);
    push();
    strokeWeight(2);
    line(200, 115, 199, 112);
    line(206, 113, 206, 110);
    line(212, 114, 213, 111.5);

    line(220, 115, 219, 112);
    line(226, 113, 226, 110);
    line(232, 114, 233, 111.5);
    pop();

    //nose
    fill(255, 244, 99, 255);
    arc(216, 136, 25, 6, radians(270), radians(90));

    //mouth
    fill(255);
    rect(220, 149, 5);
    rect(211.5, 149, 5);
    fill(255, 244, 99, 255);
    arc(217, 140, 40, 20, radians(0), radians(180));
    arc(197, 139, 7, 5, radians(0), radians(180));
    arc(237, 139, 7, 5, radians(0), radians(180));

    //belt
    fill(0);
    rect(210, 182, 15, 2);
    rect(230, 182, 10, 2);
    rect(195, 182, 10, 2);
    beginShape();
    vertex(187, 182);
    vertex(180, 180.75);
    vertex(180, 182.75);
    vertex(187, 184);
    vertex(187, 182);
    endShape();

    //collar and tie
    fill(255);
    beginShape();
    vertex(215, 170);
    vertex(210, 175);
    vertex(202, 170);
    vertex(215, 170);
    endShape();

    beginShape();
    vertex(232, 170);
    vertex(225, 175);
    vertex(220, 170);
    vertex(230, 170);
    endShape();

    fill(250, 0, 0);
    push();
    strokeWeight(0.5);
    beginShape();
    vertex(217.5, 172);
    vertex(213.5, 182);
    vertex(217.5, 187);
    vertex(221.5, 182);
    vertex(217.5, 172);
    endShape();

    ellipse(217.5, 172, 6);
    pop();
  }
  move(dx) {
    if (
      (keyIsDown(LEFT_ARROW) && this.x >= -298) ||
      (mouseIsPressed && mouseX > 0 && mouseX < width / 2 && this.x >= -298)
    ) {
      this.x -= dx;
    }
    if (
      (keyIsDown(RIGHT_ARROW) && this.x <= 190) ||
      (mouseIsPressed && mouseX > width / 2 && mouseX < width && this.x <= 190)
    ) {
      this.x += dx;
    }
  }
}

class Dog {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push();
    translate(this.x, this.y); // to move the whole character
    scale(this.s);
    //back legs
    noStroke();
    fill(230, 211, 174);
    rect(190, 420, 50, 140, 20);
    rect(260, 420, 50, 140, 20);

    //back paws
    fill(212, 194, 159);
    noStroke();
    strokeWeight(1);
    ellipse(215, 560, 60, 20);
    ellipse(285, 560, 60, 20);

    // body
    fill(245, 229, 198);
    ellipse(250, 400, 180, 240);

    //collar
    strokeWeight(10);
    stroke(255, 0, 0);
    noFill();
    arc(250, 300, 90, 20, 0, PI);

    // head
    fill(245, 229, 198);
    noStroke();
    ellipse(250, 240, 150, 130);

    // ears
    fill(222, 186, 140);
    ellipse(180, 240, 40, 80);
    ellipse(320, 240, 40, 80);

    // muzzle
    fill(230, 210, 180);
    ellipse(250, 270, 100, 50);

    // nose
    fill(60);
    ellipse(250, 260, 30, 20);

    // tongue
    fill(245, 110, 130);
    ellipse(250, 280, 30, 20);

    // mouth
    stroke(60);
    strokeWeight(3);
    fill(230, 210, 180);
    arc(232, 270, 35, 25, 0, PI);
    arc(268, 270, 35, 25, 0, PI);
    noStroke();

    // eyes (always open)
    fill(30);
    ellipse(230, 230, 15, 15);
    ellipse(270, 230, 15, 15);
    fill(255);
    ellipse(234, 226, 5, 5);
    ellipse(274, 226, 5, 5);

    //front legs
    fill(230, 211, 174);
    rect(175, 190, 30, 170, 20);
    rect(295, 190, 30, 170, 20);

    //front paws
    fill(212, 194, 159);
    noStroke();
    strokeWeight(1);
    ellipse(193, 190, 50, 40);
    ellipse(307, 190, 50, 40);

    //palms
    fill(0);
    ellipse(193, 195, 25, 17);
    ellipse(307, 195, 25, 17);

    //fingers?
    ellipse(180, 185, 7);
    ellipse(188, 180, 7);
    ellipse(198, 180, 7);
    ellipse(206, 185, 7);

    ellipse(295, 185, 7);
    ellipse(303, 180, 7);
    ellipse(313, 180, 7);
    ellipse(321, 185, 7);
    pop();
  }
  move(dx) {
    if (
      (keyIsDown(LEFT_ARROW) && this.x >= 30) ||
      (mouseIsPressed && mouseX > 0 && mouseX < width / 2 && this.x >= 30)
    ) {
      this.x -= dx;
    }
    if (
      (keyIsDown(RIGHT_ARROW) && this.x <= 380) ||
      (mouseIsPressed && mouseX > width / 2 && mouseX < width && this.x <= 380)
    ) {
      this.x += dx;
    }
  }
}

class FallingEmoji {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.emoji = random(emojiArray);
    this.speed = random(1, 5); // Different falling speeds
    // Define allowed sizes and select one randomly
    const sizes = [20, 30, 40]; // Only three different sizes
    this.size = random(sizes); // Selects a size from the sizes array
  }

  draw() {
    push();
    stroke(255, 0, 0);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text(this.emoji, this.x, this.y);
    if (this.emoji == "🍎") {
      text("Love", this.x, this.y - 30);
    } else if (this.emoji == "🍊") {
      text("Joy", this.x, this.y - 30);
    } else if (this.emoji == "🍓") {
      text("Peace", this.x, this.y - 30);
    } else if (this.emoji == "🍋") {
      text("Patience", this.x, this.y - 30);
    } else if (this.emoji == "🍉") {
      text("Kindness", this.x, this.y - 30);
    } else if (this.emoji == "🥭") {
      text("Goodness", this.x, this.y - 30);
    } else if (this.emoji == "🥝") {
      text("Faithfulness", this.x, this.y - 30);
    } else if (this.emoji == "🍌") {
      text("Gentleness", this.x, this.y - 30);
    } else if (this.emoji == "🫐") {
      text("Self Control", this.x, this.y - 30);
    }
    pop();
  }

  update() {
    this.y += this.speed;
  }

  isOffScreen() {
    return this.y > height + this.size;
  }

  checkCollision(basket) {
    // Calculate basket boundaries (accounting for scale and translation)
    const basketLeft = basket.x + 100 * basket.s;
    const basketRight = basket.x + 300 * basket.s;
    const basketTop = basket.y + 200 * basket.s - 10;
    const basketBottom = basket.y + 275 * basket.s;

    // Check if emoji is horizontally within basket bounds
    const withinHorizontalBounds = this.x > basketLeft && this.x < basketRight;

    // Check if emoji is just crossing the top edge of the basket (coming from above)
    const crossingTopEdge =
      this.y >= basketTop && this.y <= basketTop + this.size / 2;

    // Only count as collision if falling from above into the basket opening
    return withinHorizontalBounds && crossingTopEdge && this.speed > 0;
  }
}

class Character {
  constructor(x, y, s = 1) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push();
    if (character == "default") {
      dora.draw();
      dora.move(10);
    } else if (character == "sponge") {
      sponge.drawSponge();
      sponge.move(10);
    } else if (character == "cat") {
      cat.draw();
      cat.move(12.5);
    } else if (character == "angelina") {
      angelina.draw();
      angelina.move(10);
    } else if (character == "tim") {
      tim.draw();
      tim.move(10);
    } else if (character == "raul") {
      raul.draw();
      raul.move(10);
    } else if (character == "dog") {
      push();
      scale(1.4);
      translate(-119, -50);
      dog.draw();
      dog.move(7.2);
      pop();
    } else if (character == "tire") {
      push();
      scale(1.2);
      translate(-35, -110);
      tire.draw();
      tire.move(10.4);
      pop();
    }

    pop();
  }
}

function charDisplay() {
  if (character == "default") {
    dora.draw();
  } else if (character == "sponge") {
    push();
    translate(0, 50);
    sponge.draw();
    pop();
  } else if (character == "cat") {
    cat.draw();
  } else if (character == "angelina") {
    angelina.draw();
  } else if (character == "tim") {
    tim.draw();
  } else if (character == "tire") {
    push();
    scale(1.2);
    translate(-65, -100);
    textFont(titleFont);
    textAlign(CENTER);
    tire.draw();
    pop();
  } else if (character == "raul") {
    push();
    translate(60, -80);
    raul.draw();
    pop();
  } else if (character == "dog") {
    push();
    scale(1.3);
    translate(-105, -20);
    dog.draw();
    pop();
  }
}
