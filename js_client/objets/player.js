var player = {
    aPlayer: null,
    isJumping: false,
    isAlive: true,
    
    initialiserPlayer: function(){
        this.aPlayer = jeu.scene.physics.add.sprite(jeu.world.positionDebut.x, jeu.world.positionDebut.y, "player", "player_stand").play("playerWalk"),
        this.aPlayer.setCollideWorldBounds(true);
        
        jeu.world.gameOver = false;
        this.gererHeart();
    },
    generatePlayerAnimations: function(){
        jeu.scene.anims.create({
            key: "playerWalk",
            frames: jeu.scene.anims.generateFrameNames("player", {prefix: "player_walk", start:1, end:2}),
            frameRate: 8,
            repeat: -1,
        });
        jeu.scene.anims.create({
            key: "playerIdle",
            frames: [{key: "player", frame: "player_stand"}, {key: "player", frame: "player_idle"}],
            frameRate: 2,
            repeat: -1,
        });
    },
    gererDeplacement: function(){
        if (this.isAlive){
            if (jeu.cursor.left.isDown){
                this.aPlayer.setVelocityX(-200);
                this.aPlayer.setFlip(true, false);
            }else if(jeu.cursor.right.isDown){
                this.aPlayer.setVelocityX(200);
                this.aPlayer.setFlip(false, false);
            }else{
                this.aPlayer.setVelocityX(0);
            }
            if(jeu.cursor.up.isDown && this.aPlayer.body.onFloor()){
                this.aPlayer.setVelocityY(-450);
                this.aPlayer.setTexture("player", "player_jump");
            }
            if (this.aPlayer.body.onFloor()){
                this.isJumping = false;
                jeu.boss.arret=false;
            }else{
                this.isJumping = true;
            }
            if (this.isJumping){
                this.aPlayer.setTexture("player", "player_jump");
            }else{
                if (jeu.cursor.left.isDown){
                    this.aPlayer.anims.play("playerWalk", true);
                }else if(jeu.cursor.right.isDown){
                    this.aPlayer.anims.play("playerWalk", true);
                }else{
                    this.aPlayer.anims.play("playerIdle", true);
                }
            }
        }else{
            this.aPlayer.setVelocityX(0);
            this.aPlayer.setVelocityY(0);
        }
    },
    gererHeart: function(){
        if(jeu.heart==3){
            this.vietrois.setDepth(2);
            this.viedeux.setDepth(2);
            this.vieun.setDepth(2);
        }
        if(jeu.heart==2){
            this.vietrois.destroy();
            this.viedeux.setDepth(2);
            this.vieun.setDepth(2);
        }
        if(jeu.heart==1){
            this.vietrois.destroy();
            this.viedeux.destroy();
            this.vieun.setDepth(2);
        }
    },
    killPlayer: function(){
        this.aPlayer.setTexture("player", "player_hurt");
        this.isAlive = false;
        jeu.heart--;
        jeu.boss.antiboucle = false;
        jeu.mong.antiboucle = false;
        jeu.mong.antiboucle2 = false;
        this.gererHeart();
    }
}
