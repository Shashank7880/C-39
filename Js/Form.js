class Form {
    // title, input, button, greeting
    constructor(){
    this.title = createElement("h2")
    this.input= createInput("Name")
    this.button= createButton("Start")
    this.greeting= createElement("h2")
    }

    hide(){
        this.button.hide()
        this.input.hide()
        this.greeting.hide()
    }


    // HtML program 
    display(){
    this.title.html(" Car Racing Game")
    this.title.position(displayWidth/2-50, 0)

    this.input.position(displayWidth/2+300,displayHeight/2-0)
  
    this.button.position(displayWidth/2+360,displayHeight/2+50)

    this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
        player.name = this.input.value()
        playercount+=1;
        player.index= playercount
        player.updatecount(playercount)
        player.updatename()

    this.greeting.html("hello"+ player.name)
    this.greeting.position(displayWidth/2+300,displayHeight/2-0)
    })
    
    } 
}   