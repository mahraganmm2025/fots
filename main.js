let dora;
let basket;

function setup() {
  // createCanvas(w, h)
  createCanvas(555, 600);
  dora = new Dora(0, 400);
  basket = new Basket(0, 400)
}

function draw() {
  background(107, 218, 248)

  // ground
  fill(105, 62, 6)
  rect(0, 580, 555, 100)

  // dora
  dora.draw();
  dora.move(10);
  basket.draw();
  ctrlChar();

  
  //text("(" + mouseX + ", " + mouseY + " )", mouseX, mouseY);
}

function ctrlChar() {

  // control Dora's movement
  if (keyIsDown(LEFT_ARROW) && dora.x >= -250) {
    dora.move(-10, 0);
  }
  if (keyIsDown(RIGHT_ARROW) && dora.x <= 250) {
    dora.move(10, 0);
  }
  
}
