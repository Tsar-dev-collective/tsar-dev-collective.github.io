var steamGame = steamGame || {};

steamGame.Preload = function() {};

steamGame.Preload.prototype = {
    preload: function() {
        //create preload bar and logo
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 48, 'logo');
        this.splash.anchor.setTo(0.5);
        this.splash.animations.add('spin');
        this.splash.animations.play('spin', 7, true);

        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbarB');
        this.preloadBar.anchor.setTo(0.5);

        this.preloadBarF = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbarF');
        this.preloadBarF.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar, 0);

        //load actual sprites and spritesheets (placeholder stock images for now)
        this.load.atlasJSONHash('menuBack', 'sprites/images/blimp.png', 'sprites/images/blimp.json');
            this.load.image('road', 'sprites/images/road.jpg');
        this.load.image('petal', 'sprites/images/petal.jpg');
            this.load.image('seahorse', 'sprites/images/seahorse.jpg');
        this.load.image('butterfly', 'sprites/images/butterfly.jpg');
    },
    create: function() {
        this.state.start('MainMenu');
    } 
};