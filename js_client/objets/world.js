var world = {
    tilemap : null,
    tileset : null,
    downLayer : null,
    worldLayer : null,
    topLayer : null,
    overlapLayer : null,
    positionDebut : null,
    score: 0,
    scoreText: null,
    clef: null,
    afficheClef: null,
    fondScore: null,
    gameOver: false,
    gameoverText: null,
    gameoverTextDeux: null,
    debutZombie1 : null,
    debutZombie2 : null,
    debutZombie3 : null,
    debutZombie4 : null,
    debutZombie5 : null,
    debutZombie6 : null,
    debutZombie7 : null,
    blockd: null,
    blockg: null,
    vieun: null,
    viedeux: null,
    vietrois: null,
    positionPorteUne: null,
    clefText: null,
    dejaAffiche: false,
    dejaAffiche2: false,
    dejaAffiche3: false,
    tourbille: null,
    centreTourbillon: null,
    tourbille2: null,
    centreTourbillon2: null,
    

    initialiserWorld : function(){
        this.tilemap = jeu.scene.make.tilemap({key: "map"});
        this.tileset = this.tilemap.addTilesetImage("platformPack_tilesheet","tiles");
        this.downLayer = this.tilemap.createStaticLayer("fond",this.tileset,0,0);
        this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("dessus",this.tileset,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",this.tileset,0,0);

        this.positionDebut = this.tilemap.findObject("Objects", obj => obj.name === "debut");
        this.positionPorteUne = this.tilemap.findObject("Objects", obj => obj.name === "porteUne");
        this.positionPorteDeux = this.tilemap.findObject("Objects", obj => obj.name === "porteDeux");
        this.positionPorteTrois = this.tilemap.findObject("Objects", obj => obj.name === "porteTrois");

        this.debutZombie1 = this.tilemap.findObject("Objects", obj => obj.name === "zombieUn");
        this.debutZombie2 = this.tilemap.findObject("Objects", obj => obj.name === "zombieDeux");
        this.debutZombie3 = this.tilemap.findObject("Objects", obj => obj.name === "zombieTrois");
        this.debutZombie4 = this.tilemap.findObject("Objects", obj => obj.name === "zombieQuatre");
        this.debutZombie5 = this.tilemap.findObject("Objects", obj => obj.name === "zombieCinq");
        this.debutZombie6 = this.tilemap.findObject("Objects", obj => obj.name === "zombieSix");
        this.debutZombie7 = this.tilemap.findObject("Objects", obj => obj.name === "zombieSept");
        this.debutZombie8 = this.tilemap.findObject("Objects", obj => obj.name === "zombieHuit");
        this.debutZombie9 = this.tilemap.findObject("Objects", obj => obj.name === "zombieNeuf");
        this.debutZombie10 = this.tilemap.findObject("Objects", obj => obj.name === "zombieDix");
        this.debutZombie11 = this.tilemap.findObject("Objects", obj => obj.name === "zombieOnze");
        this.debutZombie12 = this.tilemap.findObject("Objects", obj => obj.name === "zombieDouze");
        this.debutZombie13 = this.tilemap.findObject("Objects", obj => obj.name === "zombieTreize");
        this.debutZombie14 = this.tilemap.findObject("Objects", obj => obj.name === "zombieQuatorze");
        this.debutZombie15 = this.tilemap.findObject("Objects", obj => obj.name === "zombieQuinze");
        this.debutZombie16 = this.tilemap.findObject("Objects", obj => obj.name === "zombieSeize");
        this.debutZombie17 = this.tilemap.findObject("Objects", obj => obj.name === "zombieDixsept");
        this.debutZombie18 = this.tilemap.findObject("Objects", obj => obj.name === "zombieDixhuit");
        this.debutZombie19 = this.tilemap.findObject("Objects", obj => obj.name === "zombieDixneuf");
        this.debutZombie20 = this.tilemap.findObject("Objects", obj => obj.name === "zombieVingt");
        this.debutZombie21 = this.tilemap.findObject("Objects", obj => obj.name === "zombieVingtetun");
        this.debutZombie22 = this.tilemap.findObject("Objects", obj => obj.name === "zombieVingtdeux");
        this.debutZombie23 = this.tilemap.findObject("Objects", obj => obj.name === "zombieVingttrois");
        this.debutZombie24 = this.tilemap.findObject("Objects", obj => obj.name === "zombieVingtquatre");
        this.debutZombie25 = this.tilemap.findObject("Objects", obj => obj.name === "zombieVingtcinq");
        this.debutZombie26 = this.tilemap.findObject("Objects", obj => obj.name === "zombieVingtsix");

        this.worldLayer.setCollisionByProperty({collide : true});

        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);

        jeu.player.vietrois = jeu.scene.add.image(450, 40, "heart").setDepth(2);
        jeu.player.vietrois.setScrollFactor(0);
        jeu.player.viedeux = jeu.scene.add.image(400, 40, "heart").setDepth(2);
        jeu.player.viedeux.setScrollFactor(0);
        jeu.player.vieun = jeu.scene.add.image(350, 40, "heart").setDepth(2);
        jeu.player.vieun.setScrollFactor(0);

        var policeTitre = {
            fontSize: "52px",
            color: "#ff0000",
            fontFamily: "Ma Shan Zheng"
        }
        this.scoreText = jeu.scene.add.text(120, 16, "Fonce!!!", policeTitre);
        this.scoreText.setScrollFactor(0);
        this.scoreText.setDepth(2);

        this.fondScore = jeu.scene.add.image(250, 40, "fondScore").setDepth(1);
        this.fondScore.setScrollFactor(0);
        this.dejaAffiche = false;
        this.boucle = true;
        this.niveau = 1;

        this.centreTourbillon = this.tilemap.findObject("Objects", obj => obj.name === "centreTourbillon");
        this.centreTourbillon2 = this.tilemap.findObject("Objects", obj => obj.name === "centreTourbillon2");
    },
    gererCollider : function(){
        
        this.overlapLayer.setTileIndexCallback(49, this.collectGemme, this); 
        this.overlapLayer.setTileIndexCallback(11,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(12,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(13,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(14,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(25,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(26,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(27,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(28,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(64,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(65,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(67,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(57,this.teleporteUn,this);
        this.overlapLayer.setTileIndexCallback(73,this.teleporteDeux,this);
        this.overlapLayer.setTileIndexCallback(72,this.teleporteTrois,this);
        this.overlapLayer.setTileIndexCallback(71,this.killPlayer,this);

        
        jeu.scene.physics.add.collider(jeu.player.aPlayer, this.worldLayer);
        jeu.scene.physics.add.overlap(jeu.player.aPlayer, this.overlapLayer);

        jeu.scene.physics.add.collider(jeu.zombieTemplate, this.worldLayer);
        jeu.scene.physics.add.overlap(jeu.player.aPlayer, jeu.zombieTemplate, this.attackZombie);

        this.overlapLayer.setTileIndexCallback(10,this.killPlayer,this);
        this.overlapLayer.setTileIndexCallback(23,jeu.boss.initBoss,this);
        this.overlapLayer.setTileIndexCallback(24,jeu.mong.vol,this);

        

    },
    gererCamera : function(){
        jeu.scene.cameras.main.startFollow(jeu.player.aPlayer);
        jeu.scene.cameras.main.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
    },
    collectGemme : function (player, tile){
        jeu.scene.sound.play("gemmeSound", {volume: 0.01});
        this.genererParticules(tile.getCenterX(), tile.getCenterY());
        this.addScoreGemme(tile.properties.typeGem);
        this.overlapLayer.removeTileAt(tile.x,tile.y).destroy();
        this.scoreText.setText("Score: " + jeu.score);
    },
    addScoreGemme : function(item){
        switch(item){
            case "gemRuby":
                jeu.score += 30;
            break;
            case "edge":
            case "google":
            case "node":
            case "jquery":    
                jeu.score += 20;
            break;
            case "atom":
            case "safari":
            case "php":
            case "opera":
                jeu.score += 10;
            break;
            case "clefBleu":
            case "clefJaune":
            case "clefVert":
            case "clefOrange":
                jeu.score += 50;
                jeu.clef = item;
            break;
        }
        if (jeu.clef == "clefBleu" && this.boucle == true){
            this.afficheClef = jeu.scene.add.image(40, 40, "blueKey");
            this.afficheClef.setScrollFactor(0);
            this.afficheClef.setDepth(4);
            this.boucle = false;
            if (jeu.world.indice){
                jeu.world.indice.destroy();
            }
        } 
        if (jeu.clef == "clefOrange" && this.boucle == true){
            this.afficheClef = jeu.scene.add.image(40, 40, "orangeKey");
            this.afficheClef.setScrollFactor(0);
            this.afficheClef.setDepth(4);
            this.boucle = false;
            if (jeu.world.indice){
                jeu.world.indice.destroy();
            }
        } 
        if (jeu.clef == "clefJaune" && this.boucle == true){
            this.afficheClef = jeu.scene.add.image(40, 40, "yellowKey");
            this.afficheClef.setScrollFactor(0);
            this.afficheClef.setDepth(4);
            this.boucle = false;
            if (jeu.world.indice){
                jeu.world.indice.destroy();
            }
        } 
    },
    rotation : function(){
        tourbille = jeu.scene.physics.add.sprite(jeu.world.centreTourbillon.x+32, jeu.world.centreTourbillon.y-32, "tourbillon").setDepth(0);
        tourbille.body.allowGravity = false;
        tourbille.body.immovable = true;
        tourbille.body.moves = false;
        jeu.scene.tweens.add({
            targets: tourbille,
            angle: 360,
            duration: 1000,
            ease: 'Linear',
            repeat: -1,
            yoyo: false
        });
    },
    colliderRotation: function(){
        jeu.scene.physics.add.collider(jeu.player.aPlayer, jeu.world.centreTourbillon);
    },
    rotation2 : function(){
        tourbille2 = jeu.scene.physics.add.sprite(jeu.world.centreTourbillon2.x+32, jeu.world.centreTourbillon2.y-32, "tourbillon2").setDepth(0);
        tourbille2.body.allowGravity = false;
        tourbille2.body.immovable = true;
        tourbille2.body.moves = false;
        jeu.scene.tweens.add({
            targets: tourbille2,
            angle: -360,
            duration: 1000,
            ease: 'Linear',
            repeat: -1,
            yoyo: false
        });
    },
    colliderRotation2: function(){
        jeu.scene.physics.add.collider(jeu.player.aPlayer, jeu.world.centreTourbillon2);
    },
    ascension : function(){
        blockd = jeu.scene.physics.add.image(2112, 208, "block").setDepth(0);
        blockd.body.allowGravity = false;
        blockd.body.immovable = true;
        blockd.body.moves = false;
        jeu.scene.tweens.add({
            targets: blockd,
            y: 600,
            duration: 4000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true
        });
        blockg = jeu.scene.physics.add.image(1985, 500, "block").setDepth(0);
        blockg.body.allowGravity = false;
        blockg.body.immovable = true;
        blockg.body.moves = false;
        jeu.scene.tweens.add({
            targets: blockg,
            y: 850,
            duration: 4000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true
        });
    },
    colliderAscension: function(){
        jeu.scene.physics.add.collider(jeu.player.aPlayer, blockd);
        jeu.scene.physics.add.collider(jeu.player.aPlayer, blockg);
    },
    genererParticules: function(posX, posY){
        var particules = jeu.scene.add.particles("spark");

        var emitter = particules.createEmitter();
            emitter.setPosition(posX, posY);
            emitter.setScale(0.1);
            emitter.setSpeed(180);
            emitter.setBlendMode(Phaser.BlendModes.ADD);
        
        jeu.scene.time.delayedCall(300, function(){
            particules.destroy();
        })
    },
    killPlayer: function(){
        if (!this.gameOver){
            jeu.player.killPlayer();
            this.gameOver = true;
            var policeTitre = {
                fontSize: "52px",
                color: "#ff0000",
                fontFamily: "Ma Shan Zheng"
            }
            if (jeu.heart>0){
                var panel =  "panel"+(Math.floor(Math.random() * 3)+1);
                var tableau = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x, jeu.scene.cameras.main.midPoint.y, panel).setScale(1, 1).setDepth(3);
                var perduText = jeu.scene.add.text(jeu.scene.cameras.main.midPoint.x - 140, jeu.scene.cameras.main.midPoint.y - 140, "Oups tu as perdu!", policeTitre).setDepth(4);
                var perduTextDeux = jeu.scene.add.text(jeu.scene.cameras.main.midPoint.x - 200, jeu.scene.cameras.main.midPoint.y - 50, "Il te reste " + jeu.heart + " vie(s), attention!", policeTitre).setDepth(4);
                var restartBouton = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x, jeu.scene.cameras.main.midPoint.y+100, "validation").setScale(0.2, 0.2).setDepth(4).setInteractive();
                restartBouton.on("pointerdown", function(){
                    restartBouton.destroy();
                    tableau.destroy();
                    perduText.destroy();
                    perduTextDeux.destroy();
                    if (jeu.boss.bigBoss){
                        jeu.boss.antiboucle = true;
                    }

                    jeu.player.isAlive = true;
                    jeu.world.gameOver = false;
                    if(jeu.world.niveau == 1){
                        jeu.player.aPlayer.setPosition(jeu.world.positionDebut.x, jeu.world.positionDebut.y);
                    }
                    if(jeu.world.niveau == 2){
                        jeu.player.aPlayer.setPosition(jeu.world.positionPorteUne.x, jeu.world.positionPorteUne.y);
                    }
                    if(jeu.world.niveau == 3){
                        jeu.player.aPlayer.setPosition(jeu.world.positionPorteDeux.x, jeu.world.positionPorteDeux.y);
                    }
                    if(jeu.world.niveau == 4){
                        jeu.player.aPlayer.setPosition(jeu.world.positionPorteTrois.x, jeu.world.positionPorteTrois.y);
                    }
                    jeu.player.aPlayer.setVelocityX(200);
                    jeu.player.gererDeplacement();
                });
            }else{
                var panel =  "panel"+(Math.floor(Math.random() * 3)+1);
                var tableau = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x, jeu.scene.cameras.main.midPoint.y, panel).setScale(1, 1).setDepth(3);
                jeu.world.gameoverText = jeu.scene.add.text(jeu.scene.cameras.main.midPoint.x - 180, jeu.scene.cameras.main.midPoint.y - 140, "Oups tu n'as plus de vie!", policeTitre).setDepth(4);
                jeu.world.gameoverTextDeux = jeu.scene.add.text(jeu.scene.cameras.main.midPoint.x - 150, jeu.scene.cameras.main.midPoint.y - 50, "Veux tu recommencer le jeu?", policeTitre).setDepth(4);
                var restartBouton = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x, jeu.scene.cameras.main.midPoint.y+100, "validation").setScale(0.2, 0.2).setDepth(4).setInteractive();
                restartBouton.on("pointerup", function(){
                    jeu.score = 0;
                    jeu.heart = 3;
                    jeu.scene.scene.restart();
                }); 
            }
        }
    },
    attackZombie: function(){
        if (jeu.player.isJumping){
            jeu.zombie.detruireZombie();
        }else{
           jeu.world.killPlayer();
        }
    },
    teleporteUn: function(){
        if (jeu.clef == "clefBleu"){
            jeu.player.aPlayer.setPosition(jeu.world.positionPorteUne.x, jeu.world.positionPorteUne.y);
            this.niveau = 2;
            jeu.clef = "";
            this.boucle = true;
            this.afficheClef.destroy();
        }else{
            var policeTitre = {
                fontSize: "52px",
                color: "#ff0000",
                fontFamily: "Ma Shan Zheng"
            }
            if (!this.dejaAffiche){
                var panel =  "panel"+(Math.floor(Math.random() * 3)+1);
                var tableau = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x, jeu.scene.cameras.main.midPoint.y, panel).setScale(1, 1).setDepth(3);
                this.clefText = jeu.scene.add.text(jeu.scene.cameras.main.midPoint.x - 200, jeu.scene.cameras.main.midPoint.y - 80, "Il te manque la clef bleu!!!", policeTitre).setDepth(4);
                var restartBouton = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x, jeu.scene.cameras.main.midPoint.y+100, "validation").setScale(0.2, 0.2).setDepth(4).setInteractive();
                this.dejaAffiche = true;
                restartBouton.on("pointerdown", function(){
                restartBouton.destroy();
                tableau.destroy();
                jeu.world.clefText.destroy();
                this.dejaAffiche = false;
                });
            }
        }
    },
    teleporteDeux: function(){
        if (jeu.clef == "clefOrange"){
            jeu.player.aPlayer.setPosition(jeu.world.positionPorteDeux.x, jeu.world.positionPorteDeux.y);
            this.niveau = 3;
            jeu.clef = "";
            this.boucle = true;
            this.afficheClef.destroy();
        }else{
            var policeTitre = {
                fontSize: "52px",
                color: "#ff0000",
                fontFamily: "Ma Shan Zheng"
            }
            if (!this.dejaAffiche2){
                var panel =  "panel"+(Math.floor(Math.random() * 3)+1);
                var tableau = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x, jeu.scene.cameras.main.midPoint.y, panel).setScale(1, 1).setDepth(3);
                this.clefText = jeu.scene.add.text(jeu.scene.cameras.main.midPoint.x - 140, jeu.scene.cameras.main.midPoint.y - 140, "Il te manque la clef orange!!!", policeTitre).setDepth(4);
                var restartBouton = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x, jeu.scene.cameras.main.midPoint.y+100, "validation").setScale(0.2, 0.2).setDepth(4).setInteractive();
                this.dejaAffiche2 = true;
                restartBouton.on("pointerdown", function(){
                restartBouton.destroy();
                tableau.destroy();
                jeu.world.clefText.destroy();
                this.dejaAffiche2 = false;
                });
            }
        }
    },
    teleporteTrois: function(){
        if (jeu.clef == "clefJaune"){
            jeu.player.aPlayer.setPosition(jeu.world.positionPorteTrois.x, jeu.world.positionPorteTrois.y);
            this.niveau = 4;
            jeu.clef = "";
            this.boucle = true;
            this.afficheClef.destroy();
        }else{
            var policeTitre = {
                fontSize: "52px",
                color: "#ff0000",
                fontFamily: "Ma Shan Zheng"
            }
            if (!this.dejaAffiche3){
                var panel =  "panel"+(Math.floor(Math.random() * 3)+1);
                var tableau = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x, jeu.scene.cameras.main.midPoint.y, panel).setScale(1, 1).setDepth(3);
                this.clefText = jeu.scene.add.text(jeu.scene.cameras.main.midPoint.x - 140, jeu.scene.cameras.main.midPoint.y - 140, "Il te manque la clef jaune!!!", policeTitre).setDepth(4);
                var restartBouton = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x, jeu.scene.cameras.main.midPoint.y+100, "validation").setScale(0.2, 0.2).setDepth(4).setInteractive();
                this.dejaAffiche3 = true;
                restartBouton.on("pointerdown", function(){
                restartBouton.destroy();
                tableau.destroy();
                jeu.world.clefText.destroy();
                this.dejaAffiche3 = false;
                });
            }
        }
    }
    
}
