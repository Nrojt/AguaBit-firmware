let state = 0
let textInput = ""
let slot1 = ""
let slot2 = ""
let slot3 = ""
let ph_value = 69.69
let temp_value = 42.34
basic.forever(function on_forever() {
    
    while (state == 0) {
        basic.showIcon(IconNames.StickFigure)
        textInput = serial.readString()
        if (textInput.charAt(0) == "C") {
            state = 1
            break
        } else if (textInput.charAt(0) == "M") {
            state = 2
            break
        }
        
    }
    while (state == 1) {
        basic.showIcon(IconNames.SmallHeart)
        slot1 = "" + textInput.charAt(1) + textInput.charAt(2)
        slot2 = "" + textInput.charAt(3) + textInput.charAt(4)
        slot3 = "" + textInput.charAt(5) + textInput.charAt(6)
        if (slot1.charAt(0) == "E" || slot1.charAt(0) == "P" || slot1.charAt(0) == "T") {
            basic.showString(slot1)
            pause(200)
            textInput = ""
            state = 0
            break
        }
        
    }
    while (state == 2) {
        basic.showIcon(IconNames.House)
        if (slot1 == "EM") {
            serial.writeLine("EMPTY")
        } else if (slot1 == "PH") {
            serial.writeLine("" + ("" + ph_value))
        } else if (slot1 == "TP") {
            serial.writeLine("" + ("" + temp_value))
        }
        
        if (slot2 == "EM") {
            serial.writeLine("EMPTY")
        } else if (slot2 == "PH") {
            serial.writeLine("" + ("" + ph_value))
        } else if (slot2 == "TP") {
            serial.writeLine("" + ("" + temp_value))
        }
        
        if (slot3 == "EM") {
            serial.writeLine("EMPTY")
        } else if (slot3 == "PH") {
            serial.writeLine("" + ("" + ph_value))
        } else if (slot3 == "TP") {
            serial.writeLine("" + ("" + temp_value))
        }
        
        pause(200)
        state = 0
    }
})
