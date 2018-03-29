function matrixMultiply(first, second) {
    matrix3 = [];
    matrix3.push([(first[0][0] * second[0][0] + first[0][1] * second[1][0]),
                    (first[0][0] * second[0][1] + first[0][1] * second[1][1])]);
    matrix3.push([(first[1][0] * second[0][0] + first[1][1] * second[1][0]),
                    (first[1][0] * second[0][1] + first[1][1] * second[1][1])]);
   console.log(matrix3);

}
matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])