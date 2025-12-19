//*********************** CONDITIONAL STATEMENTS *****************************// 

if (condition) {
    // WORK TO BE DONE // 
}
else if (condition) {
    // WORK TO BE DONE//
} else {                               // ELSE DO NOT REQUIRE CONDITION //
    // WORK TO BE DONE //
}

  //  SHORT HAND NOTATION //

const balance=1000
// if(balance>500) console.log("test"),console.log("test 2")

// SWITCH CASES //

const month="A"
switch (month) {
    case "J":
        console.log("January");
        break;
    case "F":
        console.log("February");
        break;
    case "M":
        console.log("March");
        break;
    case "A":
        console.log("April");
        break;

    default:
        console.log("INvalid Month");
        
        break;
}

// FALSY VALUES //

// false,,0,-0,BigInt 0n, null,undefined,NaN

// TRUTHY VALUES //

// "0",'false"," ",[],{},function(){}


// NULLISH COALESCING OPERATOR (??): null undefined //

let val1;
val1 =5 ?? 10
// console.log(val1);

// TERNIARY OPERATOR //

// condition ? true:false
const price=100
price>=80 ? console.log("more than 80") : console.log("less than 80");


