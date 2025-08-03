function drawAngelina() {
  push()
  fill(255)
  beginShape()
  vertex(250, 123)
  vertex(200, 180)
  vertex(220, 180)
  vertex(250, 145)
  vertex(250, 123)
  endShape()

  beginShape()
  vertex(285, 130)
  vertex(330, 180)
  vertex(350, 180)
  vertex(300, 123)
  vertex(285, 130)
  endShape()

  push()
  fill(41, 28, 19)
  arc(275, 70, 80, 100, radians(180), radians(0))
  rect(235, 70, 80, 25)
  pop()

  rect(250, 50, 50, 50)
  rect(262.5, 100, 25, 15)
  // body
  arc(275, 277, 100, 335, radians(180), radians(0))
  // legs
  push()
  fill(41, 28, 19)
  rect(255, 45, 40, 10)
  pop()
  line(265, 60, 265, 70)
  line(285, 60, 285, 70)
  arc(5, 2, 6, 20, radians(0), radians(180))

  stroke(0)
  fill(0)
  text("St. Mary (in progress)", 255, 400)
  pop()
}

function drawRaul() {
  push()
  fill(255)
  ellipse(200, 250, 150, 180)
  ellipse(200, 250, 100, 120)
  ellipse(150, 100, 50, 50)
  ellipse(250, 100, 50, 50)
  ellipse(200, 120, 100, 100)
  pop()
}

class Cat {
  constructor(x, y, s = 1) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push()
    translate(this.x, this.y); // to move the whole character
    scale(this.s); // apply scale from the constructor
    push()
    fill(255)
    beginShape()
    vertex(216, 78)
    vertex(290, 42)
    vertex(288, 115)
    vertex(216, 78)
    endShape()

    beginShape()
    vertex(170, 78)
    vertex(95, 42)
    vertex(105, 123)
    vertex(170, 78)
    endShape()


    ellipse(200, 300, 150, 200)
    ellipse(200, 150, 200, 150)
    ellipse(200, 300, 100, 150)
    ellipse(280, 200, 50, 180)
    ellipse(120, 200, 50, 180)

    line(140, 150, 50, 50)

    pop()
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}
function drawCanadiantire() {
  background(220);
  fill(252, 69, 3)
  beginShape()
  vertex(100, 191)
  vertex(188, 300)
  vertex(250, 191)
  vertex(100, 191)
  endShape()

  fill(0, 255, 0)
  arc(150, 190, 30, 50, radians(180), radians(0))
  arc(200, 190, 30, 50, radians(180), radians(0))
  arc(175, 190, 30, 90, radians(180), radians(0))

  fill(255)
  textStyle(BOLD)
  text("CANADIAN", 150, 220)
  text("TIRE", 170, 235)
  fill(0)
}

class Dora {
  constructor(x, y, s = 1) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push()
    translate(this.x, this.y); // to move the whole character
    scale(this.s); // apply scale from the constructor

    fill(255)

    // left arm
    beginShape()
    vertex(225, 123)
    vertex(175, 180)
    vertex(195, 180)
    vertex(225, 145)
    vertex(225, 123)
    endShape()

    // right arm
    beginShape()
    vertex(310, 130)
    vertex(355, 180)
    vertex(375, 180)
    vertex(325, 123)
    vertex(310, 130)
    endShape()

    // hair
    push()
    fill(41, 28, 19)
    arc(275, 70, 80, 100, radians(180), radians(0))
    rect(235, 70, 80, 25)
    pop()

    push()
    // face
    rect(250, 50, 50, 50)
    // bangs
    push()
    fill(41, 28, 19)
    rect(252.5, 50, 45, 7)
    pop()
    // neck
    rect(262.5, 100, 25, 15)
    // body 
    fill(235, 110, 197)
    rect(225, 110, 100, 100)
    // shorts
    fill(224, 144, 22)
    rect(237.5, 210, 25, 25)
    rect(287.5, 210, 25, 25)
    pop()

    // legs
    rect(237.5, 235, 25, 40)
    rect(287.5, 235, 25, 40)

    // face features
    push()
    line(265, 60, 265, 70)
    line(285, 60, 285, 70)
    fill(224, 22, 190)
    arc(275, 80, 20, 20, radians(0), radians(180))
    pop()

    // name
    stroke(0)
    fill(0)
    text("Dora", 255, 175)

    pop()

    // basket
    push()
    fill(150, 126, 17)
    arc(200, 200, 150, 150, radians(0), radians(180))
    arc(200, 200, 100, 100, radians(180), radians(0))
    pop()
    push()
    fill(107, 218, 248)
    arc(200, 200, 80, 80, radians(180), radians(0))
    pop()

  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

}

function drawAlex() {
  fill(236, 240, 201)
  rect(170, 180, 70, 150)
  ellipse(200, 104, 150, 150)
  ellipse(156, 91, 20, 20)
  ellipse(241, 91, 20, 20)
  stroke(40, 41, 38)
  arc(200, 107, 80, 80, radians(0), radians(180))
  fill(0);
  text("(" + mouseX + "," + mouseY + " )", mouseX, mouseY);
}
function drawBasket() {
  arc(200, 200, 100, 100, radians(180), radians(0))
}


let emojiArray = ['🍎', '🍊', '🍓', '🍎', '🍊', '🍓', '🍋', '🍉', '🥭', '🥝', '🍌', '🫐', '💣', '💔', '☹️', '😡', '👎'];