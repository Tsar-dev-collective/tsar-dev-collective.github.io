var steamGame = steamGame || {}

steamGame.Game = function(){}

steamGame.Game.prototype = {
    create: function(){
        //movement 
        upKey = this.game.input.keyboard.addKey(87) //w
        leftKey = this.game.input.keyboard.addKey(65) //a
        downKey = this.game.input.keyboard.addKey(83) //s
        rightKey = this.game.input.keyboard.addKey(68) //d
        //other interactivity
        selectKey = this.game.input.keyboard.addKey(27) //escape
        startKey = this.game.input.keyboard.addKey(69) // e
        mapKey = this.game.input.keyboard.addKey(81)
    },
    update: function(){}
}