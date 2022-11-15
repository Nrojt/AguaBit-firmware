def on_button_pressed_a():
    global ph_value
    ph_value = Math.round(dstemp.celsius(DigitalPin.P0))
input.on_button_pressed(Button.A, on_button_pressed_a)

ph_value = 0
datalogger.set_column_titles("Slot1", "Slot2", "Slot3")

def on_forever():
    basic.show_number(ph_value)
    serial.write_number(25)
    basic.pause(5000)
basic.forever(on_forever)
