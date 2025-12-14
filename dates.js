// DATES//

let date= new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleDateString());
// console.log(typeof date);

let myDate=new Date(2006.5,9);  //( YYYY/MM/DD) Format is used and MM starts from(0)..
// console.log(myDate.toDateString());

// let  myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myDate.getTime());

let newDate= new Date();
console.log(newDate.getMonth());

newDate.toLocaleString('Default', {
    weekday: 'long',
    
})