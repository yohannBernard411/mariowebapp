var boss = {
    bigBoss: null,
    arret: false,
    rect: null,
    graphics: null,
    fond:null,
    antiboucle:false,

    initBoss: function(){
        if (!jeu.boss.antiboucle){
            jeu.boss.antiboucle = true;
            jeu.boss.bigBoss = jeu.scene.physics.add.sprite(800, 2500, "boss1").setScale(0.5);
            jeu.boss.bigBoss.play("bossWalk");
            jeu.boss.bigBoss.life = 100;
            jeu.scene.physics.add.collider(jeu.boss.bigBoss, jeu.world.worldLayer);
            jeu.scene.physics.add.collider(jeu.boss.bigBoss, jeu.player.aPlayer);
            jeu.boss.generateBossAnimation();
            jeu.boss.gererDeplacement();
            jeu.scene.physics.add.overlap(jeu.player.aPlayer, jeu.boss.bigBoss, jeu.boss.attackBoss);

            jeu.boss.fond = jeu.scene.add.image(798, 2748, "fondDeVie").setDepth(1).setOrigin( 0, 0.5);
            jeu.boss.rect = jeu.scene.add.image(800, 2748, "barreDeVie").setDepth(2).setOrigin( 0, 0.5);
        }
    },
    gererDeplacement: function(){
        jeu.boss.bigBoss.anims.play("bossWalk");
            var tween = jeu.scene.tweens.add({
                targets : this.bigBoss,
                x : 1800,
                ease : "Linear",
                duration : 3000,
                yoyo : true,
                repeat : -1,
                onStart : function (){},
                onComplete : function (){},
                onYoyo : function (tween){tween.targets[0].flipX = tween.targets[0].flipX},
                onRepeat : function (tween){tween.targets[0].flipX = tween.targets[0].flipX}
            });   
        if(!jeu.player.isJumping){
            jeu.boss.arret=false;
        }
    },
    generateBossAnimation: function(){
        jeu.scene.anims.create({
            key: "bossWalk",
            frames: [
                {key: "boss1"},
                {key: "boss2"}
            ],
            frameRate: 8,
            repeat: -1
        });
    },
    attackBoss: function(){
        if(jeu.player.isJumping && jeu.boss.arret==false){
            jeu.boss.arret = true;
            jeu.boss.blesser();
        } 
        if(!jeu.player.isJumping){
            jeu.world.killPlayer();
        }
    },
    blesser: function(){
        this.bigBoss.life -= 20;
        jeu.boss.gestionScore();
        if (this.bigBoss.life <= 0){
            this.bigBoss.destroy();
            this.rect.destroy();
            this.fond.destroy();
            jeu.mong.initvol();
        }
    },
    gestionScore: function(){
        this.rect.setScale((this.bigBoss.life/100), 1);
    }
}
