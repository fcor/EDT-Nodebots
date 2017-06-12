var five = require('johnny-five')
var board = new five.Board({ port: "COM5" });

board.on('ready', function () {
  var motor = new five.Motor(9)
  console.log("Motor inicializado");

  // motor.on('start', function () {
  //   console.log("On");
  //   board.wait(4000, function () {
  //     motor.stop()
  //   })
  // })
  //
  // motor.on('stop', function () {
  //   console.log("Off");
  //   board.wait(3000, function () {
  //     motor.start(200)
  //   })
  // })

  motor.start(200)

  board.repl.inject({
    motor: motor
  })
})
