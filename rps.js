function rockPaperScissors(player1, player2) {
    if (player1 == player2){
        console.log('draw');
        return;
    }
    if(player1 == 'rock' ){
        if(player2 == 'paper'){
            console.log('player 2');
            return;
             }else{
                console.log('player 1');
                return;
             }
        }
    if(player1 == 'paper' ){
        if(player2 == 'scissors'){
            console.log('player 2');
            return;
             }else{
                console.log('player 1');
                return;
             }
        }
    if(player1 == 'scissors' ){
        if(player2 == 'rock'){
            console.log('player 2');
            return;
             }else{
                console.log('player 1');
                return;
             }
        }
    }


rockPaperScissors('rock', 'scissors')