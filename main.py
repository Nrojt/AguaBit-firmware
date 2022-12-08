slot3 = "EM"
slot2 = "EM"
slot1 = "EM"
textInput = ""
state = 0
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
            slot1phstring = str("" + str(pins.analog_read_pin(AnalogPin.P0)))
            serial.write_string("0" + slot1phstring.char_at(0) + slot1phstring.char_at(1) + "." + slot1phstring.char_at(2) + slot1phstring.char_at(3))
        elif slot1 == "TP":
            slot1tmpstring = str("" + str(dstemp.celsius(DigitalPin.P0)) + "0")
            serial.write_number(dstemp.celsius(DigitalPin.P0))
            #serial.write_string("" + slot1tmpstring.char_at(0) + slot1tmpstring.char_at(1) + slot1tmpstring.char_at(2) + slot1tmpstring.char_at(3) + slot1tmpstring.char_at(4))
        if slot2 == "PH":
            slot2phstring = str("" + str(pins.analog_read_pin(AnalogPin.P1)))
            serial.write_string("0" + slot2phstring.char_at(0) + "." + slot2phstring.char_at(1) + slot2phstring.char_at(2))
        elif slot2 == "TP":
            slot2tmpstring = str("" + str(dstemp.celsius(DigitalPin.P1)) + "0")
            serial.write_number(dstemp.celsius(DigitalPin.P1))
            #serial.write_string("" + slot2tmpstring.char_at(0) + slot2tmpstring.char_at(1) + slot2tmpstring.char_at(2) + slot2tmpstring.char_at(3) + slot2tmpstring.char_at(4))
        if slot3 == "PH":
            slot3phstring = str("" + str(pins.analog_read_pin(AnalogPin.P2)))
            serial.write_string("0" + slot3phstring.char_at(0) + "." + slot3phstring.char_at(1) + slot3phstring.char_at(3))
        elif slot3 == "TP":
            slot3tmpstring = str("" + str(dstemp.celsius(DigitalPin.P2)) + "0")
            serial.write_number(dstemp.celsius(DigitalPin.P2))
            #serial.write_string("" + slot3tmpstring.char_at(0) + slot3tmpstring.char_at(1) + slot3tmpstring.char_at(2) + slot3tmpstring.char_at(3) + slot3tmpstring.char_at(4))
        pause(200)
        state = 0
basic.forever(on_forever)
