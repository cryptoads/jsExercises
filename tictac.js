function ticTacToe(arg) {

    if(arg[0].join('') === 'OOO' || arg[0].join('') === 'XXX'){
        console.log(arg[0][0]);
    }else if(arg[1].join('') === 'OOO' || arg[1].join('') === 'XXX'){ 
         console.log(arg[1][0]);     
    }else if(arg[2].join('') === 'OOO' || arg[2].join('') === 'XXX'){
         console.log(arg[2][0]);
    }else if(arg[0][0] === arg[1][0] && arg[0][0]===arg[2][0]){
        console.log(arg[0][0]);
    }else if(arg[0][1]=== arg[1][1] && arg[0][1]===arg[2][1]){
        console.log(arg[0][1]);
    }else if (arg[0][2] === arg[1][2] && arg[0][2]===arg[2][2]){
        console.log(arg[0][2]);
    }else if (arg[0][0] === arg[1][1] && arg[0][0] === arg[2][2]){
        console.log(arg[0][0]);
    }else if (arg[0][2] === arg[1][1] && arg[0][2] === arg[2][0]) {
        console.log(arg[0][2]);    
    }else{
        console.log(null);
    }
        
}

ticTacToe([
  ['O', null, 'X'],
  ['O', 'X', null],
  ['X', 'X', null]
  ])
