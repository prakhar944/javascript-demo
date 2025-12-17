 //*************** ARRAY *******************//

 const myArr=[1,2,3,4,5];
//  console.log(myArr[3]);
   

// ARRAY METHODS //

// myArr.push(6);
// myArr.pop();

// myArr.unshift(3,4);
// myArr.shift();
// myArr.shift();

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(7));
// console.log(myArr.indexOf(3));

// const newArr=myArr.join();
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);

// SLICE & SPLICE //

// console.log(myArr.slice(0,3));    /* THIS FUNCTION  DOES NOT CHANGES THE 
//                                   ORIGINAL ARRAY */
// console.log(myArr);


// console.log(myArr.splice(0,3));    /* THIS FUNCTION CHANGES THE ORIGINAL
//                                     ARRAY (CUT THE GIVEN INDICES FROM IT) */
// console.log(myArr);


marvel_heroes=["Thor", "Hulk" , "Wanda"];
dc_heroes=[ "Batman", "Superman" , "Flash"];
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes[3][2]);

// const all_heroes= marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

const all_new_heroes=[...marvel_heroes,...dc_heroes];
//  console.log(all_new_heroes);
 
 const another_array=[1,2,3,[4,5,6],7,[8,9],10,[11,[12,13,14]]];

 const real_array=another_array.flat(Infinity);
//  console.log(real_array);
 
// console.log(Array.isArray("Prakhar"));
// console.log(Array.from("Prakhar"));
// console.log(Array.from({name: "Prakhar"}));

let score1=100;
let score2=300;
let score3=600;
let score4=500;

console.log(Array.of(score1,score2,score3,score4));
