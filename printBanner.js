function printBanner(banner){
    for(var i = 1; i <= 3; i++){
        if(i === 1 || i === 3){
        console.log('*'.repeat(banner.length+4));
    }else{
        console.log('* '+banner+' *');
    }
    }
}
printBanner('welcome to da digital crafts my dude!');