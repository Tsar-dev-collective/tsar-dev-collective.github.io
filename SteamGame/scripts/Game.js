var steamGame = steamGame || {}

steamGame.Game = function(){}

steamGame.Game.prototype = {
    create: function(){

        //movement 
        upKey = this.game.input.keyboard.addKey(87) //w
        upArrow = this.game.input.keyboard.addKey(38); // ^
        leftKey = this.game.input.keyboard.addKey(65) //a
        leftArrow = this.game.input.keyboard.addKey(37); // <-
        downKey = this.game.input.keyboard.addKey(83) //s
        downArrow = this.game.input.keyboard.addKey(40); // v
        rightKey = this.game.input.keyboard.addKey(68) //d
        rightArrow = this.game.input.keyboard.addKey(39); // ->
        //other interactivity
        selectKey = this.game.input.keyboard.addKey(27) //escape
        startKey = this.game.input.keyboard.addKey(69) // e
        mapKey = this.game.input.keyboard.addKey(81) // q

        //begin scene setup
        this.game.stage.backgroundColor = '#acbfbc';
        this.scalingFactor = (this.game.world.width / 19) / 32;
        this.map = this.game.add.tilemap('debugMap');
        this.map.addTilesetImage('TileSets', 'debugTiles');
        this.floor = this.map.createLayer('floor');
        this.floor.setScale(this.scalingFactor);
        this.wall = this.map.createLayer('wall');
        this.wall.setScale(this.scalingFactor);
        this.game.physics.arcade.enable(this.wall);
        //this.wall.debug = true;
        this.map.setCollisionBetween(4, 17, true, 'wall');
        this.floor.resizeWorld();

        //menustate declarations
        this.menuState = 0;

        //set scene boundary
        //this.game.world.setBounds(0, 0, this.game.world.width, this.game.world.height);
 
        //player declaration
        this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'protest');
        this.player.anchor.setTo(0.5, 0.5);
        this.player.scale.setTo(2.6, 2.6);
        this.player.animations.add('idleDown', [8, 9, 10, 11, 12], 4, true);
        this.player.animations.add('idleLeft', [0, 1, 2, 3, 4], 4, true);
        this.player.animations.add('idleRight', [0, 1, 2, 3, 4], 4, true);
        this.player.animations.add('idleUp', [16, 17, 18, 19, 20], 4, true);
        this.player.animations.add('runDown', [13, 14, 15, 14], 4, true);
        this.player.animations.add('runLeft', [5, 6, 7, 6], 4, true);
        this.player.animations.add('runUp', [22, 23, 24, 23], 4, true);
        this.player.animations.add('runRight', [5, 6, 7, 6], 4, true);
        this.game.physics.arcade.enable(this.player);
        this.player.body.enbable = true;
        this.player.debug = true;
        this.playerSpeed = 200;
        this.player.body.setSize(16, 24, 8, 4);
        this.player.body.collideWorldBounds = true;
        this.game.camera.follow(this.player, 1);
    },
    update: function(){
        this.game.physics.arcade.collide(this.player, this.wall);
        if (this.menuState == 0) {
            //I know this kind of movement tracking has fatal flaws, I don't care, it works
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
            if (upKey.isDown || upArrow.isDown) {
                this.player.body.velocity.y = -this.playerSpeed;
            } else if (downKey.isDown || downArrow.isDown) {
                this.player.body.velocity.y = this.playerSpeed;
            }
            if (rightKey.isDown || rightArrow.isDown) {
                this.player.body.velocity.x = this.playerSpeed;
            } else if (leftKey.isDown || leftArrow.isDown) {
                this.player.body.velocity.x = -this.playerSpeed;
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
};