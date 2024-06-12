// // Q21
// let objectcontainingItems: { [key: string]: any } = {
//     "laptop": {
//         name: "laptop",
//         price: 10000,
//         description: "High performance laptop with fast ScriptProcessorNode."
//     },
//     "mouse": {
//         name: "mouse",
//         price: 100,
//         description: "High performance mouse with fast ScriptProcessorNode."
//     },
//     "keyboard": {
//         name: "keyboard",
//         price: 100,
//         description: "High performance keyboard with fast ScriptProcessorNode."
//     }
// };
// console.log(objectcontainingItems);
// // Q22:
// // Intentional Error:
// // let IntentionalError:string[]=[1,2,3,4,5,6,7,8,9];
// // console.log(IntentionalError[10]);
// // let IntentionalErrors:number[]=[1,2,3,4,5,6,7,8,9];
// // console.log(IntentionalError[2]);
// // let IntentionalErrors1:any[]=[1,2,3,4,5,6,7,8,9];
// // console.log(IntentionalError[6]);
// // Q23;
// Test 1:
var car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// // Test 2:
// console.log("Is car !== 'toyota'? I predict True.");
// console.log(car !== 'toyota');
// // Test 3:
// console.log("Is length of car > 4 ? I predict True.");
// console.log(car.length > 4);
// // Test 4:
// console.log("Is length of car <= 6 ? I predict True.");
// console.log(car.length <= 6);
// // Test 5:
// console.log("Does car start with 's' ? I  predict True.");
// console.log(car.startsWith('s'));
// Test 6:
console.log("Is car === 'honda'? I predict False.");
console.log(car === 'honda');
// Test 7:
console.log("Is car in uppercase ? I predict False.");
console.log(car.toUpperCase() === car);
// // Test 8:
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');
// // Test 9:
console.log("Is car == 'Audi'? I predict False.");
console.log(car == 'Audi');
// // // Test 10:
console.log("Is the length of car === 7? I predict False.");
console.log(car.length === 7);
// //  Q24:
// // Equality and Inequality with Strings
// // let string1:string="Hello";
// // let string2:string="World";
// // console.log(string1===string2);//false
// // console.log(string1!==string2); // true
// // //  test using the lowercase function
// // let uppercase:string="HELLO";
// // let lowercase:string="hello";
// // console.log(uppercase.toLowerCase()===lowercase);  //true
// //  Numerical Tests
// let number1:number=10;
// let number2:number=20;
// console.log(number1===number2);//false
// console.log(number1!==number2); // true
// console.log(number1 > number2); // false
// console.log(number1 >= number2); // false
// console.log(number1 < number2); // true
// console.log(number1 <= number2); // true
// //  tests using "and" and "or" operators
// let x:number=10;
// let y:number=20;
// let z:number=30;
// console.log(x < y && y < z); // true
// console.log(x > y || y < z); // true
// //  Test wether an item is in an array
// let array1:number[]=[1,2,3,4,5,6];
// let itemTofind:number= 3;
// console.log(array1.indexOf(itemTofind) !== -1); //true
//  Test wether an item is not in an array
// console.log(array1.indexOf(10) === -1); //true
//  Q 25
// let alien_color:string = "green";
// //  color is green. If it is, print a message that the player just earned 5 points.
// if (alien_color === "green"){
//     console.log("Congrats!You just earned 5 points.")
// }
// alien_color="red";
// if (alien_color === "green"){
//     console.log("Congrats!You just earned 5 points.")
// }
