let textInput = ""
let state = 0
let slot3 = "EM"
let slot2 = "EM"
let slot1 = "EM"
let ph_value = 11.11
let temp_value = 22.22
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
            pause(200)
            textInput = ""
            state = 0
            break
        }
        
    }
    while (state == 2) {
        basic.showIcon(IconNames.Heart)
        if (slot1 == "PH") {
            serial.writeNumber(pins.analogReadPin(AnalogPin.P0))
            serial.writeString("|")
        } else if (slot1 == "TP") {
            serial.writeNumber(dstemp.celsius(DigitalPin.P0))
            serial.writeString("|")
        } else {
            serial.writeString("Empty|")
        }
        
        if (slot2 == "PH") {
            serial.writeNumber(pins.analogReadPin(AnalogPin.P1))
            serial.writeString("|")
        } else if (slot2 == "TP") {
            serial.writeNumber(dstemp.celsius(DigitalPin.P1))
            serial.writeString("|")
        } else {
            serial.writeString("Empty|")
        }
        
        if (slot3 == "PH") {
            serial.writeNumber(pins.analogReadPin(AnalogPin.P2))
        } else if (slot3 == "TP") {
            serial.writeNumber(dstemp.celsius(DigitalPin.P2))
        } else {
            serial.writeString("Empty")
        }
        
        serial.writeString("!")
        pause(200)
        state = 0
    }
})
