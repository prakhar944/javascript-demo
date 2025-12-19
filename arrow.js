const user = {
    username: "Prakhar",
    price:1999,
  
welcomeMessage : function(){
    console.log(`${this.username} welcome to function`);      
    // console.log(this.username) 
    
   }

}

// user.welcomeMessage();
user.username="Dhruv"
// user.welcomeMessage();
// console.log(this)


function arrow (){
    let visitor="Sparsh"
    console.log(this.visitor);}     // (this) CAN ONLY BE USED FOR AN OBJECT AND DOES NOT WORK INSIDE A FUNCTION //
// arrow()

//********************************** ARROW FUNCTION*************************// 

const brother=()=>{
    let username="Shikhar"
    console.log(this);
}
// brother()

const multiply=(num1,num2)=>{
 return num1*num2;
}
// console.log(multiply(9,7));


