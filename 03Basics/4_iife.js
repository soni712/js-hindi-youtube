//IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION ()()
//An IIFE (Immediately Invoked Function Expression) is a 
//JavaScript function that runs as soon as it is defined. 
(function chai()
//Named IIFE
{
    console.log('DB Connected')
})();
((name)=>{
    console.log(`DB 2 ${name}`)
})('kanu')