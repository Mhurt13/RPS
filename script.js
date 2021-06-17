var wins = 0;
var ties = 0;
var losses = 0;


var options = ["R", "P", "S"]

var game = function() {

    var userchoice = window.prompt("Enter R, P, or S:");

    if (!userchoice) {
        return;
    }

/*if player inputs lowercase
alert if player chooses invalid choice*/
    userchoice = userchoice.toUpperCase();    

    var number = Math.floor(Math.random()*options.length);
    var computerchoice = options[number]; // computer chooses randomly

/*win, tie, or loss
add to total tally */
    if (userchoice === computerchoice){
        ties++;
        window.alert("It's a Tie");
    } else if(
        (userchoice === "R" && computerchoice === "S") ||
        (userchoice === "P" && computerchoice === "R") ||
        (userchoice === "S" && computerchoice === "P")
    ){ 
        wins++;
        window.alert("You Win");
        
    } else {
        losses++;
        window.alert("You Lost");
    }
if window.alert(
    stats: 
)

}

  
//ask to play again
var replay = window.confirm("Play another game?");

if (replay){
    game();
}
