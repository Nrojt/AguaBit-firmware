slotInput = ""
state = 0
textInput = "B"
slot1 = "AB"
slot2 = "AB"
slot3 = "AB"
ph_value = 69.69
temp_value = 45.45

def on_forever():
    global textInput, state, slotInput, slot1, slot2, slot3
    while state == 0:
        basic.show_icon(IconNames.STICK_FIGURE)
        textInput = serial.read_string()
        if textInput.index_of("M") >= 0:
            state = 1
            break
        elif textInput.index_of("C") >= 0:
            state = 2
            break
    while state == 1:
        basic.show_icon(IconNames.HEART)
        slotInput = serial.read_string()
        slot1 = "" + slotInput.char_at(0) + slotInput.char_at(1)
        slot2 = "" + slotInput.char_at(2) + slotInput.char_at(3)
        slot3 = "" + slotInput.char_at(4) + slotInput.char_at(5)
        if slot1.char_at(0) == "E" or "P" or "T":
            basic.show_icon(IconNames.YES)
            serial.write_number(0)
            if slot1 == "EM":
                serial.write_line("" + str(0))
            elif slot1 == "PH":
                serial.write_line("" + str(ph_value))
            elif slot1 == "TP":
                serial.write_line("" + str(temp_value))
            if slot2 == "EM":
                serial.write_line("" + str(0))
            elif slot2 == "PH":
                serial.write_line("" + str(ph_value))
            elif slot2 == "TP":
                serial.write_line("" + str(temp_value))  
            if slot3 == "EM":
                serial.write_line("" + str(0))
            elif slot3 == "PH":
                serial.write_line("" + str(ph_value))
            elif slot3 == "TP":
                serial.write_line("" + str(temp_value))                              
        pause(100)
basic.forever(on_forever)
