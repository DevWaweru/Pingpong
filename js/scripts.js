// Backend Logic
var outPut = "";
var answer;

var condition = function(figure) {
  if (figure % 15 === 0) {
    outPut = "Ping Pong";
  } else if (figure % 5 === 0) {
    outPut = "Pong";
  } else if (figure % 3 === 0) {
    outPut = "Ping";
  } else outPut = figure;
  return outPut;
}
// Frontend Logic
$(document).ready(function() {
  var noTries = parseInt(prompt("How many Tries?  "))

  for (steps = 1; steps <= noTries; steps++) {
    answer = condition(steps);
    $("ul").append("<li>"+answer+"</li>");
  }
  
});