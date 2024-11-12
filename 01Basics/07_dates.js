// let myDate = new Date();
// console.log(typeof myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toLocaleString())
let newDate = new Date();
console.log(newDate.getMonth());
newDate.toLocaleString('default',{weekDay:'long'})
console.log(newDate)