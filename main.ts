input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 100))
})
input.onButtonPressed(Button.B, function () {
	
})
basic.showString("THAL300")
basic.showLeds(`
    # # # # #
    . . . . .
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showIcon(IconNames.Happy)
