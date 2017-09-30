function removeDuplicates(arr) {
    var good = 0;
    for(var i=0; i<arr.lenght; i++){
        if(arr[i] != arr[good]){
            good++;
            arr[good] = arr[i];
        }
    }
    arr.length = arr.length+1;
    
}