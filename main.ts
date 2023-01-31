function showscoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A: " + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B: " + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
}
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.pause(1000)
    basic.clearScreen()
    PA += 1
    Rounds += 1
    showscoreboard()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    basic.pause(1000)
    basic.clearScreen()
    Ties += 1
    Rounds += 1
    showscoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.pause(1000)
    basic.clearScreen()
    PB += 1
    Rounds += 1
    showscoreboard()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Rounds = 0
    Ties = 0
    OLED.writeStringNewLine("Shall we play a game?")
    basic.pause(2000)
    showscoreboard()
}
let Rounds = 0
let Ties = 0
let PB = 0
let PA = 0
reset()
