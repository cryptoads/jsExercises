function tipAmount(billamount, servicelevel){
    if(servicelevel == 'good'){
        return billamount * .20;
    }else if (servicelevel == 'fair') {
        return billamount * .15;
    }else if (servicelevel == 'bad') {
        return billamount * .10;
    }
}
tipAmount(100,'good')