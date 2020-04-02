var mong = {
    fiere: null,
    ie: null,
    antiboucle: false,
    antiboucle2: false,
    dejaAffiche: false,
    

    initvol: function(){
        if (!jeu.mong.antiboucle2){
            jeu.mong.antiboucle2 = true;
            this.fiere = jeu.scene.physics.add.sprite(340, 2000, "mongolfiere").setScale(1.6);
            jeu.scene.physics.add.collider(this.fiere, jeu.world.worldLayer);
        }
    },
    vol: function(){
        if (jeu.boss.bigBoss.life<=0 && jeu.mong.antiboucle==false){
            jeu.mong.antiboucle=true;
            jeu.mong.animation();
        }
    },
    animation: function(){
        bulle = jeu.scene.add.image(450, 2820, "dial").setDepth(4).setScale(0.5);
        var policeTitre = {
            fontSize: "14px",
            color: "#0000ff",
            //fontFamily: "Ma Shan Zheng"
        }
        var texte1 = jeu.scene.add.text(350,2700, "Oups! je ne peux pas décoller,", policeTitre).setDepth(5);
        var texte2 = jeu.scene.add.text(330,2740, "ma mongolfiére est trop lourde!", policeTitre).setDepth(5);
        var texte3 = jeu.scene.add.text(320,2780, "Peux tu m'aider à jetter quelque", policeTitre).setDepth(5);
        var texte4 = jeu.scene.add.text(330,2820, "chose,de lourd et inutile ?", policeTitre).setDepth(5);
        var restartBouton = jeu.scene.add.sprite(450,2860, "validation").setScale(0.1, 0.1).setDepth(4).setInteractive();
        restartBouton.on("pointerdown", function(){
            restartBouton.destroy();
            texte1.destroy();
            texte2.destroy();
            texte3.destroy();
            texte4.destroy();
            bulle.destroy();
            // lancer animation internet explorer et recaler personnage dans panier avant decollage!
            var tempo = window.setTimeout(alleger, 20);
            var tempo2 = window.setTimeout(alleger, 3000);
            var tempo3 = window.setTimeout(alleger, 4000);
            function alleger(){
                this.ie = jeu.scene.physics.add.sprite(320, 2900, "ie").setScale(0.2).setBounce(0.5);
                jeu.scene.physics.add.collider(this.ie, jeu.world.worldLayer);
                var avancer = jeu.scene.tweens.add({
                    targets : this.ie,
                    x : Math.floor(Math.random() * 1000),
                    ease : "Linear",
                    duration : 2000,
                    yoyo : false,
                    repeat : 0,
                    onStart : function (){},
                    onComplete : function (){},
                    onYoyo : function (){},
                    onRepeat : function (){}
                });   
                var rebondir = jeu.scene.tweens.add({
                    targets : this.ie,
                    y : -100,
                    ease : "Elastic",
                    duration : 100,
                    yoyo : true,
                    repeat : 3,
                    onStart : function (){},
                    onComplete : function (){},
                    onYoyo : function (){},
                    onRepeat : function (){}
                });   
                var tourner = jeu.scene.tweens.add({
                    targets : this.ie,
                    angle : 360,
                    ease : "Linear",
                    duration : 2000,
                    yoyo : false,
                    repeat : 0,
                    onStart : function (){},
                    onComplete : function (){},
                    onYoyo : function (){},
                    onRepeat : function (){}
                });  
            }
            var tempo4 = window.setTimeout(decollage, 6000);
            function decollage(){
                jeu.player.aPlayer.setPosition(352, 3050);
                jeu.scene.cameras.main.stopFollow(jeu.player.aPlayer);
                var partir = jeu.scene.tweens.add({
                    targets : jeu.player.aPlayer,
                    y : -3000,
                    ease : "Linear",
                    duration : 10000,
                    yoyo : false,
                    repeat : 0,
                    onStart : function (){},
                    onComplete : function (){},
                    onYoyo : function (){},
                    onRepeat : function (){}
                });  
                var partir2 = jeu.scene.tweens.add({
                    targets : jeu.mong.fiere,
                    y : -3000,
                    ease : "Linear",
                    duration : 10000,
                    yoyo : false,
                    repeat : 0,
                    onStart : function (){},
                    onComplete : function (){},
                    onYoyo : function (){},
                    onRepeat : function (){}
                }); 
            } 
            // puis une fois la mongolfiere partie afficher tableau fin!
            var tempo4 = window.setTimeout(affiche, 6000);
            function affiche(){
                var policeTitre = {
                    fontSize: "52px",
                    color: "#ff0000",
                    fontFamily: "Ma Shan Zheng"
                }
                if (!jeu.mong.dejaAffiche){
                    var panel =  "panel"+(Math.floor(Math.random() * 3)+1);
                    var tableau = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x, jeu.scene.cameras.main.midPoint.y, panel).setScale(1, 1).setDepth(3);
                    this.Text1 = jeu.scene.add.text(jeu.scene.cameras.main.midPoint.x - 140, jeu.scene.cameras.main.midPoint.y - 140, "Bravo tu as fini", policeTitre).setDepth(4);
                    this.Text2 = jeu.scene.add.text(jeu.scene.cameras.main.midPoint.x - 140, jeu.scene.cameras.main.midPoint.y - 60, "Veux tu rejoure?", policeTitre).setDepth(4);
                    var rejouerBouton = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x-50, jeu.scene.cameras.main.midPoint.y+100, "oui").setScale(0.2, 0.2).setDepth(4).setInteractive();
                    var quitterBouton = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x+50, jeu.scene.cameras.main.midPoint.y+100, "non").setScale(0.2, 0.2).setDepth(4).setInteractive();
                    this.dejaAffiche = true;
                    rejouerBouton.on("pointerdown", function(){
                        jeu.boss.antiboucle = false;
                        jeu.mong.antiboucle2 = false;
                        jeu.mong.antiboucle = false;
                        jeu.scene.scene.remove(jeu);
                        jeu.scene.scene.restart();
                    });
                   quitterBouton.on("pointerdown", function(){
                    jeu.scene.scene.remove(jeu);
                    });
                }
            }
        });

    }
}