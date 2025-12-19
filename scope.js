 let  score3=300;
if(true){
let score1=10;
const score2=20;
let  score3=30;
// console.log(score3);
}

// console.log(score1);  
// console.log(score2);   
// console.log(score3);   CANT NOT BE USED AS IT COMES OUT OF IT SCOPE THIS

function one(){
    const username="Prakhar"
function two(){
    const website="github"
    // console.log(username);
}    
two()
// console.log(website); // THIS IS OUT OF ITS SCOPE//

}
one()

//************************************* CONCEPT **************************//

function addOne(num){
    return num+1;
}
addOne(5);
const addTwo=function(num){               // THIS ALSO A WAY TO USE FUNCTION //
    return num+2;
}
addTwo(5);


