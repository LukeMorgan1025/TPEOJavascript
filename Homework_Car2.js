function Car (model, color, year, mpg, id) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.mpg = mpg;
    this.id = id;
}

var carArray2D = [];

//Creates 100 Car objects in a 10 x 10 array
for (var i = 0; i < 10; i++) {
    var carArray = [];
    for (var k = 0; k < 10; k++) {
        carArray.push(new Car("Mercedes-Benz C230", "black", 2002, 24, (i * 10) + k + 1));
    }
    carArray2D.push(carArray);
}

//Returns an array of Car objects from carArray2D that have an id between idMin & idMax
function getCarsBetweenIds(idMin, idMax){
    var returnArray = [];
    for (var i = 0; i < carArray2D.length; i++) {
        for (var k = 0; k < carArray2D[i].length; k++) {
            if (carArray2D[i][k].id >= idMin && carArray2D[i][k].id <= idMax)
            {
                var car = carArray2D[i][k];
                returnArray.push(new Car(car.model, "blue", car.year, car.mpg, car.id));
            }
        }
    }
    return returnArray;
}

console.log(getCarsBetweenIds(4, 12));
console.log(getCarsBetweenIds(43, 93));
console.log(getCarsBetweenIds(20, 21));