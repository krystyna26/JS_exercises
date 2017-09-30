function numbersOnly(){
  var arr = ([1, "apple", -3, "orange", 0.5]);
  var newArr = [];
  
  for(var i=0; i< arr.length;i++){
    var el = arr[i];
    if(typeof el === "number"){
       newArr.push(el);
    }
  }
  return newArr;
}

console.log(numbersOnly());