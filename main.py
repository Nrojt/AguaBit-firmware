ph_value = 0

def on_button_pressed_a():
    global ph_value
    ph_value = Math.round(dstemp.celsius(DigitalPin.P0))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    basic.show_number(ph_value)
basic.forever(on_forever)
