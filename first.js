// create a system to calculate popcorn prices based on the size customer asked for :
// XL = 250 , L = 200 , M = 100 , S = 50.

// let size = "X" ;
// if (size === "XL") { console.log(250);    
// }
// else if (size === "L") {console.log(200);
// }
// else if (size === "M") {console.log(100);
// }
// else if (size === "S") {console.log(50);
// }
// else {console.log("the size you are asking is not available");
// }



// a good string is a string that stars with a letter 'a' & has length > 3 . Write a program to find if string is good or not //.

// let str = "apple";
// if(str.length > 3 && str[0]==='a'){
// console.log("good string");
// } else {console.log("not a good string")}



// //
// let age = 23;
// age = age + 2; //after two years
// console.log(age)


// let hindi = 80;
// let eng = 90;
// let maths = 100;
// let avg = (hindi+eng+maths)/3;
// console.log(avg)

// Create a traffic light system that shows what to do based on color

// let color = "green";
// if (color=="red") {console.log("you have to stop");  
// }
// if (color=="yellow") {console.log("you have to wait");  
// }
// if (color=="green") {console.log("you can move forward");  
// }

// traffic light system in form of (Switch)

// let color = "ok";
// switch(color){
//     case "red" :
//         console.log("stop");
//         break;
//     case "orange" :
//         console.log("wait");
//         break;
//     case "green" :
//         console.log("go");
//         break;
//     default:
//         console.log("the light is broken");
// }



// for the given string let msg = "help"; trim it and convert it to upercase

//  let msg = "help";
//  let newMsg = msg.trim().toUpperCase()
//  console.log(newMsg)



// for the given state of array, change it to the final form using array methods.
// start:['january','july','march','august']
// final:['july','june','march','august']

// let months = ['january','july','march','august'];
// months.shift();
// months.shift();
// months.unshift('june');
// months.unshift('july');
// console.log(months);



// Use switch statement to print the day of the week using the number variable day with values 1 to 7.

// let day = 69;
// switch (day) {
//     case 1:
//         console.log("monday")
//         break;
//     case 2:
//         console.log("tuesday")
//         break;
//     case 3:
//         console.log("wednesday")
//         break;
//     case 4:
//         console.log("thursday")
//         break;
//     case 5:
//         console.log("friday")
//         break;
//     case 6:
//         console.log("saturday")
//         break;
//     case 7:
//         console.log("sunday")
//         break;  
//     default:
//         console.log("wrong day")
//         break;
// }

// while loop practice 

// let i = 0;

// while(i<=20) {
//     console.log(i);
//     i++;
// }


// code from counting 1 to 10 with for loop 

// for (i=1;i<=10;i++) {
//     console.log(i);
// }

// print all odd numbers from 1 to 15 

// for (i=1;i<=15;i+=2) {
//     console.log(i);
// }

// backward order 

// for (i=15;i>=1;i-=2) {
//     console.log(i);
// }

// print the table of 5 

// for (i=5;i<=50;i+=5) {
//     console.log(i);
// }

// take the input from the user and print the table of value given by the user 

// let n = prompt ("write your number");
// n = parseInt(n); 
// for (i=n;i<=n*10;i=i+n) {
//     console.log(i);
// }


// even number using while loop upto 100.

// (this code is contributed jayant bhoi)

// console.log("Print all even number between 0 and 100");
// var num = 0;
// while (num <= 100 && num % 2 == 0) {
//   console.log(num);
//   num += 2;
// }


// loops with arrays 

// let fruits = ["mango","apple","banana","litchi","orange"];

// for (i=0;i<fruits.length;i++) {
//    console.log(i,fruits[i]);
// }


// function 

// function sum(x,y) {
//    s = x + y
//    console.log("before return")
//    return s 
// }

// let val=sum(3,5);
// console.log(val)


// Nested for of loop 

// let heroes = [ ["superman","batman","wonder woman"],["spiderman","ironman","thor"] ];

