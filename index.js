// //
// // const email="somnath516@gmail.com"
// // const Bearertoken= "Berer fjlkdger9i"
// // const extractArray = Bearertoken.split(" ")[1]
// // const username=email.split("@")[0]
// const searchItem="o"
// const Products=["lap","Laptop","Mobile","Book"]
// // console.log(Products.includes(searchItem.toLowerCase()));

// const result = Products.filter((item)=>item.toLowerCase().includes(searchItem.toLowerCase()))
// // console.log(result);

// let arr=[1,2,3,4,5,6,7,8,9,10]
// const a =arr.reduce((a,c,i,r)=>{
//   console.log(5+" x "+c+"="+(5*c));
  
// return(
//     a*c
// )
// },5)
// 8 13 21 34 55
// const a1=()=>{
//   console.log(5);
// }

// console.log(a1());

// const a2=()=>{return 7}
// console.log(a2());



// let arr=[1,1,2,3,4,5,6,7,8,12,10]
// const a =arr.reduce((a,c)=>{
//   console.log(a +"+"+c+"="+(a+c));
//   return a+c
// }
// )
// console.log(a);

// const a =arr.reduce((a,c,i,r)=>{
//   console.log("a",a);
//   console.log("c",c);
//   console.log("i",i);
//   console.log("r",r);
//   return a
// })

// const newarray =arr.forEach((item,index)=>item*2)
// console.log(newarray)
// console.log(arr);
// const mymap=arr.map((item)=>item%2==0)
// const myfilter=arr.filter((item)=>item%2==0)
// console.log(mymap);
// console.log(myfilter);



// // console.log(0);

// // console.log(username);

// // console.log(extractArray);
// // const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// // /**
// //  * Filter array items based on search criteria (query)
// //  */
// // function filterItems(arr, query) {
// //   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// // }

// // console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// // console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']


// function abc(){
//     console.log("Hello Bhi Log");
//     return 1
// }
// const a=abc()
// console.log(a);
// const a =()=> { //calback func
//     console.log("Hello Bhi Log");
// }
// const b = (cb)=>{ //Higher Order Function
//     cb()
//     console.log("Hello This is Curent Funtion");
    
// }
// b(a)
    // const userName = prompt("Please enter your name:");
    // if (userName !== null) {
    //   console.log("Hello, " + userName + "!");
    // } else {
    //   console.log("User canceled the input.");
    // }


// var object = new Object({name:"somnath"});
// const abc =function (){
//    this.fname="Somnath"
//    console.log();
   
// }
// abc.prototype.age=24
// abc.prototype.Greet=(a)=>{
//     console.log(`Hello I am ${a.fname}`)
// }
// abc.prototype.ShowDetails=(a)=>{
//     console.log("name : "+a.fname+" age : "+ a.age);
    
// }
// const a = new abc()
// console.log(a.fname);
// console.log(a.age);
// a.ShowDetails(a)

// let shome={name:"Shome",age:23}
// let shuvo={name:"Shuvo",age:27}

// function hello(g1,g2){
//   console.log(`${g1} ${this.name?this.name:""} ${g2} ${this.age?this.age:""}`);
  
// }
// hello("Hello","How are You")
// hello.call(shome,"Wellcome","Your Age is ")
// hello.apply(shome,["hello","your age :"])
// hello.apply(shuvo,["hello","your age :"])
// // hello.call(shu,"Wellcome","Your Age is ")
// const shomebind = hello.bind(shome)
// shomebind("Wellcome","Your Age is ")
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "EN"
// };

// // Add a Property
// // Object.prototype(person, "year", {value:"2008"})
// Object.defineProperty(person,"year",{value:2008})
// // let p = Object.defineProperty(person, "year", {value:"2008"})
// console.log(person);
// const object = {
//     name: "Somnath",
// };
// Object.freeze(object)
// console.log(Object.isFrozen(object));

// Object.preventExtensions(object)
// Object.isExtensible(object)
// Object.defineProperty(object, "foo", {
//   value: 42,
//   writable: false,
// });

// object.name="Shuvo"
// console.log(object);

// object.foo = 77;
// Throws an error in strict mode

// console.log(object.foo);
// Expected output: 42

// 

// const jsonvalue = JSON.stringify(Person)
// console.log(jsonvalue);

// console.log(jsonvalue);
// console.log(JSON.parse(jsonvalue));
// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];
// console.log(arrayIntegersOriginal3.splice(-1));
// console.log(arrayIntegersOriginal3);

// console.log(undefined+undefined);
// function abc(){
//     this.name="Somnath"
//     this.age=24
//     this.greet=function(){
//         console.log(`Hello I am ${this.name} and my age is ${this.age}`);
//     }
// }
// console.log(abc);

// function abc(){
//     this.name="Somnath"
//     this.age=24
//     this.greet=function(){
//         console.log(`Hello I am ${this.name} and my age is ${this.age}`);
//         console.log(this);
//     }
// }
// const a = new abc()
// a.greet()
// let age=24
//  const abc=()=>{
//     this.name="Somnath"
//     this.age=24
//     this.greet=function(){
//         console.log(`Hello I am ${this.name} and my age is ${this.age}`);
//         console.log(this);
        
//     }
// }
// global
// var a =10
// let b=20
// console.log("gloabal var : ",a);
// console.log("gloabal let : ",b);


// // block scope
// {
//     var a = 5
//     let b = 5

//     a=a+1
//     b=b+1
//     console.log("block var : ",a);
//     console.log("block let : ",b);
// }
// console.log("gloabal var : ",a);
// console.log("gloabal let : ",b);

// console.log(age);
// function scope
// let xyz = function abc(){
    
//      console.log("functions var : ",a);
//      console.log("functions let : ",b);
     
     
// }
// xyz();
/*
var a;

*/
// const Impurefunc= (a)=>a+2
// const purefunc= (a)=>a
// console.log(purefunc(5));
// const count =1
// switch(count){
//     case 0:
//         let a =  5
//         console.log("a is ",a);
//         break
//     case 1:
//        { let a =  0
//         console.log("a is ",a);}
//         break
// }
let a;

console.log(a);
a=10
console.log(a);


// p()
// const p=function s() {
//     console.log("subha");
    
// }
// class abc{
//    constructor(name){
//     console.log("Hello Bhi Log",name);
    
//    }
//     greet(){
//         console.log(`Hello I am ${this.name} and my age is ${this.age}`);
//     }
// } 
// new abc("Somnath")
let arr=[1,2,3,4,5,6,7,8,9,10]

let all = arr.filter((item)=>item%2==0   
)
console.log(all);

