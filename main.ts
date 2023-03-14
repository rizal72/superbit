input.onButtonPressed(Button.A, function () {
    running = true
    while (running) {
        SuperBit.RGB_Program().show()
        basic.pause(500)
        SuperBit.RGB_Program().rotate(1)
    }
})
function init () {
    running = false
    SuperBit.RGB_Program().clear()
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    SuperBit.RGB_Program().show()
}
input.onButtonPressed(Button.B, function () {
    init()
})
let running = false
images.iconImage(IconNames.Heart).scrollImage(1, 200)
init()
basic.forever(function () {
	
})
