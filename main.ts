let slot3 = "EM"
let slot2 = "EM"
let slot1 = "EM"
let textInput = ""
let state = 0
let ph_value = 11.11
let temp_value = 22.22
basic.forever(function on_forever() {
    let slot1phstring: string;
    let slot1tmpstring: string;
    let slot2phstring: string;
    let slot2tmpstring: string;
    let slot3phstring: string;
    let slot3tmpstring: string;
    
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
        if (slot1 == "EM") {
            serial.writeString("Empty")
        } else if (slot1 == "PH") {
            slot1phstring = "" + ("" + ("" + pins.analogReadPin(AnalogPin.P0)))
            serial.writeString("0" + slot1phstring.charAt(0) + slot1phstring.charAt(1) + "." + slot1phstring.charAt(2) + slot1phstring.charAt(3))
        } else if (slot1 == "TP") {
            slot1tmpstring = "" + ("" + ("" + dstemp.celsius(DigitalPin.P0)) + "0")
            serial.writeString("" + slot1tmpstring.charAt(0) + slot1tmpstring.charAt(1) + slot1tmpstring.charAt(2) + slot1tmpstring.charAt(3) + slot1tmpstring.charAt(4))
        }
        
        if (slot2 == "EM") {
            serial.writeString("Empty")
        } else if (slot2 == "PH") {
            slot2phstring = "" + ("" + ("" + pins.analogReadPin(AnalogPin.P1)))
            serial.writeString("0" + slot2phstring.charAt(0) + "." + slot2phstring.charAt(1) + slot2phstring.charAt(2))
        } else if (slot2 == "TP") {
            slot2tmpstring = "" + ("" + ("" + dstemp.celsius(DigitalPin.P1)) + "0")
            serial.writeString("" + slot2tmpstring.charAt(0) + slot2tmpstring.charAt(1) + slot2tmpstring.charAt(2) + slot2tmpstring.charAt(3) + slot2tmpstring.charAt(4))
        }
        
        if (slot3 == "EM") {
            serial.writeString("Empty")
        } else if (slot3 == "PH") {
            slot3phstring = "" + ("" + ("" + pins.analogReadPin(AnalogPin.P2)))
            serial.writeString("0" + slot3phstring.charAt(0) + "." + slot3phstring.charAt(1) + slot3phstring.charAt(3))
        } else if (slot3 == "TP") {
            slot3tmpstring = "" + ("" + ("" + dstemp.celsius(DigitalPin.P2)) + "0")
            serial.writeString("" + slot3tmpstring.charAt(0) + slot3tmpstring.charAt(1) + slot3tmpstring.charAt(2) + slot3tmpstring.charAt(3) + slot3tmpstring.charAt(4))
        }
        
        pause(200)
        state = 0
    }
})
