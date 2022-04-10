function numStringsShorterThanLength (strings, length) {
    var numStrings = 0;
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            numStrings++;
        }
    }
    return numStrings;
}

console.log(numStringsShorterThanLength(["Luke", "Connor", "Sam", "Benjamin"], 5));
console.log(numStringsShorterThanLength(["Java", "C#", "HTML", "Python"], 4));
console.log(numStringsShorterThanLength(["Mercedes", "Fiat", "Ford", "Tesla"], 6));