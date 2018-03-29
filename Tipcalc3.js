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
    return tipAmount(billamount,servicelevel) + billamount;
}

function splitAmount(billamount,servicelevel,peeps){
    console.log(totalAmount(billamount,servicelevel)/peeps);
    return totalAmount(billamount,servicelevel)/peeps;
}
splitAmount(100.00,'bad', 5)