function tipAmount(billamount, servicelevel){
    if(servicelevel == 'good'){
        return billamount * .20;
    }else if (servicelevel == 'fair') {
        return billamount * .15;
    }else if (servicelevel == 'bad') {
        return billamount * .10;
    }
}

function totalAmount(billamount,servicelevel){
    console.log(tipAmount(billamount,servicelevel) +billamount);
    return tipAmount(billamount,servicelevel) + billamount;
}

totalAmount(100,'good')