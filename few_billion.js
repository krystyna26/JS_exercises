var payment = 0.01;
var day = 1;
var total = 0;
  for(var i=1; i<= 30; i++){
   total = total + payment;
    // How many days would it take the servant to make $10,000? --> 20
   if(total >= 10000){
     break;
   }
    
    // How about 1 billion?  --> 37
//    if(total >= 1000000000){
//      break;
//    }
    
    // In JavaScript, there is a value Infinity. How many days until the servant has infinite money? 
    // i<= Infinity --> 735
//    if(total >= Infinity){
//      break;
//    }
    console.log("Day: "+ day);
    console.log("Daily payment: "+ payment);
    console.log("Total amount: " + total);
    
    payment = 2*payment;
    day++;
  }