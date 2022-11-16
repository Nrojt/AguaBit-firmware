let slotInput = ""
let state = 0
let textInput = "B"
let slot1 = "EM"
let slot2 = "EM"
let slot3 = "EM"
let ph_value = 69.69
let temp_value = 45.45
while (state == 0) {
    textInput = serial.readString()
    if (textInput.indexOf("M") >= 0) {
        state = 1
        break;
    } else if (textInput.indexOf("C") >= 0) {
        state = 2
        break;
    }
}
while (state == 1) {
    basic.showIcon(IconNames.Heart)
    slotInput = serial.readString()
    slot1 = "" + slotInput.charAt(0) + slotInput.charAt(1)
    slot2 = "" + slotInput.charAt(2) + slotInput.charAt(3)
    slot3 = "" + slotInput.charAt(4) + slotInput.charAt(5)
    if (slot1 == "EM") {
        serial.writeLine("" + 0)
    } else if (slot1 == "PH") {
        serial.writeLine("" + ph_value)
    } else if (slot1 == "TP") {
        serial.writeLine("" + temp_value)
    }
    pause(2000)
state = 0
    break;
}
