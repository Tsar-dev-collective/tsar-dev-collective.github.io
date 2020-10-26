steamGame.MainMenu = function() {};

steamGame.MainMenu.prototype = {
    create: function() {
        this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'sky');

        this.backBlimp = this.game.add.sprite(this.game.world.centerX + 192, this.game.world.centerY - 96, 'menuBack');
        this.backBlimp.anchor.setTo(0, 0.5);
        this.backBlimp.scale.setTo(0.5, 0.5);
        this.backBlimp.animations.add('float');
        this.backBlimp.animations.play('float', 8, true);
    }
}