function scoreCalculator() {

    // Rules for the Calculation
    alert(`The average rounded score will be calculated but both teams need to at least reach a minimal rounded score of 100. For there to be a draw, both teams must get at least a rounded score of 100 or more. The team with the higher rounded average that is 100 or more wins!`)

    // Naming Team 1
    let team1Name = prompt("What is the first teams name?");

    // Collecting Team 1's Three Scores
    let team1a = prompt(`What is the ${team1Name} first score?`);
    let team1b = prompt(`What is the ${team1Name} second score?`);
    let team1c = prompt(`What is the ${team1Name} third score?`);

    // Naming Team 2
    let team2Name = prompt("What is the second team's name?");

    // Collecting Team 2's Three Scores
    let team2a = prompt(`What is the ${team2Name} first score?`);
    let team2b = prompt(`What is the ${team2Name} second score?`);
    let team2c = prompt(`What is the ${team2Name} third score?`);

    // Calculating Average Score of Both Teams using Type Conversion.
    let team1Avg = (Number(team1a) + Number(team1b) + Number(team1c)) / 3;
    let team2Avg = (Number(team2a) + Number(team2b) + Number(team2c)) / 3;

    // Rounded Both Teams Average Scores
    let team1RoundedAvg = Math.round(team1Avg);
    let team2RoundedAvg = Math.round(team2Avg);


    // Changing the Text Content of the h3 to Display the Winner and the Average Scores

        // Both Teams have a Higher Score of 100 or More and Drawed
        if (((team1RoundedAvg >= 100) === (team2RoundedAvg >= 100)) && (team1RoundedAvg === team2RoundedAvg)) {
        document.querySelector("h3").textContent = `Looks like both teams drawed and had a rounded average of ${team1RoundedAvg}.`;
        }

        // Team 1 had the Higher Score and Both Teams had a score of 100 or More
        else if (((team1RoundedAvg >= 100) && (team2RoundedAvg >= 100)) && (team1RoundedAvg > team2RoundedAvg)) {
        document.querySelector("h3").textContent = `${team1Name} won with an average rounded score of, ${team1RoundedAvg}. ${team2Name} lost and had an average rounded score of, ${team2RoundedAvg}.`;
        }

        // Team 1 had the Higher Score and Qualified, while Team 2 Did Not Qualify
        else if (((team1RoundedAvg >= 100) && (team2RoundedAvg < 100)) && (team1RoundedAvg > team2RoundedAvg)) {
        document.querySelector("h3").textContent = `${team1Name} won with an average rounded score of, ${team1RoundedAvg}. ${team2Name} was disqualified with an average rounded score of, ${team2RoundedAvg}.`;
        }

        // Team 2 had the Higher Score and Both Teams had a score of 100 or More
        else if (((team1RoundedAvg >= 100) && (team2RoundedAvg >= 100)) && (team1RoundedAvg < team2RoundedAvg)) {
        document.querySelector("h3").textContent = `${team2Name} won with an average rounded score of, ${team2RoundedAvg}, while ${team1Name} lost with an average rounded score of, ${team1RoundedAvg}.`;
         }

        // Team 2 had the Higer Score and Qualified, while Team 1 Did Not Qualify
        else if (((team1RoundedAvg < 100) && (team2RoundedAvg >= 100)) && (team1RoundedAvg < team2RoundedAvg)) {
        document.querySelector("h3").textContent = `${team2Name} won with an average rounded score of, ${team2RoundedAvg}. ${team1Name} was disquaified with an average rounded score of, ${team1RoundedAvg}.`;
        }

        // Both Teams were Disqualified
        else {
        document.querySelector("h3").textContent = `Both teams were disquaified. ${team1Name} had an average rounded score of, ${team1RoundedAvg}, and ${team2Name} had an average rounded score of, ${team2RoundedAvg}.`;
        }
} 