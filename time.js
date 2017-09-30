
function time(HOUR,MINUTE,PERIOD){
    if(MINUTE <=30 && PERIOD == "AM"){ 
        console.log("It's just after " + HOUR + " in the morning");
    }else if( MINUTE > 30 && PERIOD == "AM"){
        var newHour = HOUR + 1;
        console.log("It's almost " + newHour + " in the morning");
    }else if(MINUTE <=30 && PERIOD == "PM"){
        console.log("It's just after " + HOUR + " in the evening");
    }else if( MINUTE > 30 && PERIOD == "PM"){
        var newPHour = HOUR + 1;
        console.log("It's almost " + newPHour + " in the evening");
    }else if(MINUTE == 30 && PERIOD == "PM"){
        console.log("It's half past " + HOUR + " in the evening");
    }else if(MINUTE == 30 && PERIOD == "AM"){
        console.log("It's half past " + HOUR + " in the morning");
    }
    
}