// for (list of heroes) {
//     for(hero of list) {
//     console.log(hero);
// }
// }

// Creating a Post 

// const post = {
//     username : "@anshkanojia",
//     content : "This is my #firstpost",
//     likes : 150,
//     reposts : 5,
//     tags : ["@apnacollege" , "@delta"]
// };

// console.log(post)


// ADD/UPDATE values of object literals
// const student ={
//     name :"shradha",
//     age :23,
//     marks:94.4,
//     city :"delhi",
// };


// Create a function to roll a dice & always display the value of the dice (1 to 6).

// function rollDice() {
//   let random =  Math.floor(Math.random()*6) +1;
//   console.log(random);
// }

// rollDice();

// Create a function that gives us average of 3 numbers.

// function avg (a,b,c){
//     console.log((a+b+c)/3);
// }

// avg(1,2,3);
// avg(4,5,6);


// Create a function that gives tables of given numbers

// function printTables(n) {
//     for(i=n;i<=n*10;i+=n)
//     console.log(i);
// }


// arrow functions (compact way of writing functions)

// function sum (a,b) {
//     return a + b ;        // sum function
// }

// arrow version of sum

// const arrowSum = (a,b) => {
//     console.log(a + b);
// };



// function mul(a,b) {
//     return a * b ;        // multiplication function 
// }

// Create a functon that returns the sum of numbers from 1 to n 

// function ret(n) {
//     let sum = 0 ;
//     for(i=1;i<=n;i++){
//     sum = sum + i ;
// }
// return sum ;
// }

// function calculateProduct(n) {
//     let product = 1;
//     for (i=1;i<=n;i++){
//         product = product * i;
//     }
//     return product;
// }

//  Higher order Fuctions 

// function multipleGreet (func,count) {
//     for (let i = 1 ;i<=count;i++){
//         func();
//     }
// }

// let greet = function () {
//     console.log("hello");
// }
// multipleGreet(greet,2)

// Get user to input a number using prompt ("enter a number:"). Check if the number is a multiple of 5 of not .

// let a = prompt("enter the number");
// a = parseInt;
// if(a%5==0){
//     console.log("this is multiple of 5");
// }else(a%5==1) {
//     console.log("this is not a multiple of 5");
// }

// this in javascript

// const student = {
//     name : "ansh",
//     age : 19 ,
//     eng : 99,
//     maths : 100,
//     sci : 100, 
//     getAvg() {     
//         let avg = (this.eng + this.maths + this.sci)/3 ;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// Try and catch statement for errors 

// try {
//     console.log(a);
// } catch(err) {
//     console.log("caught an error ... a is not defined");
//     console.log(err);
// }

// Arrow functions implicit statements

// let cube = (n) => n*n*n;  

// Set Timeout function 

// console.log("Hi There!");

// setTimeout(() =>{
//     console.log("Apna College");
// },4000);

// console.log("Welcome to ");

// let id = setInterval(() => {
//     console.log("Apna College");
// },2000);

// console.log(id);

// let id2 = setInterval(() => {
//     console.log("Hello World");
// },3000);

// console.log(id2);

// let square = ((n) => 
//     n*n
// );

// let id = setInterval(() => {
//     console.log("Hello World");
// },2000);

// setTimeout(() =>{
//     clearInterval(id);
// },10000);

// let arr = [1,2,3,4,5];

//  arr.forEach((el) => {
//      console.log(el);
//  });

// arr.forEach(function (el) {
//     console.log(el);
// });

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);

// let arr = [
//     {
//         name : "Aman",
//         marks : 95,
//     },

//     {
//         name : "Shradha",
//         marks : 94.5,
//     },

//     {
//         name : "Ansh",
//         marks : 99,
//     },
// ];

// arr.forEach((student) => {
//     console.log(student.marks);
// });

// function sum(...args) {
//     // arguments 
//     for (let i = 0; i <args.length;i++) {
//         console.log("you gave us: ",args[i]);
//     }
// }

// console.log("HI MOM!");