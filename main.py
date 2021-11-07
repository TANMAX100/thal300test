def on_gesture_free_fall():
    pass
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

basic.show_string("THAL300")
basic.show_leds("""
    # # # # #
        . . . . .
        # . . . #
        . # . # .
        . . # . .
""")
basic.show_icon(IconNames.HAPPY)