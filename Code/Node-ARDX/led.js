var five = require("johnny-five");
var myBoard, myLed, ledPin;

myBoard = new five.Board({ port: "COM5" });
ledPin = 13;

myBoard.on("ready", function() {

  myLed = new five.Led(ledPin)

  myLed.strobe( 500 );

  this.wait(5000,  () => {
    console.log("Vamos a cambiar el tiempo de strobe!");
    myLed.strobe(200)
  })

  // make myLED available as "led" in REPL

  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)

  this.repl.inject({
    led: myLed
  });
  console.log("You can interact with the RGB LED via the variable 'led' e.g. led.on();\n Hit control-D to exit.\n >> ");
});
