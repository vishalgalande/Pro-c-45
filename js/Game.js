class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");

  }
  
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
 
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start()
  {
    player = new Player();
    playerCount = player.getCount()

    form = new Form()
    form.display()

    var jet1 = createSprite(100,200,20,20)
    jet1.addImage("whitejet",whiteJet)

    var jet2 = createSprite(100,200,20,20)
    jet2.addImage("blackjet",blackJet)

    jets = [jet1,jet2]
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");

     //C39
     this.resetTitle.html("Reset Game");
     this.resetTitle.class("resetText");
     this.resetTitle.position(width / 2 + 200, 40);
 
     this.resetButton.class("resetButton");
     this.resetButton.position(width / 2 + 230, 100);
     this.resetButton.size(50,50)
 
     //this.leadeboardTitle.html("Leaderboard");
     //this.leadeboardTitle.class("resetText");
     //this.leadeboardTitle.position(width / 3 - 60, 40);
 
      //this.leader1.class("leadersText");
      //this.leader1.position(width / 3 - 50, 80);
 
      //this.leader2.class("leadersText");
      //this.leader2.position(width / 3 - 50, 130);
  }

  play()
  {
    this.handleElements()
    this.handleResetButton()

    Player.getPlayersInfo()

    drawSprites()

    var index = 0;
    for(var plr in allPlayers)
    {
      index = index + 1;

      var x = allPlayers[plr].positionX;
      var y = height - allPlayers[plr].positionY;

      jets[index-1].position.x = x;
      jets[index-1].position.y = y;
    }

    this.handlePlayerControls()
  }

  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {}
      });
      window.location.reload();
    });
  }
  
  handlePlayerControls()
  {
    if(keyDown(LEFT_ARROW)){
      player.positionX -= 10;
      player.update()
    }
    if(keyDown(RIGHT_ARROW)){
      player.positionX += 10;
      player.update()
    }
    if(keyDown(UP_ARROW)){
      player.positionY += 10;
      player.update()
    }
    if(keyDown(DOWN_ARROW)){
      player.positionY -= 10;
      player.update()
    }
  }
  
}
