//solutions
let people = ["Greg","Mary","Devon","James"];
//1.) Using a loop, iterate through this array
//and console.log all of the people

//ans method 1.
    // for(let peo of people){
    // console.log(peo);
    // }

//method 2:
    // for(let i=0;i<people.length;i++){
    //     console.log(people[i]);
    // }
//method 3
    // for(let peop in people){
    //     console.log(people[peop]);
    // }

//method 4
// let i = 0;
// while(i<people.length){
//     console.log(people[i]);
//     i++;
// }

//2.) Write the command to remove "Greg" from the array
//let people = ["Greg","Mary","Devon","James"];
people.shift()

//3.) /2.) Write the command to remove "James" from the array
 let removeJames = people.pop();
// console.log(people)

//4.)Write a command to add "matt' to the front of the array
people.unshift("matt");
//console.log(people)

// Question 5
// Write a command to add your name to the end of the array
people.push("Michael");
//console.log(people)

//Question 6
//using a loop, iterate through this array and after console.log ing "Mary" exit
//from the loop

//solution
// for(let i=0; i<people.length; i++){
//     let value = people[i];
//     if(value==="Mary"){
//         console.log(value);
//         break;
//     }
// }

//Question 7

//Write a command to make a copy of the array using slice. The copy should
//not include "Mary" or "Matt"
//console.log(people.slice(2))

//Question 8

//write a commmand that gives the indexOf where Mary is located
let maryIndex = people.indexOf("Mary");
//console.log(maryIndex)

//Question 9
//Write the command that gives indexOf where  "Foo" is located 
let fooIndex = people.indexOf("Foo");
//console.log(fooIndex) //-1

//Question 10

//Redefined the people variable with the With Value you started with. Using the splice
//command. Remove "Devon" from the array and add Elizabeth and "Artie". Your
//array should look like this when you are done ["Greg","Mary","Elizabeth","Artie","James"]

let people2 = ["Greg","Mary","Devon","James"];
people2.splice(2,1,"Elizabeth","Artie");
// console.log(people2)

//Question 11

//create a new variable called withBob and  set it equal to the people array
//concatenated with the string of "Bob"
let withBob = people2.concat("Bob");
console.log(withBob)


