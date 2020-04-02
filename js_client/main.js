var jeu = {
    scene: null,
    world: world,
    player: player,
    cursor: null,
    zombieTemplate: zombieTemplate,
    score: 0,
    heart: 3,
    boss: boss,
    mong: mong,
}

function preload(){
    jeu.scene = this;
    jeu.scene.load.image("tiles", "platformPack_tilesheet.png");
    jeu.scene.load.tilemapTiledJSON("map", "plateau.json");
    jeu.scene.load.image("block", "ascenceur.png");
    jeu.scene.load.image("blueKey", "blueKey.png");
    jeu.scene.load.image("orangeKey", "orangeKey.png");
    jeu.scene.load.image("yellowKey", "yellowKey.png");
    jeu.scene.load.image("fondScore", "affichageCadre.png");
    jeu.scene.load.image("heart", "heart.png");
    jeu.scene.load.image("spark", "smoke.png");
    jeu.scene.load.audio("gemmeSound", "impactGem.ogg");
    jeu.scene.load.image("validation", "bouton.png");
    jeu.scene.load.image("slider", "slider.png");
    jeu.scene.load.image("barreDeVie", "barreDeVie.png");
    jeu.scene.load.image("fondDeVie", "fondDeVie.png");

    jeu.scene.load.image("boss1", "repos.png");
    jeu.scene.load.image("boss2", "marche.png");

    jeu.scene.load.image("tourbillon", "tourbillon1.png");
    jeu.scene.load.image("tourbillon2", "tourbillon2.png");

    jeu.scene.load.image("mongolfiere", "mongolfiere.png");
    jeu.scene.load.image("dial", "dial.png");

    jeu.scene.load.atlas("player", "spritesheet.png", "playerAtlas.json");
    jeu.scene.load.atlas("zombie", "spriteDeZombie.png", "zombieAtlas.json");

    jeu.scene.load.image("ie", "ie.png");
    jeu.scene.load.image("oui", "oui.png");
    jeu.scene.load.image("non", "non.png");

    jeu.scene.load.image("panel1", "panel1.png");
    jeu.scene.load.image("panel2", "panel2.png");
    jeu.scene.load.image("panel3", "panel3.png");
    jeu.scene.load.image("panel4", "panel4.png");
    
    
    jeu.world.gameOver = false;
    jeu.player.isAlive = true;
    jeu.player.heart = 3;
    jeu.clef = null;
}
function create(){
    jeu.world.initialiserWorld();
    jeu.player.initialiserPlayer();
    jeu.player.generatePlayerAnimations();
    jeu.zombieTemplate.generateZombieAnimations();

    jeu.zombieTemplate.createZombie(jeu.world.debutZombie1.x,jeu.world.debutZombie1.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie2.x,jeu.world.debutZombie2.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie3.x,jeu.world.debutZombie3.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie4.x,jeu.world.debutZombie4.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie5.x,jeu.world.debutZombie5.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie6.x,jeu.world.debutZombie6.y,700).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie7.x,jeu.world.debutZombie7.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie8.x,jeu.world.debutZombie8.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie9.x,jeu.world.debutZombie9.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie10.x,jeu.world.debutZombie10.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie11.x,jeu.world.debutZombie11.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie12.x,jeu.world.debutZombie12.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie13.x,jeu.world.debutZombie13.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie14.x,jeu.world.debutZombie14.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie15.x,jeu.world.debutZombie15.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie16.x,jeu.world.debutZombie16.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie17.x,jeu.world.debutZombie17.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie18.x,jeu.world.debutZombie18.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie19.x,jeu.world.debutZombie19.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie20.x,jeu.world.debutZombie20.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie21.x,jeu.world.debutZombie21.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie22.x,jeu.world.debutZombie22.y,1500).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie23.x,jeu.world.debutZombie23.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie24.x,jeu.world.debutZombie24.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie25.x,jeu.world.debutZombie25.y,300).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie26.x,jeu.world.debutZombie26.y,300).initZombie();
    
    jeu.world.ascension();
    jeu.world.rotation();
    jeu.world.rotation2();
    jeu.world.gererCollider();
    jeu.cursor = jeu.scene.input.keyboard.createCursorKeys();
    jeu.world.gererCamera();
    jeu.world.colliderAscension();
    jeu.world.colliderRotation();
    jeu.world.colliderRotation2();
    
}

function update(time, delta){
    jeu.player.gererDeplacement();
    ajusterTailleEcran();
}

function ajusterTailleEcran(){
    var canvas = document.querySelector("canvas");
    var fenetreWidth = window.innerWidth;
    var fenetreHeight = window.innerHeight;
    var fenetreRatio = fenetreWidth / fenetreHeight;

    var jeuRatio = config.width / config.height;

    if(fenetreRatio < jeuRatio){
        canvas.style.width = fenetreWidth + "px";
        canvas.style.height = (fenetreWidth / jeuRatio) + "px";
    }else{
        canvas.style.width = (fenetreHeight * jeuRatio) + "px";
        canvas.style.height = fenetreHeight + "px";
    }

}
