let ph_value = 0
input.onButtonPressed(Button.A, function () {
    ph_value = Math.round(dstemp.celsius(DigitalPin.P0))
})
basic.forever(function () {
    basic.showNumber(ph_value)
})
