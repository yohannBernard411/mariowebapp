var config = {
    type : Phaser.AUTO,
    width: 1500,
    height: 650,
    backgroundColor: "#ccccff",
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade:{
            gravity: {
                y: 500
            }
        }
    }
}
const game = new Phaser.Game(config);
