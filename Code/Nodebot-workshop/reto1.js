var five = require('johnny-five')
var board = new five.Board()

var ledPin = 13

board.on('ready', function () {
  myLed = new five.Led(ledPin)
  myLed.strobe( 1000 )
})
