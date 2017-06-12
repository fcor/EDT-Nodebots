var five = require("johnny-five");
var board = new five.Board({ port: "COM4" });

board.on("ready", function() {
  var ledPins = [9,10];
  var leds = new five.Leds(ledPins);

  // function oneAfterAnother() {
  //   var delay = 1;
  //   board.counter = 0;
  //   for (var i = 0; i < leds.length; i++) {
  //     var led = leds[i];
  //
  //     board.wait(delay,function(){
  //       console.log(this.counter + " on")
  //       leds[this.counter].on();
  //     })
  //     board.wait(delay + 200,function(){
  //       console.log(this.counter + " off")
  //       leds[this.counter].off();
  //       this.counter = (this.counter + 1) % leds.length;
  //     })
  //     delay += 500;
  //   }
  // }
  //oneAfterAnother();
  //board.loop(2000, oneAfterAnother);

  //Prende 1s y luego apaga los leds
  //  leds.on();
  //  board.wait(1000, leds.off.bind(leds));

  //Hace el efecto de pulse al arreglo de leds, hay que usar puertos pwm
  // leds.pulse()

   this.repl.inject({
     led: leds
   });


});
