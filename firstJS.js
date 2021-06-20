function charCountChanger(){
var intakeSentence = prompt("Please enter < 140 characers.");
alert((140 - intakeSentence.length)+ " char remaining");
intakeSentence.slice(0,140);
alert("here is yur new sentence proper size and upper \n" + intakeSentence.toUpperCase());
}
