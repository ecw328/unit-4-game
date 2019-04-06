var wins = 0;
var losses = 0;
var currentSessionTalliedValue = 0;
var yourScore = document.getElementById('yourScore');
var blue = Math.floor(Math.random() * (1 - 9) + 9);
var emerald = Math.floor(Math.random() * (1 - 9) + 9);
var sapphire = Math.floor(Math.random() * (1 - 9) + 9);
var gold = Math.floor(Math.random() * (1 - 9) + 9);

var randomTargetScore = Math.floor(Math.random() * (1 - 9) + 9);
console.log("randomTargetScore" + randomTargetScore);

//for (i = 0; i < 4; i++) {

//console.log("randomTargetScore" + randomTargetScore);


//}

console.log("gold value: " + gold);
console.log("blue value: " + blue);
console.log("emerald value: " + emerald);
console.log("sapphire value: " + sapphire);

var currentGameTargetScore = Math.floor(Math.random() * (30 - 19) + 19);
console.log("currentGameTargetScore: " + currentGameTargetScore);

$("#targetScore").append(currentGameTargetScore)



$("#gold").click(function () {
    console.log(gold);
    currentSessionTalliedValue += gold;
    console.log("TalliedValue: " + currentSessionTalliedValue);
    checkPlayerScore();

});
$("#blue").click(function () {
    currentSessionTalliedValue += blue;
    console.log("TalliedValue: " + currentSessionTalliedValue);
    checkPlayerScore();
});
$("#emerald").click(function () {
    currentSessionTalliedValue += emerald;
    console.log("TalliedValue: " + currentSessionTalliedValue);
    checkPlayerScore();
});
$("#sapphire").click(function () {
    currentSessionTalliedValue += sapphire;
    console.log("TalliedValue: " + currentSessionTalliedValue);
    checkPlayerScore();
});

function resetGame() {
}


//var yourScore = document.getElementById(gold, blue, emerald,sapphire);
//var targetScore = document.getElementById('targetScore');



//gold.setAttribute("value", "5");
//console.log(gold.value);


//blue.setAttribute("value", "10");
//console.log(blue.value);


//emerald.setAttribute("value", "20");
//console.log(emerald.value);


//sapphire.setAttribute("value", "25");
//console.log(sapphire.value);



var sum = parseInt(gold.value) + parseInt(blue.value) + parseInt(emerald.value) + parseInt(sapphire.value);

console.log(sum);
function getRandomValue(a, b) {
    return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
    $("#TalliedValue").text(currentSessionTalliedValue);
    if (currentSessionTalliedValue === currentGameTargetScore) {
        alert('You win!'); wins++
        $("#winsDisplay").append(wins)
    } else if (currentSessionTalliedValue > currentGameTargetScore) {
        alert('You lose!'); losses++
        $("#LossesDisplay").append(losses)

    }
}

console.log(getRandomValue(10, 4));