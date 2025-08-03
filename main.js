function setup() {
  // createCanvas(w, h)
  createCanvas(555, 600)
  background(107, 218, 248)

  // cursor
  fill(0)
  text("(" + mouseX + ", " + mouseY + " )", mouseX, mouseY);

  //ground
  fill(105, 62, 6)
  rect(0, 530, 642, 102)
}

//dora setup
dora_inst = new Dora(250, 200)

function draw() {
  // dora
  dora_inst.draw();
  // ctrlChar();
}

// function ctrlChar() {

//   // dora.draw()

//   // control Dora's movement
//   if (keyIsDown(LEFT_ARROW)) {
//     dora.move(-5, 0);
//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     dora.move(5, 0);
//   }
//   if (keyIsDown(UP_ARROW)) {
//     dora.move(0, -5);
//   }
//   if (keyIsDown(DOWN_ARROW)) {
//     dora.move(0, 5);
//   }

// }
