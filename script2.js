   // Changing the Text Content of the h3 to Display the Winner and the Average Scores

   if ((team1RoundedAvg >= 100) === (team2RoundedAvg >= 100) && team1RoundedAvg === team2RoundedAvg){
    document.querySelector("h3").textContent = `Looks like both teams drawed and had a rounded average of ${team1RoundedAvg}.`;
    console.log(team1RoundedAvg, team2RoundedAvg)
} 
else if(((team1RoundedAvg >= 100) && team1RoundedAvg) > ((team2RoundedAvg >= 100) && team2RoundedAvg)){
    document.querySelector("h3").textContent = `${team1Name} won with an average rounded score of, ${team1RoundedAvg}. ${team2Name} lost and had an average rounded score of, ${team2RoundedAvg}.`;
    console.log(team1RoundedAvg, team2RoundedAvg)
   }
 else if(((team1RoundedAvg >= 100) && team1RoundedAvg) > ((team2RoundedAvg < 100) && team2RoundedAvg)){
    document.querySelector("h3").textContent = `${team1Name} won with an average rounded score of, ${team1RoundedAvg}. ${team2Name} was disqualified with an average rounded score of, ${team2RoundedAvg}.`
    console.log(team1RoundedAvg, team2RoundedAvg)
   } 
else if (((team1RoundedAvg >= 100) && team1RoundedAvg) < ((team2RoundedAvg >= 100) && team2RoundedAvg)){
    document.querySelector("h3").textContent = `${team2Name} won with an average rounded score of, ${team2RoundedAvg}, while ${team1Name} lost with an average rounded score of, ${team1RoundedAvg}.`
    console.log(team1RoundedAvg, team2RoundedAvg)
   } 
else if (((team1RoundedAvg < 100) && team1RoundedAvg) < ((team2RoundedAvg >= 100) && team2RoundedAvg)){
    document.querySelector("h3").textContent = `${team2Name} won with an average rounded score of, ${team2RoundedAvg}. ${team1Name} was disquaified with an average rounded score of, ${team1RoundedAvg}.`
    console.log(team1RoundedAvg, team2RoundedAvg)
   } 
else {
    document.querySelector("h3").textContent = `Both teams were disquaified. ${team1Name} had an average rounded score of, ${team1RoundedAvg}, and ${team2Name} had an average rounded score of, ${team2RoundedAvg}.`
    console.log(team1RoundedAvg, team2RoundedAvg)
   }
   
 