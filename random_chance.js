
function randomChance(quarters){
    while(quarters>0){
      if(Math.floor(Math.random()*100) == 16){ // if you won x amount of quarters
          quarters = quarters + Math.floor(Math.random()*50)+51; // q = q + 50~100;
          console.log("You won " + quarters + " quarters");
          return quarters;
      }
      quarters--;
    }
    console.log("You lost all of the quarters");
  }
  
  console.log(randomChance(60));



