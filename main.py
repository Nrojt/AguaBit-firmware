state = 0
textInput = "B"
slot1 = "AB"
slot2 = "AB"
slot3 = "AB"
ph_value = 69.69
temp_value = 45.45

def on_forever():
    global textInput, state
    while state == 0:
        basic.show_icon(IconNames.STICK_FIGURE)
        textInput = serial.read_string()
        if textInput.index_of("X") >= 0:
            state = 2
            break
        elif textInput.index_of("Y") >= 0:
            state = 1
            break
    while state == 1:
        basic.show_icon(IconNames.SMALL_HEART)
        slot12 = "" + textInput.char_at(1) + textInput.char_at(2)
        slot22 = "" + textInput.char_at(3) + textInput.char_at(4)
        slot32 = "" + textInput.char_at(5) + textInput.char_at(6)
        if slot12.char_at(0) == "E" or slot12.char_at(0) == "P" or slot12.char_at(0) == "T":
            basic.show_string(slot12)
            pause(200)
            textInput = "B"
            state = 0
            break
    while state == 2:
        basic.show_icon(IconNames.HOUSE)
        if slot12 == "EM":
            serial.write_line("" + str(0))
        elif slot12 == "PH":
            serial.write_line("" + str(ph_value))
        elif slot12 == "TP":
            serial.write_line("" + str(temp_value))
        if slot22 == "EM":
            serial.write_line("" + str(0))
        elif slot22 == "PH":
            serial.write_line("" + str(ph_value))
        elif slot22 == "TP":
            serial.write_line("" + str(temp_value))
        if slot32 == "EM":
            serial.write_line("" + str(0))
        elif slot32 == "PH":
            serial.write_line("" + str(ph_value))
        elif slot32 == "TP":
            serial.write_line("" + str(temp_value))
basic.forever(on_forever)
