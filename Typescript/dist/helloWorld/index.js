"use strict";
// // // // // // console.log('Assalamualikum');
// // // // // let age: number = 20;
// // // // let sales :number = 123_414_432;
// // // // let course: string ='Typescript';
// // // // let is_published: boolean = true;
// // // // let sales  = 123_414_432;
// // // // let course ='Typescript';
// // // // let is_published = true;
// // // // let level
// // // // function render(params:document) {
// // // //     console.log(document);
// // // // }
// // // // let numbers: number[] =[1,2,3]
// // // // let number =[]
// // // // number[0]=1;
// // // // number[0]='1';
// // // // let numbers: number[] =[]
// // // // numbers.forEach(n => n.toString)
// // // // id and name
// let user: [number, string] = [1, 'Mosh'];
// user[0].
// user.push(1);
// // // const small = 1;
// // // const medium = 2;
// // // const large = 3;
// // // //Pascal Case
// const enum Size { Small = 1, Medium, Large };
// // // //for relating objects , using const enum genereates optimized js code
// enum Size { Small = 1, Medium, Large };
// enum Size { Small = 1, Medium = 'm', Large = 'i' };
// let mySize: Size = Size.Medium;
// console.log(mySize)
// // // function calculateTax(income: number): number {
// function calculateTax(income: number, taxYear = 2022): number {
//     // let x;
//     if (income < 50_000) {
//     if ((taxYear) < 2022) {
//         return income * 1.2;
// undefined
//         return income * 1.3;
//         //undefined forfun in js
//     }
//     calculateTax(10_000)
// }
// // type Employee = {
// //     readonly id: number,//makes it read only cannot be modified it accidentally
// //     name: string,
// //     retire: (date: Date) => void
// // }
// // let employee: Employee = {
// //     id: 1,
// //     name: 'Sajid',
// //     retire: (date: Date) => {
// //         console.log(date);
// //     }
// // }
// // employee.name = "mosh";
// // employee.id = 0;
// //repeat the structure for creating new objects
// //NO REPITITION
// //Hard to read
// //SO use type alias
// // Union se more than one type de sakte hai varuable  to
// // function kgTOLbs(weight:number | string) : number {
// //     //Narrowing
// //     if(typeof weight === 'number')
// //     return weight * 2.2;
// //     else
// //     return parseInt(weight) * 2.2;
// // }
// // kgTOLbs(10)
// // kgTOLbs('10Kg')
// //Technique to make variable have many types
// // intersection
// // type Draggable = {
// //     drag: () => void
// // };
// // type Resizeable = {
// //     resize: () => void
// // };
// // type UIWidget = Draggable & Resizeable;
// // let textbox: UIWidget = {
// //     drag: () => { },
// //     resize: () => { },
// // }
// //Literal limiting value / excat or specifics value
// // type Quantity = 50 | 100;
// // let quantity: Quantity = 100;
// // type Metric = 'cm' | 'inch';
// //NUllable types
// // function greet(name: string | null | undefined) {
// //     if (name) {
// //         console.log(name.toUpperCase());
// //     } else {
// //         console.log('Hola');
// //     }
// // }
// // greet(null)
// type Customer = {
//     // birthday: Date
//     birthday?: Date
// };
// function getCustomer(id: number): Customer | null {
//     return id === 0 ? null : { birthday: new Date() };
// }
// let customer = getCustomer(1);
// // if (customer!=null && customer!==undefined)
// //Optional property access operator 
// // console.log(customer?.birthday);
// console.log(customer?.birthday?.getFullYear)
// // console.log(customer.birthday);
// //Optional element access operator for ARRAYS
// //customers?.[0]
// //Option call
// let log: any = null;
// log?.('a');
// let speed: number | null = null;
// let ride = {
//     //falsy values (undefioned , null ,"" , false ), 0
//     // speed: speed || 30
//     //Nullish coalesscing opoetraor
//     speed: speed ?? 30
// }
//TYPE ASSERTION
// let phone = document.getElementById('phone') as HTMLInputElement;
// let phone = document.getElementById('phone') as HTMLInputElement;
//HTML ELement is a class defined in Js for html elements
//HTML InputElement
// phone.value
// function render(document:unknown) {
//     //Narrowing
//     if (typeof document === 'string') {
//         document.toUpperCase();
//     }
//     document.move();
//     document.fly();
//     document.whateverWewant();
// }
// unknown is better than any
// never type
// function reject(message: string):never {
//     throw new Error(message);
// }
// function processEvents(): never {
//     while (true) {
//         //Read a message from a queue
//     }
// }
// reject('.....')
// processEvents();
// console.log('Hello');
//# sourceMappingURL=index.js.map