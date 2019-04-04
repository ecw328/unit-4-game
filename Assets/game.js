var wins = 0;
var losses = 0;
var currentSessionTalliedValue = 0;

var randomTargetScore = [0, 1, 2, 3];

for (i = 0; i < 4; i++) { randomTargetScore[i] = Math.floor(Math.random() * 12) }

console.log("gold value: " + randomTargetScore[0]);
console.log("blue value: " + randomTargetScore[1]);
console.log("emerald value: " + randomTargetScore[2]);
console.log("sapphire value: " + randomTargetScore[3]);

var currentGameTargetScore = Math.floor(Math.random() * (120 - 19) + 19);
console.log("currentGameTargetScore: " + currentGameTargetScore);

$("#gold").click(function () {
    currentSessionTalliedValue += randomTargetScore[0];
    console.log("TalliedValue: " + currentSessionTalliedValue);
});
$("#blue").click(function () {
    currentSessionTalliedValue += randomTargetScore[1];
    console.log("TalliedValue: " + currentSessionTalliedValue);
});
$("#emerald").click(function () {
    currentSessionTalliedValue += randomTargetScore[2];
    console.log("TalliedValue: " + currentSessionTalliedValue);
});
$("#sapphire").click(function () {
    currentSessionTalliedValue += randomTargetScore[3];
    console.log("TalliedValue: " + currentSessionTalliedValue);
});

function resetGame() {

}

if (userValueTotal > currentGameTargetValue, (losses++)) function resetGame();

else if (userValueTotal === currentGameTargetValue(wins++)) function resetGame();



var yourScore = document.getElementById('yourScore');
var yourScore = getElementById(gold, blue, emerald, sapphire.onclick(math.sum));
yourScore.innerHTML = 0;
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
    var numberToAdd = parseInt(val);
    var currentScore = parseInt(yourScore.innerHTML);
    yourScore.innerHTML = numberToAdd + currentScore;
}

var gold = document.getElementById("gold");
gold.setAttribute("value", "5");
console.log(gold.value);

var blue = document.getElementById("blue");
blue.setAttribute("value", "10");
console.log(blue.value);

var emerald = document.getElementById("emerald");
emerald.setAttribute("value", "20");
console.log(emerald.value);

var sapphire = document.getElementById("sapphire");
sapphire.setAttribute("value", "25");
console.log(sapphire.value);

gold.addEventListener('click', function () {
    addToScore(this.value);
    checkPlayerScore();
});

//parseInt(42.01) => 42
//alert(parseInt('james')); // NaN (not a number)
// Cafe Del Mar ChillWave 2 :)
// .innerHTML returns a string, NaN

blue.addEventListener('click', function () {
    addToScore(this.value);
    checkPlayerScore();
});

emerald.addEventListener('click', function () {
    addToScore(this.value);
    checkPlayerScore();
});

sapphire.addEventListener('click', function () {
    addToScore(this.value);
    checkPlayerScore();
});
//var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// console.log (sum);
function getRandomValue(a, b) {
    return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
    //yourScore, targetScore (parseFloat() is for decimals)
    var playerInt = parseInt(yourScore.innerHTML);
    var targetInt = parseInt(targetScore.innerHTML);
    if (playerInt === targetInt) {
        alert('You win!');
    } else if (playerInt > targetInt) {
        alert('You lose!');
    }
}

console.log(getRandomValue(10, 4));