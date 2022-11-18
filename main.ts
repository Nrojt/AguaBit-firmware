let state = 0
let textInput = "B"
let slot1 = "AB"
let slot2 = "AB"
let slot3 = "AB"
let ph_value = 69.69
let temp_value = 45.45
basic.forever(function on_forever() {
    let slot12: string;
    let slot22: any;
    let slot32: any;
    
    while (state == 0) {
        basic.showIcon(IconNames.StickFigure)
        textInput = serial.readString()
        if (textInput.indexOf("X") >= 0) {
            state = 2
            break
        } else if (textInput.indexOf("Y") >= 0) {
            state = 1
            break
        }
        
    }
    while (state == 1) {
        basic.showIcon(IconNames.SmallHeart)
        slot12 = "" + textInput.charAt(1) + textInput.charAt(2)
        slot22 = "" + textInput.charAt(3) + textInput.charAt(4)
        slot32 = "" + textInput.charAt(5) + textInput.charAt(6)
        if (slot12.charAt(0) == "E" || slot12.charAt(0) == "P" || slot12.charAt(0) == "T") {
            basic.showString(slot12)
            pause(200)
            textInput = "B"
            state = 0
            break
        }
        
    }
    while (state == 2) {
        basic.showIcon(IconNames.House)
        if (slot12 == "EM") {
            serial.writeLine("" + ("" + 0))
        } else if (slot12 == "PH") {
            serial.writeLine("" + ("" + ph_value))
        } else if (slot12 == "TP") {
            serial.writeLine("" + ("" + temp_value))
        }
        
        if (slot22 == "EM") {
            serial.writeLine("" + ("" + 0))
        } else if (slot22 == "PH") {
            serial.writeLine("" + ("" + ph_value))
        } else if (slot22 == "TP") {
            serial.writeLine("" + ("" + temp_value))
        }
        
        if (slot32 == "EM") {
            serial.writeLine("" + ("" + 0))
        } else if (slot32 == "PH") {
            serial.writeLine("" + ("" + ph_value))
        } else if (slot32 == "TP") {
            serial.writeLine("" + ("" + temp_value))
        }
        
    }
})
