var trex, trexRunning, trexCollided;
var ground, invisibleGround, groundImage;

function preload() {
  trexRunning = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trexCollided = loadImage("trexCollided.png");

  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);

  //criar um sprite trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trexRunning);
  trex.scale = 0.5;

  //criar um sprite ground (chão)
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;
}

function draw() {
  background(220);

  //pular quando a barra de espaço é pressionada
  if (keyDown("space")) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide(ground);
  drawSprites();
}
