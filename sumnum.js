function sum(arg) {
    var result = 0;
    for(x in arg){
        result += Number(arg[x]);
    } 
    console.log(result);
}
sum([1,4,8]);