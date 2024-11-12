// this-> referes to current context of obj
const user ={
    username:'kanu',
    price:999,
    welcomeMessage: function()
    {
        console.log(`Welcome to website ${this.username}`)
        console.log(this)
    }
}
user.username ='piku'
console.log(user.welcomeMessage())
console.log(this);
const chai =()=>{
    let username='kiu';
    console.log(this)
}
console.log(chai())