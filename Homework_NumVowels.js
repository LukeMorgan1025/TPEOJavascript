function numVowels (string) {
    var vowelCount = 0;
    for (var i = 0; i < string.length; i++)
    {
        switch(string[i]) {
            case "a" :
                vowelCount++;
                break;
            case "e" :
                vowelCount++;
                break;
            case "i" :
                vowelCount++;
                break;
            case "o" :
                vowelCount++;
                break;
            case "u" :
                vowelCount++;
                break;
        }
    }
    return vowelCount;
}

console.log(numVowels("vowels"));
console.log(numVowels("Javascript"));
console.log(numVowels("Luke Morgan"));