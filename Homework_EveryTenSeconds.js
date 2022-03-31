//Calls helloWorld() every ten seconds
function everyTenSeconds(){
    for(var i = 1; i <= 12; i++) {
        setTimeout(helloWorld, 10000 * i);
    }
}

//Helper function that prints "Hello World!"
function helloWorld(){
    console.log("Hello World!");
}

everyTenSeconds();
