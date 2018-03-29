function leetspeak(arg) {
    var leet = {"a":4, "e":3, "g":6, "i":1, "o":0, "s":5, "t":7 };
    var thing = arg.toLowerCase();
    for (x in thing){
    for (y in leet){
        if (thing[x] == y){
            thing = thing.replace(thing[x], leet[y])
        }
    }
}
console.log(thing);
}
leetspeak('I am so elite my dude');