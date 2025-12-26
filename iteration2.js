// FOR OF LOOP //        // ( FOR OF) LOOP CAN'T BE USED FOR  OBJECTS //

const arr=[1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

const greetings="Hello World"
for  (const i of greetings) {
    // console.log(` each character of greeting is ${i}`);
}

// MAP //
// const map = new Map()
// map.set("IN", "India")
// map.set("FR", "France")
// map.set("SWZ", "Switzerland")
// map.set("ENG", "England")

// console.log(map);

// for (const [key,value] of map) {
    // console.log(key, ':-' ,value);
    
// }


// FOR IN LOOP //

const myobject = {
    js: 'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'mswift in app'
}
 
for (const key in myobject) {
    
// console.log(`${key} shortcut is for ${myobject[key]}`);
    
}

// const map = new Map()
// map.set("IN", "India")
// map.set("FR", "France")
// map.set("SWZ", "Switzerland")
// map.set("ENG", "England")

// for (const key in map ) {    
    // console.log(key);           // MAP CAN'T BE PRINTED BY (FOR IN) LOOP  //
    
// }


// FOR EACH LOOP  //

const lang =[ "js" ,"c" ,"cpp" , "py" , "rb" ];

// lang.forEach( function (item){
//     console.log(item);
    
// } )

// lang.forEach((item,item,arr) =>{
//     console.log(item,item,arr);
    
// })

// function printme(item){
//     console.log(item);
    
// }
// lang.forEach(printme)


const mylang=[
    
    {
        language:"Javascript",
        languageFileName:"js"
    },
    {
        language:"Java",
        languageFileName:"java"
    },
    {
        language:"C++",
        languageFileName:"cpp"
    },
]
// mylang.forEach((i)=>{         //   FOR EACH DOESN'T RETURN ANY VALUE //
//     console.log(i.languageFileName);   
// })

const myNum =[1,2,3,4,5,6,7,8,9,10] 
//  const values = myNum.filter( (nums)=> nums>=4 )             // FILTERS RETURN SOME VALUE //  
//  console.log(values);
const newNum=[]
myNum.forEach( (num)=>{
    if (num>=4) {
        newNum.push(num)
        
    }
} )

// console.log(newNum);


 


