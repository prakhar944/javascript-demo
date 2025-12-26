//************************** MAPS IN JS  *****************************// 

const myNum=[1,2,3,4,5,6,7,8,9,10];

// const newNum= myNum.map((num)=> num+10);

// const newNum= myNum.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
// console.log(newNum);



//***************************  REDUCE IN JS ************************// 

const array=[1,2,3,4,5,6,7,8,9]

 let initialValue=0;
//  const newNum1= array.reduce(
//     (accumalator,currentvalue)=> accumalator+currentvalue,
//     initialValue
//  )
//  console.log(newNum1);

const shoppingCart=[
    {
        course: "Python",
        price: 999
    },
    {
        course: "Javascript",
        price: 1299
    },
    {
        course: "Data Science",
        price: 12999
    },
    {
        course: "Mobile Development",
        price: 5999
    }
    
]

const totalBill=shoppingCart.reduce(
    (accu,item)=>  accu+item.price,
0
)
console.log(totalBill);

 