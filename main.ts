function 点数を表示 (数値: number) {
    変数 = 0
    for (let index = 0; index < ("" + 数値).length; index++) {
        doSomething(("" + 数値).charAt(変数))
        変数 += 1
    }
}
function Gameover () {
    判断 = 1
    スプライト.delete()
    敵1.delete()
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    点数を表示(点数)
    basic.pause(1000)
    判断 = 2
}
input.onButtonPressed(Button.A, function () {
    スプライト.change(LedSpriteProperty.X, -1)
})
function doSomething (テキスト: string) {
    if (parseFloat("" + テキスト) == 1) {
        basic.showNumber(1)
    } else if (parseFloat("" + テキスト) == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (parseFloat("" + テキスト) == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (parseFloat("" + テキスト) == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (parseFloat("" + テキスト) == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (parseFloat("" + テキスト) == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (parseFloat("" + テキスト) == 7) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (parseFloat("" + テキスト) == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (parseFloat("" + テキスト) == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    点数 = 0
    if (判断 == 2) {
        game.addScore(1)
        basic.pause(100)
        game.addScore(1)
        basic.pause(100)
        game.addScore(1)
        スプライト = game.createSprite(2, 4)
        判断 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    スプライト.change(LedSpriteProperty.X, 1)
})
let 敵1: game.LedSprite = null
let 変数 = 0
let 判断 = 0
let スプライト: game.LedSprite = null
let 点数 = 0
点数 = 0
スプライト = game.createSprite(2, 4)
判断 = 0
basic.forever(function () {
    if (判断 == 0) {
        basic.pause((100 - 点数 * 2) * 20 + 10)
        敵1 = game.createSprite(randint(0, 4), 0)
        basic.pause((100 - 点数 * 2) * 10 + 25)
        for (let index = 0; index < 4; index++) {
            敵1.change(LedSpriteProperty.Y, 1)
            basic.pause(50)
        }
        if (敵1.isTouching(スプライト)) {
            Gameover()
        } else {
            点数 += 1
        }
        敵1.delete()
    }
})
basic.forever(function () {
    if (判断 == 2) {
        if (判断 == 2) {
            basic.showLeds(`
                . . # . .
                . # . # .
                . # # # .
                . # . # .
                . # . # .
                `)
        }
        if (判断 == 2) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        }
        if (判断 == 2) {
            basic.showLeds(`
                . # # . .
                . # . # .
                . # # . .
                . # . # .
                . # # . .
                `)
        }
        if (判断 == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
