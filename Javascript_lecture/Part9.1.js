var firstName = prompt("First name Please: ")
var lastName = prompt("Last name Please: ")
var age = prompt("How old are you? ")
var height = prompt("What is your height? ")
var petName = prompt("what is your pet name? ")
alert("Thank you so much for the information")

// LOGIC

//Four Conditions
var nameCond = null;
var ageCond = null;
var height = null;
var petName = null;

// NAME Condition
if(firstName[0] === lastName[0]){
  nameCond = true;
}else {
  nameCond = false;
}

//Age Condition
if (age < 20 && age < 30) {
  ageCond = true;
}else {
  ageCond = false;
}

//height condition
if (height >= 170) {
  heightCond = true;
}else {
  heightCond = false;
}

//petname condition
if (petName[petName.length-1 ] === "y") {
  petName = true;
}else {
  petName = false;
}

//Check All Conditions
if (nameCond && ageCond && heightCond && petCond) {
  console.log("Welcome Spy!!");
}else {
  console.log("Nothing to see here");
}
