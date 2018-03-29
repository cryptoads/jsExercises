function printBox(width, height){
    for(var i = 0; i < height; i++){
        if(i === 0 || i === height-1){
        console.log('*'.repeat(width));
    }else{
        console.log('*' + ' '.repeat(width-2)+'*');
    }
    }
}
printBox(10,5);