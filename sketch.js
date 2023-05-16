var ball, edges, paddle, brick;

var score;
 
var vidas

var gameeState


function setup() {
  
  createCanvas(400,400)
   
  gameState="serve"
  
  montarJogo()
  
}


 function createRow(y,color){
     for(i=0;i<6; i++){
      brick = createSprite(65+54*i, y+50,50,25);
      brick.shapeColor = color
      brinks.add(brick) 
     }  
 }


function brickHit(ball,brick){
 brick.remove() 
score += 5  

  
}


function montarJogo(){
ball=createSprite(200,250,20,20)  
 ball.shapeColor="white"
  
 paddle=createSprite (200,350,120,10)
 paddle.shapecolor="white" 
  
  edges=createEdgeSprites()
  
 brinks=createGroup()
  
 createRow(0,"red") 
 createRow(29,"yellow")  
 createRow(29+29,'green')  
 createRow(29+29+29,"blue")  

score=0  
vidas=3  
}




function draw(){
 background(0) 
  textSize(20)
text("score: " + score,100,20)  
text("vidas: " + vidas,200,20) 
  if(vidas<1){
    
    gameState="gameOver" 
     
     
     }
  
  
  
    if(gameState=="gameOver"){
      textSize(50)
     text("Game Over",60,200)   
     
     
     }
if(gameState == "serve"){
  text("pressione 'espaço' para iniciar",60,200) 
  
 if (keyDown("space")){
   
    gameState="play"  
    ball.velocityY=-5
    ball.velocityX=-6
   
 }
  
}
  
  if(gameState=="play"){
      
    if(ball.y>400){
      vidas-=1
      reload()
      
       }
   if(!brinks[0]){
     
      textSize(50)
     text("you're winner",55,200)
    ball.velocityY=0  
    ball.velocityX=0       
    ball.destroy()  
    peddle.destroy()     
      
      }  
    
    
     for(i=0;i<3;i++){
       ball.bounceOff(edges[i])
     }
    
    
    
      paddle.collide(edges)
      ball.bounceOff(paddle)
    
    
     ball.bounceOff(brinks,brickHit)
      
   
  
   if(keyDown(LEFT_ARROW)){
     paddle.velocityX=-6 
      }
  
  
      if(keyDown(RIGHT_ARROW)){
     paddle.velocityX=6 
  
      }
  }
  
  drawSprites()
   
  
  
}

function reload(){
  
   ball.velocityY=0  
       ball.velocityX=0
       gameState="serve"
      paddle.velocityX=0
      
       paddle.x = 200
       ball.x=200
       ball.y=250
      
}


  
  
  
  
  
  







