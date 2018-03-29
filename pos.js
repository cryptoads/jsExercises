function positiveNumbers(arg) {
    that = [];
    for(x in arg){
        if(arg[x] >= 0){
            that.push(arg[x]);
        }
    } 
    console.log(that);
}
positiveNumbers([1, -3, 5, -3, 0])