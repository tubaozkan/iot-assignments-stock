var process = require('process');
var writeFile = require('write-file');

"use strict";

var Cylon = require('cylon');

// define the robot 
Cylon.robot({
  		connections: {
   		 raspi: { adaptor: "raspi" }
  		},

  		devices: {
  		  led: { driver: "led", pin: 11 }
 		 },

 		 work: function(my) {
 		   every((3).second(), my.led.toggle);
  		}
		}).start();

////

var a = 0;
var x = Math.floor((Math.random() * 10) + 1);
var y = Math.floor((Math.random() * 10) + 1);
var robotAnswer = x + y;

var test =[x,  "+",  y, "=", "?";
];

// while (robotAnswer) {
// var answers = (robotAnswer);
// }

function ask(i){
	process.stdout.write(`\n\n ${test[i]}`);
	process.stdout.write(": ");
}

process.stdin.on('data',function(data){

	// answers.push(data.toString().trim());

	if(robotAnswer != (x+y)){
		ask(answers.length);
	} else{
		writeFile('week3/arduinotest.txt', "Hello your answer" + answers +  "is correct." + "Led is blinking" +"Ho-la-la" +'\n'+ "yourPi", function (err) {

  	if (err) return console.log(err);
  		else {console.log('\n\n $$$ Check your Pi $$$');
  		a = 1;
  		}
	});

		if(a == 1) process.exit();
	}
});

ask(0);
