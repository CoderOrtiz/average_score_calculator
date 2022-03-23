function scoreCalculator(){

    // Naming Team 1
    team1Name = prompt("What is the first teams name?");

    // Collecting Team 1's Three Scores
    team1a = prompt(`What is the ${team1Name} first score?`);
    team1b = prompt(`What is the ${team1Name} second score?`);
    team1c = prompt(`What is the ${team1Name} third score?`);

    // Naming Team 2
    team2Name = prompt("What is the second team's name?");

    // Collecting Team 2's Three Scores
    team2a = prompt(`What is the ${team2Name} first score?`);
    team2b = prompt(`What is the ${team2Name} second score?`);
    team2c = prompt(`What is the ${team2Name} third score?`);
    
    // Calculating Average Score of Both Teams.
    team1Avg = (Number(team1a) + Number(team1b) + Number(team1c)) / 3;
    team2Avg = (Number(team2a) + Number(team2b) + Number(team2c)) / 3;

    // Rounded Both Teams Average Scores
    team1RoundedAvg = Math.round(team1Avg);
    team2RoundedAvg = Math.round(team2Avg);

    // Changing the Text Content of the h3 to Display the Winner and the Average Scores
    if (team1RoundedAvg === team2RoundedAvg){
        document.querySelector("h3").textContent = `Looks like both teams averaged ${team1RoundedAvg} and drawed.`;
    } 
    else if (team1RoundedAvg > team2RoundedAvg){
        document.querySelector("h3").textContent = `${team1Name} won with an average score of, ${team1RoundedAvg}. ${team2Name} had an average score of ${team2RoundedAvg}.`;
    }
    else {
        document.querySelector("h3").textContent = `${team2Name} won with an average score of, ${team2RoundedAvg}. ${team1Name} had an average score of ${team1RoundedAvg}.`;
    }
    console.log(team1RoundedAvg, team2RoundedAvg)
}
