textInput = ""
state = 0
slot3 = "EM"
slot2 = "EM"
slot1 = "EM"
ph_value = 11.11
temp_value = 22.22

def on_forever():
    global textInput, state, slot1, slot2, slot3
    while state == 0:
        basic.show_icon(IconNames.STICK_FIGURE)
        textInput = serial.read_string()
        if textInput.char_at(0) == "C":
            state = 1
            break
        elif textInput.char_at(0) == "M":
            state = 2
            break
    while state == 1:
        basic.show_icon(IconNames.SMALL_HEART)
        slot1 = "" + textInput.char_at(1) + textInput.char_at(2)
        slot2 = "" + textInput.char_at(3) + textInput.char_at(4)
        slot3 = "" + textInput.char_at(5) + textInput.char_at(6)
        if slot1.char_at(0) == "E" or slot1.char_at(0) == "P" or slot1.char_at(0) == "T":
            pause(200)
            textInput = ""
            state = 0
            break
    while state == 2:
        basic.show_icon(IconNames.HEART)
        if slot1 == "PH":
            serial.write_number(pins.analog_read_pin(AnalogPin.P0))
            serial.write_string("|")
        elif slot1 == "TP":
            serial.write_number(dstemp.celsius(DigitalPin.P0))
            serial.write_string("|")
        else:
            serial.write_string("Empty|")
        if slot2 == "PH":
            serial.write_number(pins.analog_read_pin(AnalogPin.P1))
            serial.write_string("|")
        elif slot2 == "TP":
            serial.write_number(dstemp.celsius(DigitalPin.P1))
            serial.write_string("|")
        else:
            serial.write_string("Empty|")
        if slot3 == "PH":
            serial.write_number(pins.analog_read_pin(AnalogPin.P2))
        elif slot3 == "TP":
            serial.write_number(dstemp.celsius(DigitalPin.P2))
        else:
            serial.write_string("Empty")
        serial.write_string("!")
        pause(200)
        state = 0
basic.forever(on_forever)
