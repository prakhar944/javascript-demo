//******** IMMEDIATELY INVOKED FUNCTION EXPRESSION ************//
(function chai (){
    console.log(`MY CONNECTION IS ON`);    // IIFE Is Used To Remove The Pollution Of Global Scope//
})();
 
((name)=>{
    console.log(`MY CONNECTION IS ON TWO ${name}`);   // IIFE can also be used in arrow function
})("Prakhar");