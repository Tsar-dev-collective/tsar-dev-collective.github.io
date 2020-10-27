steamGame.MainMenu = function() {};

steamGame.MainMenu.prototype = {
    create: function() {
        this.game.stage.backgroundColor = '#75a1a0';

        this.backBlimp = this.game.add.sprite(this.game.world.centerX + 192, (this.game.world.centerY / 2), 'menuBlimp');
        this.backBlimp.anchor.setTo(0, 0.5);
        this.backBlimp.scale.setTo(0.5, 0.5);
        this.backBlimp.animations.add('float');
        this.backBlimp.animations.play('float', 8, true);

        this.backBall2 = this.game.add.sprite(75, this.game.world.height, 'menuBall2');
        this.backBall2.anchor.setTo(0, 1);
        this.backBall2.scale.setTo(0.2, 0.2);
        this.backBall2.animations.add('float');
        this.backBall2.animations.play('float', 6, true);

        this.backBall1 = this.game.add.sprite(100, this.game.world.height, 'menuBall1');
        this.backBall1.anchor.setTo(0, 1);
        this.backBall1.scale.setTo(0.3, 0.3);
        this.backBall1.animations.add('float', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.backBall1.animations.play('float', 6, true);

        this.titlePart0 = this.game.add.sprite(this.game.world.centerX - 520, (this.game.world.centerY / 2) - 32, 'title');
        this.titlePart1 = this.game.add.sprite(this.titlePart0.x + this.titlePart0.width - 16, this.titlePart0.y, 'title');
            this.titlePart1.frame = 1;
        this.titlePart2 = this.game.add.sprite(this.titlePart1.x + this.titlePart1.width - 24, this.titlePart0.y, 'title');
            this.titlePart2.frame = 2;
        this.titlePart3 = this.game.add.sprite(this.titlePart2.x + this.titlePart2.width - 16, this.titlePart0.y, 'title');
            this.titlePart3.frame = 3;
        this.titlePart4 = this.game.add.sprite(this.titlePart3.x + this.titlePart3.width - 24, this.titlePart0.y, 'title');
            this.titlePart4.frame = 4;
        this.titlePart5 = this.game.add.sprite(this.titlePart4.x + this.titlePart4.width - 16, this.titlePart0.y, 'title');
            this.titlePart5.frame = 5;
        this.titlePart6 = this.game.add.sprite(this.titlePart3.x + this.titlePart3.width, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart6.frame = 6;
        this.titlePart7 = this.game.add.sprite(this.titlePart6.x + this.titlePart6.width - 20, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart7.frame = 7;
        this.titlePart8 = this.game.add.sprite(this.titlePart7.x + this.titlePart7.width - 16, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart8.frame = 8;
        this.titlePart9 = this.game.add.sprite(this.titlePart8.x + this.titlePart8.width, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart9.frame = 9;
        this.titlePart10 = this.game.add.sprite(this.titlePart9.x + this.titlePart9.width - 16, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart10.frame = 10;
        this.titlePart11 = this.game.add.sprite(this.titlePart10.x + this.titlePart8.width - 24, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart11.frame = 11;

        
    }
}
