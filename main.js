let dora;


function setup() {
  // createCanvas(w, h)
  createCanvas(555, 680)
  dora = new Dora(20, 350, 0.5)

}

//dora setup
// dora = new Dora(20, 350)

function draw() {
  background(107, 218, 248)

  //ground
  fill(105, 62, 6)
  rect(0, 580, 555, 100)

  // dora
  dora.draw();
  ctrlChar();

  text("(" + mouseX + ", " + mouseY + " )", mouseX, mouseY);
}

function ctrlChar() {

  // control Dora's movement
  if (keyIsDown(LEFT_ARROW)) {
    dora.move(-10, 0);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    dora.move(10, 0);
  }
  if (keyIsDown(UP_ARROW)) {
    dora.move(0, -10);
  }
  if (keyIsDown(DOWN_ARROW)) {
    dora.move(0, 10);
  }

}
