let slotInput = ""
let state = 0
let textInput = "B"
let slot1 = "AB"
let slot2 = "AB"
let slot3 = "AB"
let ph_value = 69.69
let temp_value = 45.45
basic.forever(function on_forever() {
    
    while (state == 0) {
        basic.showIcon(IconNames.StickFigure)
        textInput = serial.readString()
        if (textInput.indexOf("M") >= 0) {
            state = 1
            break
        } else if (textInput.indexOf("C") >= 0) {
            state = 2
            break
        }
        
    }
    while (state == 1) {
        basic.showIcon(IconNames.Heart)
        slotInput = serial.readString()
        slot1 = "" + slotInput.charAt(0) + slotInput.charAt(1)
        slot2 = "" + slotInput.charAt(2) + slotInput.charAt(3)
        slot3 = "" + slotInput.charAt(4) + slotInput.charAt(5)
        if (slot1.charAt(0) == "E" || "P" || "T") {
            basic.showIcon(IconNames.Yes)
            serial.writeNumber(0)
            if (slot1 == "EM") {
                serial.writeLine("" + ("" + 0))
            } else if (slot1 == "PH") {
                serial.writeLine("" + ("" + ph_value))
            } else if (slot1 == "TP") {
                serial.writeLine("" + ("" + temp_value))
            }
            
            if (slot2 == "EM") {
                serial.writeLine("" + ("" + 0))
            } else if (slot2 == "PH") {
                serial.writeLine("" + ("" + ph_value))
            } else if (slot2 == "TP") {
                serial.writeLine("" + ("" + temp_value))
            }
            
            if (slot3 == "EM") {
                serial.writeLine("" + ("" + 0))
            } else if (slot3 == "PH") {
                serial.writeLine("" + ("" + ph_value))
            } else if (slot3 == "TP") {
                serial.writeLine("" + ("" + temp_value))
            }
            
        }
        
        pause(100)
    }
})
