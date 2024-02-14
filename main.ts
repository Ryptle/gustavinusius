let mySprite: Sprite = null
forever(function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f f 3 3 f f . . . . . . 
        . . . . f 3 3 3 3 f . . . . . . 
        . . . . f 3 3 3 3 f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . . f 3 3 3 3 f . . . . . . 
        . . . . f 3 3 3 3 f . . . . . . 
        . . . f f f 3 3 3 f f f . . . . 
        . . f f 3 3 3 3 3 3 3 f . . . . 
        . . f 3 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f f 3 3 3 3 3 3 3 3 f . . . 
        . . . f f 3 3 f f f f f . . . . 
        . . . . f f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    music.play(music.createSoundEffect(WaveShape.Noise, 1449, 4035, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
