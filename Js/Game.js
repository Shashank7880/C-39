//oops 
class Game {
    constructor(){
    }
   
    getstate(){
     var gameStateRef= database.ref("gamestate")
     gameStateRef.on("value", (data)=>{
        //  val is going to store the value inside gamestate
       gamestate=data.val()
     })
    }


    updateState(state){
       database.ref("/").update({
           gamestate:state
       })
    }

    start(){
      if(gamestate === 0){
        player = new Player()
        player.getCount()
        form= new Form()
        form.display()
      }
      car1 = createSprite(100,200)
      car1.addImage("car1",car1img)

      car2 = createSprite(300,200)
      car2.addImage("car2",car2img)

      car3 = createSprite(500,200)
      car3.addImage("car3",car3img) 

      car4 = createSprite(700,200)
      car4.addImage("car4",car4img)

      cars=[car1, car2, car3, car4]
    }

   play(){
    form.hide()
    textSize(30)
    text("Game Started",120,100)
     Player.getplayerInfo()

     //=== == = !== !
     if(allPlayers !== undefined){
       // y position of the player 
      
       var index=0;
        var x=0
        var y
       
       //  var displayposition= 130
       for (var plr in allPlayers){
        // if(plr=== "player"+ player.index){
        //  fill("green")
        // }
        // else{
        //   fill("red")
        // } 
        // displayposition+=20
        index= index+1
        // increasing x position of the car by 200
        x=x+200
        // increasing y position of the car by using arrow key with database value
       y= displayHeight-allPlayers[plr].Distance
       cars[index-1].x=x
       cars[index-1].y=y
       if(index === player.index){
         cars[index-1].shapeColor="red"
         // camera
         camera.position.x=displayWidth/2
         camera.position.y=cars[index-1].y

       }
        textSize(20)
        // using string concation
        // text(" Score"+ marks, x, y)
        // text(allPlayers[plr].Name + ":"+ allPlayers[plr].Distance, 120, displayposition)
       }
     }
     //keyIsDown(UP_ARROW)
if(keyIsDown(UP_ARROW)  && player.index!== null){
  player.distance+=50;
  player.updatename()
}
   
   drawSprites()
}
}