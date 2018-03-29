function matrixAdd(first, second) {
    var result = [];

    result.push([first[0][0]+second[0][0],first[0][1]+second[0][1]]);
    result.push([first[1][0]+ second[1][0], first[1][1]+second[1][1]]);
    console.log(result);
     
}
matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])