input.onButtonPressed(Button.A, function () {
    ph_value = Math.round(dstemp.celsius(DigitalPin.P0))
})
let ph_value = 0
datalogger.setColumnTitles(
"Slot1",
"Slot2",
"Slot3"
)
basic.forever(function () {
    basic.showNumber(ph_value)
    serial.writeNumber(25)
    basic.pause(5000)
})
