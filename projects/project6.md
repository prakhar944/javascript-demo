# Projects related to DOM

## Project Link
[Click Here]:( https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

```javascript 

const randomColor= function(){
  const hex="0123456789ABCDEF"
  let color="#"
  for(let i=0;i<6;i++){
color=color+hex[Math.floor( Math.random()*16)]
  }
  return color;
 }
 let intervalID;

 const changeColor=function(){
   function changeBgColor(){
 document.body.style.backgroundColor=randomColor()
   }
  if(!intervalID){
    intervalID=setInterval(changeBgColor,800)
  }
 }

 const stopchangeColor=function(){
 clearInterval(intervalID)
 intervalID=null;
 }

 document.querySelector('#start').addEventListener('click',changeColor)

 document.querySelector('#stop').addEventListener('click',stopchangeColor)


```