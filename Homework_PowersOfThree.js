//Prints the powers of three up to 3^9
function powersOfThree() {
    for(var i = 1; i <= 19683; i *= 3) {
        console.log(i);
    }
}

setTimeout(powersOfThree, 3000);