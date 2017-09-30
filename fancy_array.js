
function fancy(arr){
  arr = ['James', 'Jill', 'Jane', 'Jack'];
  var reverse = true;
  
  if(reverse){
    for(var i = arr.length-1; i>=0; i--){
      console.log(i + " -> " + arr[i]);
    }
  }else{
    for(var i=0; i < arr.length; i++){
      console.log(i + " -> " + arr[i]);
    }
  } 
}

console.log(fancy());