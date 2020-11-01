var steamGame = steamGame || {}

steamGame.Game = function(){}

steamGame.Game.prototype = {
    create: function(){
        //movement
        wKey = this.game.input.keyboard.addKey(87)
        aKey = this.game.input.keyboard.addKey(65)
        sKey = this.game.input.keyboard.addKey(83)
        dKey = this.game.input.keyboard.addKey(68)
        //start
        escapeKey = this.game.input.keyboard.addKey(27)
        //select
        eKey = this.game.input.keyboard.addKey(69)
    },
    update: function(){}
}

//movement
wKey = this.game.input.keyboard.addKey(87)
aKey = this.game.input.keyboard.addKey(65)
sKey = this.game.input.keyboard.addKey(83)
dKey = this.game.input.keyboard.addKey(68)
//start
escapeKey = this.game.input.keyboard.addKey(27)
//select
eKey = this.game.input.keyboard.addKey(69)