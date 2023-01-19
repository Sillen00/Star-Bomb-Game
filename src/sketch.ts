//---- GLOBAL VARIABLES ----//
let game: Game;
let playScene: PlayScene;
let goal: Goal;
let scoreInterface: ScoreInterface;
// let sound: p5.SoundFile
let backgroundImg: p5.Image;
let galaxGoalImg: p5.Image;
let playboardBGImg: p5.Image;
let gameFont: p5.Font;
let player: Player;

let rocketImgPink1: p5.Image;
let rocketImgBlue1: p5.Image;
let rocketImgPink2: p5.Image;
let rocketImgBlue2: p5.Image;
/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
  backgroundImg = loadImage("../assets/images/background.jpg");
  galaxGoalImg = loadImage("../assets/images/galax.jpg");
  playboardBGImg = loadImage("../assets/images/playboardBackground.png");
  gameFont = loadFont("../assets/fonts/PressStart2P-Regular.ttf");

  rocketImgBlue1 = loadImage("../assets/images/blueRocket1.png");
  rocketImgPink1 = loadImage("../assets/images/pinkRocket1.png");
  rocketImgBlue2 = loadImage("../assets/images/bluerocket2.png");
  rocketImgPink2 = loadImage("../assets/images/pinkrocket2.png");
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  angleMode(DEGREES);
  textFont(gameFont);

  game = new Game();
  playScene = new PlayScene();
  goal = new Goal();
  scoreInterface = new ScoreInterface();
  player = new Player();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
