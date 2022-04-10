function reverse (string) {
    var output = "";
    for (var i = string.length - 1; i >= 0; i--) {
        output += string[i];
    }
    return output;
}

console.log(reverse("hey"));
console.log(reverse("Javascript"));
console.log(reverse("Luke Morgan"));