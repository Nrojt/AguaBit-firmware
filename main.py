state = 0
textInput = ""
slot1 = ""
slot2 = ""
slot3 = ""
ph_value = 69.69
temp_value = 42.34

def on_forever():
    global textInput, state, slot1, slot2, slot3, ph_value, temp_value
    while state == 0:
        basic.show_icon(IconNames.STICK_FIGURE)
        textInput = serial.read_string()
        if textInput.char_at(0) == 'C':
            state = 1
            break
        elif textInput.char_at(0) == 'M':
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
        if slot1 == "EM":
            serial.write_string("EMPTY")
        elif slot1 == "PH":
            serial.write_string(str(ph_value))
        elif slot1 == "TP":
            serial.write_string(str(temp_value))

        if slot2 == "EM":
            serial.write_string("EMPTY")
        elif slot2 == "PH":
            serial.write_string(str(ph_value))
        elif slot2 == "TP":
            serial.write_string(str(temp_value))

        if slot3 == "EM":
            serial.write_string("EMPTY")
        elif slot3 == "PH":
            serial.write_string(str(ph_value))
        elif slot3 == "TP":
            serial.write_string(str(temp_value))

        pause(200)
        state = 0
        
basic.forever(on_forever)
