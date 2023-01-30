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
let Ties = 0
let Rounds = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
PA = 0
PB = 0
Rounds = 0
Ties = 0
OLED.writeStringNewLine("Shall we play a game?")
basic.pause(2000)
showscoreboard()
