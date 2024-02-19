def 点数を表示(数値: number):
    global 変数
    変数 = 0
    for index in range(len(("" + str(数値)))):
        doSomething(("" + str(数値)).char_at(変数))
        変数 += 1
def Gameover():
    global 判断
    判断 = 1
    スプライト.delete()
    敵1.delete()
    basic.show_leds("""
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(100)
    basic.show_leds("""
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(100)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        """)
    basic.pause(100)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        """)
    basic.pause(100)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    basic.pause(100)
    basic.show_leds("""
        . # # . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        """)
    basic.show_leds("""
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        """)
    basic.show_leds("""
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        """)
    basic.show_leds("""
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        """)
    basic.show_leds("""
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    点数を表示(点数)
    basic.pause(1000)
    判断 = 2

def on_button_pressed_a():
    スプライト.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def doSomething(テキスト: str):
    if parse_float("" + テキスト) == 1:
        basic.show_number(1)
    elif parse_float("" + テキスト) == 2:
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            """)
    elif parse_float("" + テキスト) == 3:
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            """)
    elif parse_float("" + テキスト) == 4:
        basic.show_leds("""
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            """)
    elif parse_float("" + テキスト) == 5:
        basic.show_leds("""
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            """)
    elif parse_float("" + テキスト) == 6:
        basic.show_leds("""
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            """)
    elif parse_float("" + テキスト) == 7:
        basic.show_leds("""
            . # # # .
            . # . # .
            . . . # .
            . . . # .
            . . . # .
            """)
    elif parse_float("" + テキスト) == 8:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            """)
    elif parse_float("" + テキスト) == 9:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            """)
    else:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            """)

def on_button_pressed_ab():
    global 点数, スプライト, 判断
    点数 = 0
    if 判断 == 2:
        game.add_score(1)
        basic.pause(100)
        game.add_score(1)
        basic.pause(100)
        game.add_score(1)
        スプライト = game.create_sprite(2, 4)
        判断 = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    スプライト.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

敵1: game.LedSprite = None
変数 = 0
判断 = 0
スプライト: game.LedSprite = None
点数 = 0
点数 = 0
スプライト = game.create_sprite(2, 4)
判断 = 0

def on_forever():
    global 敵1, 点数
    if 判断 == 0:
        basic.pause((100 - 点数 * 2) * 20 + 10)
        敵1 = game.create_sprite(randint(0, 4), 0)
        basic.pause((100 - 点数 * 2) * 10 + 25)
        for index2 in range(4):
            敵1.change(LedSpriteProperty.Y, 1)
            basic.pause(50)
        if 敵1.is_touching(スプライト):
            Gameover()
        else:
            点数 += 1
        敵1.delete()
basic.forever(on_forever)

def on_forever2():
    if 判断 == 2:
        if 判断 == 2:
            basic.show_leds("""
                . . # . .
                . # . # .
                . # # # .
                . # . # .
                . # . # .
                """)
        if 判断 == 2:
            basic.show_leds("""
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                """)
        if 判断 == 2:
            basic.show_leds("""
                . # # . .
                . # . # .
                . # # . .
                . # . # .
                . # # . .
                """)
        if 判断 == 2:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
basic.forever(on_forever2)
