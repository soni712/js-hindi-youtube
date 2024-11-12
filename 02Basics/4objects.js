// const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = '123';
tinderUser.name = 'sony';
tinderUser.isLoggedIn = true
// console.log(tinderUser)
const regularUser = {
    email:'sony@gmail.com',
    fullName :{
        userfullname:{
            firstname:'sb',
            lastname:'bhandari'
        }
    }
}
// console.log(regularUser.fullName.userfullname);
const obj1={1:'a', 2:'b'}
const obj2 ={3:'a', 4:'b'}
const obj3 = {...obj1,...obj2};
const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwnProperty('id'));
const course ={
    coursename:'Js in Hindi',
    price:'999',
    courseInstructor:'soni Bhandari'
}
// Object destructuring
const {courseInstructor:Instructor} = course;
console.log(Instructor)
