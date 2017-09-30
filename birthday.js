function time(num){
    num = 31;
  while(num > 30){
      console.log( num + " days until my birthday. Such a long time... :( .");
      num--;
  }
  while(num <=30 && num >= 3){
      console.log(num + " days until my birthday. Sounds exciting!");
      num--;
  }
  while(num == 2 || num == 1){
      console.log(num + " DAYS UNTIL MY BIRTHDAY!!!");
      num--;
  }
  console.log("Happy Birthday!!!");
  }
  
  
//   console.log(time(31));