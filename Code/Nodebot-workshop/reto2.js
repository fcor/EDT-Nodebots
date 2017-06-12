var five = require('johnny-five')
var board = new five.Board()

var servoPin = 9

board.on('ready', function () {
  myServo = new five.Servo(servoPin)
  myServo.sweep();

  board.wait(3000, function(){
    myServo.stop()
    myServo.center()
  })
})
