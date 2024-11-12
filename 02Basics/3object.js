// There are two ways to declare Objects -1.Literal 2. constructor-- create singleton obj
//singleton
//1. Object Literals
const mySym = Symbol('Key1')
const jsUser = 
{
    name:'kanu',
    age:18,
    location:'Jaipur',
    email:'kanu@gmail.com',
    [mySym]:'myKey1',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday'],
    'full name' :'soni bhandari'

}
console.log(jsUser.isLoggedIn)
console.log(jsUser['isLoggedIn'])
console.log( typeof jsUser[mySym]);
jsUser.email = 'kktest@@@@';
console.log(jsUser);
//if we want toi frezzze values of Object that it cannot be chaged
// Object.freeze(jsUser);
// jsUser.email ='pppppppppppp';
jsUser.greeting = function()
{
    console.log('Hello Js User')
}
jsUser.greetingTwo = function()
{
    console.log(`${this.age}`)
}
console.log(jsUser.greetingTwo());
