function longVowel(arg) {
var vow = ["aa", "ee", "ii", "oo", "uu"];
var result = ''
for(index = 0; index < arg.length; index++){
    var twoletters = arg.substr(index,2);
    if(vow.indexOf(twoletters) !== -1){
        result += arg[index].repeat(4);
    }
    else{
        result += arg[index];
    }
}
console.log(result);
}
longVowel('good');