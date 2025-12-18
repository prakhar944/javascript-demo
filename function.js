//********************* FUNCTION *********************//
function sayMyName(){
console.log("D");
console.log("H");
console.log("R");
console.log("U");
console.log("V");
}
// sayMyName()

function sumOfTwo(num1,num2){
    return num1+num2
}

// sumOfTwo(3,4)
// sumOfTwo(3,"4")
// sumOfTwo(3,"a")
// sumOfTwo(2,undefined)
// sumOfTwo(2,null)

const result=sumOfTwo(3,5)
// console.log("Result: ",result);

function logginUser(username){
    if(username===undefined){console.log("Please Enter The Arguememt Of The Function");
        
    }
    else{
    return `${username} just logged in.`}
}

// console.log(logginUser())

//************************ FUNCTION WITH OBJECTS***************************// 
function cartPrice(...num1){
      return num1
}
// console.log(cartPrice(200,300,400));

const user={
    username: "Prakhar",
    price: 299
}

function HandleObject(object){
    console.log(`Username is ${object.username} and price is ${object.price}`);
    
}
// HandleObject(user)

const myNewArray=[200,400,100,600];
function returnSecondValue(array){
    return array[1];
}
console.log(returnSecondValue(myNewArray));


