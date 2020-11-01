var steamGame = steamGame || {}

steamGame.Game = function(){}

steamGame.Game.prototype = {
    create: function(){
        //relevant keycodes
        wKey = this.game.input.keyboard.addKey(87)
        aKey = this.game.input.keyboard.addKey(65)
        sKey = this.game.input.keyboard.addKey(83)
        dKey = this.game.input.keyboard.addKey(68)
        escapeKey = this.game.input.keyboard.addKey(27)
        eKey = this.game.input.keyboard.addKey(69)
    },
    update: function(){}
}