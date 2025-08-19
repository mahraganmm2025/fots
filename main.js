let dora;
let basket;
let screen = "sign";
let tree;
let grass;
let titleFont;
let title
let usernameField, passwordField, signInBtn;
let userTable;
let fallingEmojis = [];
let lastEmojiSpawn = 0;

function preload() {
  tree = loadImage('mahraganTree.png'); 
  grass = loadImage('mahraganGrass.png');
  titleFont = loadFont('Assets/PressStart2P-Regular.ttf');
}

function setup() {
  createCanvas(555, 600);
  title = new Title(0,0);
  dora = new Dora(0, 420);
  basket = new Basket(118, 280);
  userTable = new p5.Table();
  userTable.addColumn('username');
  userTable.addColumn('password');   // ⚠️ plain text; see note below
  userTable.addColumn('highscore');

  // centered-ish boxes that fit canvas
  usernameField = new TextField(120,220,320,44,false, titleFont);
  passwordField = new TextField(120,340,320,44,true,  titleFont);
  signInBtn     = new Button(width/2 - 100, 440, 200, 60, "Sign up");
}

function draw() {
  background(107, 218, 248)

  if(screen == "sign"){
    push()
    rectMode(CENTER)
    textAlign(CENTER)
    textFont(titleFont)

    //draw title
    title.draw();
    
    //draw sign in button
    fill(50, 205, 50)
    if(mouseX >= 328 && mouseX <= 428 && mouseY >= 227 && mouseY <= 277 && screen == "sign"){
      fill(34, 139, 34);
    }
    rect(width/2 + 100, 250, 100, 50)
    fill(0)
    
    text("Sign in", width/2 + 100, 255)

    //draw sign up button
    fill(50, 205, 50)
    if(mouseX >= 128 && mouseX <= 228 && mouseY >= 227 && mouseY <= 277 && screen == "sign"){
      fill(34, 139, 34);
    }
    rect(width/2 - 100, 250, 100, 50)
    fill(0)
    text("Sign up", width/2 - 100, 255)

    //draw skip button
    fill(50, 205, 50)
    if(mouseX >= 228 && mouseX <= 328 && mouseY >= 302 && mouseY <= 352 && screen == "sign"){
      fill(34, 139, 34);
    }
    rect(width/2 , 325, 100, 50)
    fill(0)
    text("Skip", width/2 , 330)
    pop()
  }
  if(screen == "sign up"){
    push()
    rectMode(CENTER)
    textAlign(CENTER)
    textFont(titleFont)
    textSize(35)
    fill(191, 64, 191)
    stroke(0)
    strokeWeight(2)
    //title
    text("Sign up", width/2, 75)

    //username
    strokeWeight(1)
    fill(191, 64, 191); noStroke(); textAlign(LEFT, CENTER); textSize(38);
    strokeWeight(2)
    text("Username", 123, 190);
    text("Password", 123, 315);

    // input boxes
    usernameField.draw();
    passwordField.draw();
    textSize(15)
    signInBtn.draw();
    
    pop()
  }
  if(screen == "game"){
    image(tree, 0, 0, 550, 775)
    image(grass, 0, 400, 650, 200)
    
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
        fallingEmojis.splice(i, 1);
        continue;
      }
      
      // Remove emojis that are off screen
      if (fallingEmojis[i].isOffScreen()) {
        fallingEmojis.splice(i, 1);
      }
    }
    
    dora.draw();
    ctrlChar();
    basket.draw();
    basket.ctrlChar()
  }

  //text("(" + mouseX + ", " + mouseY + " )", mouseX, mouseY);
}

function ctrlChar() {
  dora.move(10);
}

function mousePressed() {
  // menu buttons (yours as-is)
  if (mouseX >= 328 && mouseX <= 428 && mouseY >= 227 && mouseY <= 277 && screen == "sign") screen = "sign in";
  if (mouseX >= 128 && mouseX <= 228 && mouseY >= 227 && mouseY <= 277 && screen == "sign") screen = "sign up";
  if (mouseX >= 228 && mouseX <= 328 && mouseY >= 302 && mouseY <= 352 && screen == "sign") screen = "start";

  if (screen === "sign up") {
    usernameField.focused = usernameField.hit(mouseX, mouseY);
    passwordField.focused = !usernameField.focused && passwordField.hit(mouseX, mouseY);
    if (signInBtn.hit(mouseX, mouseY)) submit();
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
  constructor(x, y, w, h, isPassword=false, font=null) {
    this.x=x; this.y=y; this.w=w; this.h=h;
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
    stroke(0); strokeWeight(3); fill(255);
    rect(this.x, this.y, this.w, this.h);

    noStroke(); fill(0); textAlign(LEFT, CENTER);
    if (this.font) textFont(this.font);
    textSize(this.textSizePx);

    const shown = this.isPassword ? "•".repeat(this.value.length) : this.value;
    const tx = this.x + this.pad;
    const ty = this.y + this.h/2 + 1;
    text(shown, tx, ty);

    // caret blink
    if (this.focused) {
      if (millis() - this.lastBlink > 500) { 
        this.caretVisible = !this.caretVisible; 
        this.lastBlink = millis(); 
      }
      if (this.caretVisible) {
        const tw = textWidth(shown);
        stroke(0); strokeWeight(2);
        line(tx + tw + 2, this.y + 6, tx + tw + 2, this.y + this.h - 6);
      }
    }
    pop();
  }

  hit(mx,my){ 
    return mx>=this.x && mx<=this.x+this.w && my>=this.y && my<=this.y+this.h; 
  }

  onType(k){
    if (k.length !== 1) return;

    // test what the next value would look like
    const next = this.value + k;
    const shownNext = this.isPassword ? "•".repeat(next.length) : next;

    push();
    if (this.font) textFont(this.font);
    textSize(this.textSizePx);
    const innerW = this.w - this.pad*2;
    const fits = textWidth(shownNext) <= innerW;
    pop();

    if (fits) this.value = next;   // only accept if it fits
  }

  onSpecialKey(code){
    if (code === BACKSPACE) this.value = this.value.slice(0,-1);
  }
}
class Button {
  constructor(x, y, w, h, label) {
    this.x=x; this.y=y; this.w=w; this.h=h; this.label=label;
    this.normal = color(50,205,50);
    this.hover  = color(34,139,34);
  }
  draw() {
    push();
    rectMode(CORNER);
    stroke(0); strokeWeight(3);
    fill(this.hit(mouseX, mouseY) ? this.hover : this.normal);
    rect(this.x, this.y, this.w, this.h, 8);
    noStroke(); fill(0); textAlign(CENTER, CENTER); textSize(20);
    text(this.label, this.x + this.w/2, this.y + this.h/2 + 1);
    pop();
  }
  hit(mx,my) {
    return mx>this.x && mx<this.x+this.w && my>this.y && my<this.y+this.h;
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

  const row = userTable.addRow();
  row.setString('username', username);  // <- match lowercase
  row.setString('password', password);  // <- match lowercase
  row.setNum('highscore', highscore);   // <- match lowercase

  saveTable(userTable, 'users.csv');    // downloads CSV (client-side)
  screen = "game";
}