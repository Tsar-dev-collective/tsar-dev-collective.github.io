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
        mapKey = this.game.input.keyboard.addKey(81) // q

        //begin scene setup
        this.game.stage.backgroundColor = '#acbfbc';
        this.scalingFactor = (this.game.world.width / 19) / 32;

        //menustate declarations
        this.menuState = 0;

        //set scene boundary
        this.game.world.setBounds(0, 0, this.game.world.width, this.game.world.height);

        //player declaration
        this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'protest');
        this.player.anchor.setTo(0.5, 0.5);
        this.player.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.player.animations.add('idleDown', [8, 9, 10, 11, 12], 4, true);
        this.player.animations.add('idleLeft', [0, 1, 2, 3, 4], 4, true);
        this.player.animations.add('idleRight', [0, 1, 2, 3, 4], 4, true);
        this.player.animations.add('idleUp', [16, 17, 18, 19, 20], 4, true);
        this.player.animations.add('runDown', [13, 14, 15, 14], 4, true);
        this.player.animations.add('runLeft', [5, 6, 7, 6], 4, true);
        this.player.animations.add('runUp', [22, 23, 24, 23], 4, true);
        this.player.animations.add('runRight', [5, 6, 7, 6], 4, true);
        this.game.physics.arcade.enable(this.player);
        this.playerSpeed = 200;
        this.player.body.collideWorldBounds = true;
    },
    update: function(){
        if (this.menuState == 0) {
            //I know this kind of movement tracking has fatal flaws, I don't care, it works
            if (upKey.isDown) {
                this.player.body.velocity.y = -this.playerSpeed;
            } else if (downKey.isDown) {
                this.player.body.velocity.y = this.playerSpeed;
            } else {
                this.player.body.velocity.y = 0;
            }
            if (rightKey.isDown) {
                this.player.body.velocity.x = this.playerSpeed;
            } else if (leftKey.isDown) {
                this.player.body.velocity.x = -this.playerSpeed;
            } else {
                this.player.body.velocity.x = 0;
            }

            //animation checker for player
            this.animationName = "stopped";
            this.direction = this.direction || 'down';
            if (this.player.body.velocity.x < 0) {
                this.animationName = 'runLeft';
                this.direction = 'left'
                if (this.player.scale.x > 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
            }
            if (this.player.body.velocity.x > 0) {
                this.animationName = 'runRight';
                this.direction = 'right'
                if (this.player.scale.x < 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
            }
            if (this.player.body.velocity.y < 0) {
                this.animationName = 'runUp';
                this.direction = 'up'
            }
            if (this.player.body.velocity.y > 0) {
                this.animationName = 'runDown';
                this.direction = 'down'
            }
            //player animator
            if (this.player.animations.name !== this.animationName && this.animationName !== 'stopped') {
                this.player.animations.play(this.animationName, 4, true);
            } else if (this.animationName == 'stopped') {
                if (this.direction == 'down') {
                    this.player.animations.play('idleDown', 4, true);
                    if (this.player.scale.x < 0) {
                        this.player.scale.x = this.player.scale.x * -1;
                    }
                }
                if (this.direction == 'right') {
                    this.player.animations.play('idleRight', 4, true);
                }
                if (this.direction == 'up') {
                    this.player.animations.play('idleUp', 4, true);
                    if (this.player.scale.x < 0) {
                        this.player.scale.x = this.player.scale.x * -1;
                    }
                }
                if (this.direction == 'left') {
                    this.player.animations.play('idleLeft', 4, true);
                }
            }
        }
    }
}