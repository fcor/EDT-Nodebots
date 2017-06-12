var five = require("johnny-five"),
    board, myServo;

board = new five.Board({ port: "COM5" });

board.on("ready", function() {

  myServo = new five.Servo(9);

  // myServo =   new five.Servo({
  //   pin: 9,
  //   range: [35, 135],
  //   startAt: 100
  // });

  // myServo.sweep();

  myServo.sweep({
  range: [45, 135],
  interval: 500
  // step: 10
});

  board.wait(5000, function(){
    myServo.stop();
    myServo.center();
  });

  board.repl.inject({
    servo: myServo
  });

});
