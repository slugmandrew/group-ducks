enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    // What do we need to check here?
    // 
    // WHat do we need inside the IF and ELSE blocks?
    if (true) {
    	
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    if (hasDuck) {
        sendTo = randint(1, players)
        if (sendTo != ID) {
            hasDuck = false
            basic.clearScreen()
            radio.sendNumber(sendTo)
        }
    }
})
let sendTo = 0
let hasDuck = false
let ID = 0
let players = 0
radio.setGroup(42)
// Number of players in game
players = 3
// change this number for each player
ID = 1
basic.showNumber(ID)
if (ID == 1) {
    hasDuck = true
} else {
    hasDuck = false
}
