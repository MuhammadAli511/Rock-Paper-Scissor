//Hämta användarens val

//Slumpa datorns val

//Avgör vinnare

//Visa vinnare




let userWeapon; //Här sparar vi valet som användaren gör
let computerWeapon; //Här sparar vi datorns val
let matches = 0;
let stats = {
    wins: 0,
    loses: 0,
    draws: 0
}

let playerName = "";

function getUserName() {
    if (matches === 0) {
      // get player name from id 'playerName'
      playerName = document.getElementById("playerName").value;
      document.getElementById("playerName").value = "";
      document.getElementById("playerName").style.display = "none";
      document.getElementById("submitButton").style.display = "none";
      // set name id value
        document.getElementById("name").innerHTML = "Välkommen " + playerName;
    }
  }


//Det gör här är att vi hämtar knappen och kör kod när användaren klickar på knappen.
document.getElementById('rock').addEventListener('click', function () {
    if (playerName === "") {
        alert('Ange namn för att spela');
    } else {
        userWeapon = 'sten';
        console.log(`Du har valt: ${userWeapon}`);
        getWinner();
    }
});

document.getElementById('scissor').addEventListener('click', function () {
    if (playerName === "") {
        alert('Ange namn för att spela');
    } else {
        userWeapon = 'sax';
        console.log(`Du har valt: ${userWeapon}`);
        getWinner();
    }
});

document.getElementById('paper').addEventListener('click', function () {
    if (playerName === "") {
        alert('Ange namn för att spela');
    } else {
        userWeapon = 'påse';
        console.log(`Du har valt: ${userWeapon}`);
        getWinner();
    }
});

function resetGame() {

    matches = 0;
    stats = {
        wins: 0,
        loses: 0,
        draws: 0
    }
    document.getElementById('playerName').style.display = 'inline-block';
    document.getElementById('submitButton').style.display = 'inline-block';
    playerName = '';


}


function endGame(){

    // show a button to end the game
    document.getElementById('endGame').innerHTML = `
    <button onclick="resetGame()">Avsluta spel</button>
    `;
}

function showWinner(winner) {
    document.getElementById('winner').innerHTML = 'Vinnare avgörs...';
    matches++;
    setTimeout(() => {
        if (matches === 3) {
            document.getElementById('winner').innerHTML = `
                <p>Vinster: ${stats.wins}</p>
                <p>Förluster: ${stats.loses}</p>
                <p>Oavgjort: ${stats.draws}</p>
            `

            endGame();
        } else {
            document.getElementById('winner').innerHTML = winner;
        }
    }, 100) // Kör denna funktion efter 2s
}

function getWinner() {
    computerWeapon = Math.round(Math.random() * 2); //Slumpa ett nummer mellan 0-2.

    if (computerWeapon == 0) {
        computerWeapon = 'sten';
    } else if (computerWeapon == 1) {
        computerWeapon = 'sax';
    } else if (computerWeapon == 2) {
        computerWeapon = 'påse';
    }

    console.log(`Ditt vapen: ${userWeapon} Datorns vapen: ${computerWeapon}`);

    //Avgör vinnare. Kollar först om det blir blivit oavgjort annars vem som vann.
    if (userWeapon == computerWeapon) {
        stats.draws++;
        showWinner('Det blev oavgjort');
    } else if (userWeapon == 'sten') {
        if (computerWeapon == 'sax') {
            stats.wins++;
            showWinner('Du vann!');
        } else {
            stats.loses++;
            showWinner('Datorn vann!');
        }
    } else if (userWeapon == 'sax') {
        if (computerWeapon == 'påse') {
            stats.wins++;
            showWinner('Du vann!');
        } else {
            stats.loses++;
            showWinner('Datorn vann!');
        }
    } else if (userWeapon == 'påse') {
        if (computerWeapon == 'sten') {
            stats.wins++;
            showWinner('Du vann!');
        } else {
            stats.loses++;
            showWinner('Datorn vann!');
        }
    }
}