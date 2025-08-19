class ANGELINA_CH {
  constructor(x, y, s = 1) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push()

    translate(this.x, this.y); // to move the whole character
    scale(this.s);

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
    // arc(275, 277, 100, 335, radians(180), radians(0))
    ellipse(275, 185, 100, 158)
    // legs
    push()
    fill(41, 28, 19)
    rect(255, 45, 40, 10)
    pop()
    line(265, 60, 265, 70)
    line(285, 60, 285, 70)

    stroke(0)
    fill(0)
    text("St. Mary (in progress)", 255, 400)
    pop()

    pop()
  }
  move(dx) {
    if (keyIsDown(LEFT_ARROW) && this.x >= -140) {
      this.x -= dx
    }
    if (keyIsDown(RIGHT_ARROW) && this.x <= 370) {
      this.x += dx
    }
  }
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

class TimHortonsCookie {
  constructor(x, y, s = 1) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push()
    translate(this.x, this.y); // to move the whole character
    scale(this.s); // apply scale from the constructor
    fill(230, 166, 103)
    ellipse(200, 200, 300)

    fill(33, 22, 12)
    ellipse(200, 200, 50)
    ellipse(300, 200, 30)
    ellipse(240, 140, 30)
    ellipse(100, 130, 40)
    ellipse(100, 250, 65)
    ellipse(157, 111, 30)
    ellipse(210, 300, 70)
    rect(270, 250, 40)
    rect(120, 170, 45)
    rect(244, 80, 25)
    textSize(20);
    pop()
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

class Dora {
  constructor(x, y, s = 0.8) {
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
    vertex(225, 0)
    vertex(242, 0)
    vertex(242, 123)
    vertex(225, 123)
    endShape()

    // right arm
    beginShape()
    vertex(307, 130)
    vertex(307, 0)
    vertex(325, 0)
    vertex(325, 123)
    vertex(305, 130)
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
  }

  move(dx) {
    if (keyIsDown(LEFT_ARROW) && this.x >= -188) {
      this.x -= dx
    }
    if (keyIsDown(RIGHT_ARROW) && this.x <= 300) {
      this.x += dx
    }
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

class Basket {
  constructor(x, y, s = 0.5) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push()
    translate(this.x, this.y); // to move the whole character
    scale(this.s);
    noStroke()
    //outer basket
    fill(99, 70, 51)
    rect(100, 200, 200, 75)
    arc(200, 275, 200, 100, radians(0), radians(180))


    //inner basket/rim
    fill(56, 41, 31)
    stroke(84, 60, 44)
    strokeWeight(13)
    ellipse(200, 200, 200, 30)

    //handle
    noFill()
    stroke(89, 67, 52)
    strokeWeight(8)

    push()
    rotate(-0.5)
    arc(6, 230, 25, 100, radians(180), radians(-45))
    pop()


    push()
    rotate(0.5)
    arc(345, 40, 25, 100, radians(216), radians(-10))
    pop()

    //basket lining
    strokeWeight(1)
    stroke(84, 60, 45)
    noFill()
    arc(200, 210, 199, 35, radians(0), radians(180))
    arc(200, 225, 199, 40, radians(0), radians(180))
    arc(200, 240, 199, 45, radians(0), radians(180))
    arc(200, 255, 199, 50, radians(0), radians(180))
    arc(200, 270, 199, 55, radians(0), radians(180))
    arc(200, 285, 192, 60, radians(5), radians(175))
  }

  move(dx) {
    if (keyIsDown(LEFT_ARROW) && this.x >= -70) {
      this.x -= dx
    }
    if (keyIsDown(RIGHT_ARROW) && this.x <= 420) {
      this.x += dx
    }
  }
  ctrlChar() {
    this.move(10);
  }

}

class Title {
  timer = 0
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    this.timer++
    push()
    translate(this.x, this.y); // to move the whole character
    textAlign(CENTER)
    textFont(titleFont)
    textSize(25)
    fill(191, 64, 191)
    stroke(0)
    strokeWeight(2)

    if (this.timer < 60) {
      this.y += 0.5
    }
    if (this.timer >= 60 && this.timer < 120) {
      this.y -= 0.5
    }
    if (this.timer >= 120) {
      this.timer = 0
    }
    if (this.y < 0) {
      this.y = 0
    }

    text("Fruits of the Spirit", width / 2, 100)
    pop()
  }
}
let emojiArray = ['🍎', '🍊', '🍓', '🍎', '🍊', '🍓', '🍋', '🍉', '🥭', '🥝', '🍌', '🫐', '💣', '💔', '☹️', '😡', '👎'];

class FallingEmoji {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.emoji = random(emojiArray);
    this.speed = random(1, 5); // Different falling speeds
    this.size = random(20, 40);
  }
  
  draw() {
    push();
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text(this.emoji, this.x, this.y);
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
    const basketLeft = basket.x + (100 * basket.s);
    const basketRight = basket.x + (300 * basket.s);
    const basketTop = basket.y + (200 * basket.s);
    const basketBottom = basket.y + (275 * basket.s);
    
    // Check if emoji is horizontally within basket bounds
    const withinHorizontalBounds = this.x > basketLeft && this.x < basketRight;
    
    // Check if emoji is just crossing the top edge of the basket (coming from above)
    const crossingTopEdge = this.y >= basketTop && this.y <= basketTop + this.size/2;
    
    // Only count as collision if falling from above into the basket opening
    return withinHorizontalBounds && crossingTopEdge && this.speed > 0;
  }
}