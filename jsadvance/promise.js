// const promiseOne= new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// });

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log( " Async task 2 is completed");
//         resolve();
        
//     },1000)
// }).then(function(){
//     console.log("Promise 2 consumed");
    
// })

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Prakhar", email: "prakhar@example.com"})
    },1000)
})
promiseThree.then(function(data){
    // console.log(data);
    
})

// const promiseFour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"Dhruv" , password: 123})
//         }else{
//             reject(" ERROR: Something went wrong")
//         }
//     },1000)
// })
// promiseFour
// .then((user)=>{
// console.log(user);
// return user.username
// })
// .then((username)=>{
//     console.log(username);
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })
// .finally(()=>{
//     console.log("THE PROMISE IS FINALLY PERFORMED");
    
// })

// const promiseFive= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"JS" , password: 123})
//         }else{
//             reject(" ERROR: JS went wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive() {
//    try {
//      const response = await promiseFive;
//     console.log(response);
    
//    } catch (error) {
//     console.log(error);
    
//    }
// }
// consumePromiseFive();
// async function getUser(){
//   try {
//       const response= await fetch("https://jsonplaceholder.typicode.com/users")
//    const info = await response.json();
//    console.log(info);
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// getUser();

fetch("https://api.github.com/users/prakhar944")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log("E: ",error);
    
})