var five = require("johnny-five");
var board = new five.Board({ port: "COM5" });

board.on("ready", function() {
  console.log("Board READY");
  var temp = new five.Temperature({
    pin: "A0",
    controller: "LM35"
  });

  temp.on("change", function() {
    // console.log("Temp: %d", this.celsius);
    const isHot = () => this.celsius > 30
    if (isHot()) {
      console.log("It's so hot!");
    } else {
      console.log("It's ok");
    }
  });

});
