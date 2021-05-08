// var hot = false;
// var temp = 10;
//
// if(temp > 80){
//   console.log("Hot Outside!");
// }else if (temp <= 80 && temp >= 50) {
//   console.log("Average temp Outside");
// }else if (temp < 50 && temp >= 32){
//   console.log("It's pretty cold out!");
// }else {
//   console.log("It is very cold out");
// }

// var ham = 0;
// var cheese = 0;
//
// var report = "blank";
//
// if (ham >= 10 && cheese >= 10) {
//   report = "Strong sales of both hame and cheese!"
// }else if (ham === 0 && cheese === 0) {
//   report = "Nothing sold!"
// }else {
//   report = "We had some sales of items"
// }
//
// console.log(report);

//  write a while loop that prints out
// only the even numbers from 1 to 10
// var num = 1;
//
// while (num < 11) {
//   if (num % 2 === 1) {
//     console.log(num);
//   }
//   num = num + 1;
// }

// var x = 0;
// while (x < 5) {
//   console.log("x is currently : " + x);
//
//   if (x === 3) {
//     console.log("X is equal to three!");
//     break;
//   }
//
//   console.log("x is still less than 5, adding 1 to x");
//   x = x + 1;
// }

//For Loops

var word ="ABABABABAB"
for (var i = 0; i < word.length; i= i+2) {
  console.log(word[i]);
}
