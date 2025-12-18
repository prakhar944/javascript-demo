//************* OBJECTS ***********// 

// OBJECT LITERALS //

let mySym= Symbol("key1");

const JsUser={
    name: "Prakhar",
    "fullName": "Prakhar Shrivastava",
   [ mySym]:"myKey1",
    Age:19,
    Location: "Delhi",
    email:"prakharshrivastava@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Wednesday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log( typeof JsUser[mySym]);

// Object.freeze(JsUser)  //  NO MORE CHANGES INSIDE THE OBJECT//

JsUser.greeting= function(){
    // console.log("Hello JS User  This Is Greeting Two !!"); 
}

console.log(JsUser.greeting());

JsUser.greetingTwo= function(){
    console.log("Hello JS User This Is Greeting Two!!"); 
}

// console.log(JsUser.greetingTwo());


//********************* OBJECTS(PART-2)***************************// 

const gituser={}
gituser.id="123abc"
gituser.name="Prakhar"
gituser.isLoggedin= false

// console.log(gituser);

const regularUser={
    email: "prakhar@google.com",
    fullname:{ 
        username:{
    firstname: "Prakhar",
    lastname: "Shrivastava"
}
}
}
// console.log(regularUser.fullname.username.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3= Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(gituser))
// console.log(Object.values(gituser))
// console.log(Object.entries(gituser))

//**************************OBJECTS(PART-3)******************************// 
const course ={
    corsename: "JS using git ",
    price: "899",
    courseUser: "Prakhar"
}
const {courseUser: User}= course

// console.log(User);

//****JSON*****//

// {
//     "name": "Prakhar",
//     "coursename":"JS using git",
//     "price": "500"
// }

