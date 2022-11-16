slotInput = ""
state = 0
textInput = "B"
slot1 = "EM"
slot2 = "EM"
slot3 = "EM"
ph_value = 69.69
temp_value = 45.45
while state == 0:
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
    if slot1 == "EM":
        serial.write_line("" + str(0))
    elif slot1 == "PH":
        serial.write_line("" + str(ph_value))
    elif slot1 == "TP":
        serial.write_line("" + str(temp_value))
    pause(2000)
    state = 0
    break