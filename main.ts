controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    music.beat()
    bird.vy = -100
})
function spawnBottemTree() {
    obsticleBottom = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . b b b b . . . . . . . . . .
        . . . . . . . . b b d d d d b b . . . . . . . .
        . . . . . . . b d d b b b b d d b . . . . . . .
        . . . . . . b d b b d d d d b b d b . . . . . .
        . . . . . b d b b d b b b b d b b d b . . . . .
        . . . . . b d b d b d d d d b d b d b . . . . .
        . . . . . c d b b d b b b b d b b d c . . . . .
        . . . . . c b d b b d d d d b b d b c . . . . .
        . . . . . e f b d d b b b b d d b c e . . . . .
        . . . . . e e f f b d d d d b c c e e . . . . .
        . . . . . e e e e f f c c c c e e e . . . . . .
        . . . . . c e e e e e e e e e e e e . . . . . .
        . . . . . c e e e e e e e e e e e e . . . . . .
        . . . . . f e e e e e e e e e e e e . . . . . .
        . . . . . c c e e e e e e e e e e e . . . . . .
        . . . . . . f e e e e e e e e e e e . . . . . .
        . . . . . 6 f c e e e e e e e e e e 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . .
        . . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 7 7 e c e e . . . .
        . . . . . . e e 6 e e e e e e 6 e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e c f . . . . .
        . . . . . . c e e e e e e e e e e c f . . . . .
        . . . . . . c e e e e e e e e e e f f . . . . .
        . . . . . . f e e e e e e e e e e f e . . . . .
        . . . . . 6 f e e e e e e e e e e f 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . .
        . . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 6 7 e e . . . . . .
        . . . . . . e e 6 e e e e e e 6 c e . . . . . .
        . . . . . . e e f e e e e e e e c e . . . . . .
        . . . . . . e e c e e e e e e e c e . . . . . .
        . . . . . . e e c e e e e e e e f e . . . . . .
        . . . . . . e e c e e e e e e e f e . . . . . .
        . . . . . . e e e e e e e e e e f e . . . . . .
        . . . . . . e e e e e e e e e e c e . . . . . .
        . . . . . 6 e e e e e e e e e e c e 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . .
        . . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . c e 7 7 e e e e 6 7 e e . . . . . .
        . . . . . . c e 6 e e e e e e 6 e e . . . . . .
        . . . . . . c e e e e e e e e e e e . . . . . .
        . . . . . . f c c e e e e e e c e e . . . . . .
        . . . . . . f c c c e e e c e c c e . . . . . .
        . . . . . . f c c e e e c c e c c c . . . . . .
        . . . . . . f c c c e e c c e c c c . . . . . .
        . . . . . . f c c c c c e c e e c c . . . . . .
        . . . . . 6 f c c c c c c c c c c f 6 . . . . .
        . . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . .
        . . . 6 7 7 6 6 7 6 c c c c 6 7 6 6 7 7 6 . . .
        . . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . c c 7 7 c c c c 6 7 c f . . . . . .
        . . . . . . c c 6 c c c c c c 6 c f . . . . . .
    `, SpriteKind.Enemy)
    obsticleBottom.setPosition(scene.screenWidth(), 90)
    obsticleBottom.vx = -25
}
function spawnTopTree() {
    obsticleTop = sprites.create(img`
        . . . . . 6 f c e e e e e e e e e e 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . .
        . . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 7 7 e c e e . . . .
        . . . . . . e e 6 e e e e e e 6 e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e c f . . . . .
        . . . . . . c e e e e e e e e e e c f . . . . .
        . . . . . . c e e e e e e e e e e f f . . . . .
        . . . . . . f e e e e e e e e e e f e . . . . .
        . . . . . 6 f e e e e e e e e e e f 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . .
        . . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 6 7 e e e e . . . .
        . . . . . . e e 6 e e e e e e 6 c e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e c f . . . . .
        . . . . . . e e e e e e e e e e e c f . . . . .
        . . . . . . e e e e e e e e e e e f f . . . . .
        . . . . . . f e e e e e e e e e e f e . . . . .
        . . . . . 6 f e e e e e e e e e e f 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . .
        . . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 6 7 e e . . . . . .
        . . . . . . e e 6 e e e e e e 6 c e . . . . . .
        . . . . . . e e f e e e e e e e c e . . . . . .
        . . . . . . e e c e e e e e e e c e . . . . . .
        . . . . . . e e c e e e e e e e f e . . . . . .
        . . . . . . e e c e e e e e e e f e . . . . . .
        . . . . . . e e e e e e e e e e f e . . . . . .
        . . . . . . e e e e e e e e e e c e . . . . . .
        . . . . . 6 e e e e e e e e e e c e 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . .
        . . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . c e 7 7 e e e e 6 7 e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . b e e e e e e e e e e b . . . . . .
        . . . . . . . b e e e e e e e e b . . . . . . .
        . . . . . . . . b e e e e e e b . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    obsticleTop.setPosition(scene.screenWidth(), 25)
    obsticleTop.vx = -25
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let obsticleTop: Sprite = null
let obsticleBottom: Sprite = null
let bird: Sprite = null
scene.setBackgroundColor(9)
bird = sprites.create(img`
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 b c 5 5 d 4 c . .
    . b b b b 5 5 5 b f d d 4 4 4 b
    . b d 5 b 5 5 b c b 4 4 4 4 b .
    . . b 5 5 b 5 5 5 4 4 4 4 b . .
    . . b d 5 5 b 5 5 5 5 5 5 b . .
    . b d b 5 5 5 d 5 5 5 5 5 5 b .
    b d d c d 5 5 b 5 5 5 5 5 5 b .
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
bird.ay = 200
info.setScore(0)
game.onUpdateInterval(2000, function () {
    if (Math.random() < 0.5) {
        spawnTopTree()
    } else {
        spawnBottemTree()
    }
})
game.onUpdate(function () {
    if (bird.y() < 0) {
        game.over(false)
    }
    if (bird.y() > scene.screenHeight()) {
        game.over(false)
    }
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
 