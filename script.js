function scoreCalculator(){

    // Naming Team 1
    team1Name = prompt("What is the first teams name?");

    // Collecting Team 1's Three Scores
    team1a = prompt(`What is the ${team1Name} first score?`)
    team1b = prompt(`What is the ${team1Name} second score?`)
    team1c = prompt(`What is the ${team1Name} third score?`)

    // Naming Team 2
    team2Name = prompt("What is the second team's name?");

    // Collecting Team 2's Three Scores
    team2a = prompt(`What is the ${team2Name} first score?`)
    team2b = prompt(`What is the ${team2Name} second score?`)
    team2c = prompt(`What is the ${team2Name} third score?`)
    
    // Calculating Average Score of Both Teams.
    team1avg = (Number(team1a) + Number(team1b) + Number(team1c)) / 3;
    team2avg = (Number(team2a) + Number(team2b) + Number(team2c)) / 3;

    console.log(team1avg, team2avg)

}
