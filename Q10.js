//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var Name = ["Ahsan", "Muneeb", "Laraib"];
for (var _i = 0, Name_1 = Name; _i < Name_1.length; _i++) {
    var i = Name_1[_i];
    console.log("Hey! How are you ".concat(i));
}
