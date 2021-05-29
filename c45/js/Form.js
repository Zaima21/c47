class Form {
constructor (){
    this.input = createInput("name")
    this.title = createElement('h2')
    this.button = createButton('Start')
    this.title2 = createElement('h2')
    this.img1 = createImg("Images/img1.png", "")
    this.img1Button = createButton('select');
}

display(){
    this.title.html("My game")
    this.title.position(400,100)
    this.input.position(400,200)
    this.button.position(400,250)
    this.img1.position(400,350)
    this.img1Button.position(400,370)
    this.title2.html("Select a character")
    this.title2.position(400,300)

    this.button.mousePressed(()=>{
    this.input.hide()
    this.title2.hide()
    this.input.hide()
    this.img1Button.hide()
    this.img1.hide()
    this.button.hide()
    player.name = this.input.value()
    playerCount += 1;
    player.updatePlayerCount(playerCount)
    player.updatePlayerDetails();
});
}

hide(){
this.title.hide()
this.input.hide()
this.title2.hide()
this.input.hide()
this.img1Button.hide()
this.img1.hide()
this.button.hide()
}
}
