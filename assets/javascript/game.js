var rand, letter, key, chosen;
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var gameleft = 9;
var wins = 0;
var losses = 0;
var chosen = [];

function selection(){
    rand = Math.floor(Math.random()*options.length);
    letter = options[rand];
    chosen = [];
    return letter;
}

selection();
alert("press a key");

document.onkeyup = function(event){
    var key = event.key.toLowerCase();
    chosen.push(key);


if (options.indexOf(key) == -1)
    alert("Please choose a Letter A-Z...")
    else 
    gameleft--;
    document.getElementById("gsf").innerHTML = chosen;
    document.getElementById("gleft").innerHTML = gameleft;
    
    
    if (gameleft == 0){
        losses++;
        gameleft = 9;
        document.getElementById("losses").innerHTML = losses;
        selection();
    }
    if (key==letter){
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("Good guess!");
        selection();
    }
}



