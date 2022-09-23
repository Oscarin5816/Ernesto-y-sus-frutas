var gameState = "serve";
var ok;
var score = 0;
var canasta1; var canasta2; var canasta3
var frutas
function preload(){

 manzanaImg = loadImage("fruit2.png");
 fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");

}

function setup() {
 
fruitGroup = new Group();

canastaGroup = new Group();


}

function draw() {
 createCanvas(600, 600)
 background("orange")

 if(gameState == "serve"){
     textSize(20)
     fill("blue")
     text("Al granjero Enrique se le an escapado 50 de ", 50, 200);
     text("sus frutas ayuda atrapandolas", 50, 220);
     text("pulsa para empesar", 80, 410);

     canastaGroup.visible = false;

 }

 if(mouseIsPressed && gameState == "serve"){
    gameState = "play";
    canasta1 = createSprite(300, 580, 67.5, 15);
   canastaGroup.add(canasta1)
 }

 
 if(mouseIsPressed && gameState == "end"){
  gameState = "play";
  score = 0
}

 if(gameState == "play"){
    fill("blue");
    textSize(15);
    text("puntuacion: " + score, 100, 100);
 }

 if(keyDown("Right_Arrow")){
     canasta1.x += 9;
 }

 if(keyDown("Left_Arrow")){
    canasta1.x -= 9;
}

fruits();

if(fruitGroup.isTouching(canasta1)){
  fruitGroup.destroyEach();
    score += 1;
}

if(score == 50){
    gameState = "end"
    fill("blue");
    textSize(20);
    text("Ganaste Ernesto te lo agradece", 250, 300);
    text("volver a jugar?", 400, 350);
}

 drawSprites();
}


function fruits(){
    if(World.frameCount% 80===0 && gameState == "play"){
      var fruit = createSprite(800,-20,20,20);
      
    //Aumentar la velocidad de las frutas después de 4 puntos 
  
         fruit.velocityY= (12+(score/2));
        // fruit.velocityY= (7+(score));
         //fruit.velocity= (7+(score/4));
        // fruit.velocityX= (7);
       
      fruit.scale=0.4;
       //fruit.debug=true;
       r=Math.round(random(1,4));
      if (r == 1) {
        fruit.addImage(manzanaImg);
      } else if (r == 2) {
        fruit.addImage(fruit2);
      } else if (r == 3) {
        fruit.addImage(fruit3);
      } else {
        fruit.addImage(fruit4);
      }
      
      fruit.x=Math.round(random(50,550));
     
      
      fruit.setLifetime=180;
      
      fruitGroup.add(fruit);
    }
  }

