var five = require("johnny-five");
var myBoard, myLed;

myBoard = new five.Board({ port: "COM5" });

myBoard.on("ready", function() {

  myLed = new five.Led(9)

  myLed.pulse(2000)

  // try "on", "off", "toggle", "brightness",
  // "fade", "fadeIn", "fadeOut",
  // "pulse", "strobe",
  // "stop" (stops strobing, pulsing or fading)

  // myLed.brightness(0);
  // myLed.fade(128, 2000, function () {
  //   console.log("Temrinó el Fade!");
  // });

  this.repl.inject({
    led: myLed
  });
  console.log("You can interact with the RGB LED via the variable 'led' e.g. led.on();\n Hit control-D to exit.\n >> ");

});
