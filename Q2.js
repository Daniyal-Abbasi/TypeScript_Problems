// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Name = "The lord of thE rings";
var text1 = Name.toUpperCase();
var text2 = Name.toLowerCase();
console.log("uppercase : ".concat(text1, " lowercase : ").concat(text2));
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
    return sentence;
}
titleCase("Title case : ".concat(Name));
