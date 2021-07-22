class Player {
    // Index, name, distance
    // player0,player1, player2, player3, player4 
constructor(){
    this.index= null;
    this.name=null;
    this.distance=0;
}

getCount(){
    var playerCountRef= database.ref("playercount")
    playerCountRef.on("value", (data)=>{
       //  val is going to store the value inside gamestate
      playercount=data.val()
    })

}
updatecount(count){
    database.ref("/").update({
     playercount:count   
    })
}
updatename(){
    // player1 , player2 
  var playerIndex= "players/player" + this.index
  database.ref(playerIndex).set({
      Name:this.name,
      Distance:this.distance,
  })
}

// Static function to pass infromation to allplayers 
static getplayerInfo(){
var playerInforef= database.ref("players")
playerInforef.on("value", (data)=>{
    allPlayers=data.val()
})
}

}   