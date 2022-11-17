let state = 0
let slotInput = "your mom"
let textInput = "B"
let slot1 = "EM"
let slot2 = "EM"
let slot3 = "EM"
let ph_value = 69.69
let temp_value = 45.45
basic.forever(function () {
    while (state == 0) {
        basic.showIcon(IconNames.StickFigure)
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
        basic.showString(slotInput)
        slot1 = "" + slotInput.charAt(0) + slotInput.charAt(1)
        slot2 = "" + slotInput.charAt(2) + slotInput.charAt(3)
        slot3 = "" + slotInput.charAt(4) + slotInput.charAt(5)
        if (slot1 == "EM") {
            serial.writeLine("" + 0)
            basic.showIcon(IconNames.Skull)
        } else if (slot1 == "PH") {
            serial.writeLine("" + ph_value)
            basic.showIcon(IconNames.Cow)
        } else if (slot1 == "TP") {
            serial.writeLine("" + temp_value)
            basic.showIcon(IconNames.LeftTriangle)
        } else {
            serial.writeNumber(33.33)
            basic.showIcon(IconNames.Ghost)
        }
        pause(10000)
state = 0
        break;
    }
})
