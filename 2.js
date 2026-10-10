// var a = "Hatim";  
// can be reassigned : 
// a = "Poonam";
// can be re-declare as well
// var a = "Abhay";

// let b = "Hussain";
// can be reassigned 
// b = "Chimaniya";
// can't be re-declared 

// const c = "Founder";
// can neither be re-declare and nor be reassgin


// Types Of Operators : 
// 1) Arithmetic operators : 
// + - * / % ++ -- ** 

// 2) Assignment Operatos : 
// = += -= *= **= /= %=

// 3) Comparasion Operatos : 
// == === > < <= >= != !== 

// 4) Logical Operatos : 
// || && ! 

// 5) Turnory Operator : 
// a == b ? "Hatim" : "Poonam";


// for(let i = 1; i<=10; i++) {
//     console.log("Millionare");
// }

// let x = 10;
// while(x > 0) {
//     x--;
//     console.log("1 Million Users");
// }


// let arr = ["1" , "2" , "3"];
// const obj = {
// name : "Hatim",
// age : "23"
// };

// `for(const a of arr) {
//     console.log(a);
// }`

// for(let a = 0; a<arr.length; a++) {
//     console.log(arr[a]);
// }

// for(const Vaishali in obj) {
//     console.log(obj[Vaishali]);
// }


// arr.forEach((value , idx , ar) => {
//     console.log(`Index : ${idx} , value : ${value} , Array : ${ar}`);
// }); 

// let x = null;

// let result = x ?? "Empty Value";

// console.log(result);

// const obj = {
// Name : "Hatim",
// wife : "Sarah",
// };

// console.log(obj.age);


// let a = 10;
// let b = a;
// b = "Hello";


// let obj1 = {};
// let obj2 = obj1;
// obj2 = [];


let arr = [1,[2],1,3];

// arr.push(4);
// arr.pop();
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// const idx = arr.find(1);
// console.log(idx);

// const elements = arr.slice(1);
// console.log(elements);
// const elements = arr.splice(1,2);
// console.log(elements);
// includes
// firstIndex
// lastIndex
// sort // mute the orignal value
// toSorted // doesn't mute the orignal value
// reverse
// flat 
// join

// arr.join();
// console.log(arr.join());
// arr.flat(1);
// console.log(arr.flat());

// assgin , object 
// deep shallow copy

const obj1 = {
    name : {
        firstName : "Hatim",
        lastName : "Hussain"
    },
    username : "hatim001"
};
const obj2 = {
    a : 1
};
const obj3 = {
    b : 2
};

// console.log(obj1.age);
// console.log(obj1["name"]);

// const { name } = obj1;
// console.log(obj1);

// const obj4 = {...obj2 , ...obj3};
// console.log(obj4);

// const obj4 = Object.assign({} , obj2 , obj3);
// console.log(obj4);

// function test(...interest2) {
//     console.log(interest2);
// }

// test("gym" , "running" , "cicket");
// const [a , b , ...rest] = arr;


// const nums = [1,2,3];
// const [a,b] = nums;
// console.log(a,b);

// const {2:a} = nums;
// console.log(a);



// regular function 
// function sum(a,b) {
//     return a+b;
// }


// sum.nameK = "Hatim";
// sum.age = 23;
// console.log(sum.age);
// console.log(sum.nameK);

// const obj = {};
// obj.name = "Hatim";
// console.log(obj.name);


// const calc = (a , b , c) => {
//     const grossProfit = (a-b)*c;
//     console.log(grossProfit);
// };


// calc(3,1,5);

// IIFE
// (() => {
//     console.log("Developer");
// })();


// const obj = {
//     name : "Sarah",
//     greet() {
//         console.log(this.name);
//     }
// }

// obj.greet();

// const fn = obj.greet;

// fn();


// function func(){
//     console.log(this);
// }

// const func2 = () => {
//     console.log(this);
// }

// // func();

// func2();


// const obj = {
//     name : "Sarah",
//     greet : ()=> {
//         console.log(this.name);
//     }
// }

// function Hello() {
// const age = 23;
// const sayHello = () => {
//     console.log(this.age);
// }
// sayHello();
// }

// Hello();
// obj.greet();


// Dough - base -  bake
function makeDough(cb) {
setTimeout(function() {
    let dough = "dough";
    cb(dough)
} , 2000);
}

// callbacks 

// function makeBase(dough , cb) {
//     setTimeout(function() {
//         let base = `${dough} + base`;
//         cb(base);
//     } , 2000);
// }

// function bakePizza(base , cb) {
//     setTimeout(function() {
//         let pizza = `${base} ---> heat`;
//         cb(pizza);
//     } , 2000);
// }


// makeDough(function(dough) {
//     makeBase(dough , function(base) {
//         bakePizza(base , function(pizza) {
//             console.log(pizza);
//         })
//     }
// )
// })


// Promises 

  function makeDough(raw) {
      let doughPromise = new Promise(function (resolve, reject) {
        if (raw) {
          setTimeout(function () {
            let dough = "dough";
            resolve(dough);
          }, 2000);
        } else {
          reject("No raw material provided");
        }
      });
      return doughPromise;
    }

    function makeBase(dough) {
      let basePromise = new Promise(function (resolve, reject) {
        if (dough) {
          setTimeout(function () {
            let base = dough + "->" + "heat";
            resolve(base);
          }, 2000);
        } else {
          reject("No dough  provided");
        }
      });
      return basePromise;
    }

    function addTopings(base) {
      let topingsPromise = new Promise(function (resolve, reject) {
        if (base) {
          setTimeout(function () {
            let rawPizza = base + "->" + "Veggies";
            resolve(rawPizza);
          }, 2000);
        } else {
          reject("No base  provided");
        }
      });
      return topingsPromise;
    }

    // makeDough("raw").then((res) => {
    //    return makeBase(res);
    // }).then((res) => {
    //     return addTopings(res);
    // }).then((res) => {
    //     console.log(res);
    // })


    // async / await
    // async function makePizza(raw) {
    //  const dough = await makeDough(raw);
    //  const base = await makeBase(dough);
    //  const pizza = await addTopings(base);
    //  console.log(pizza);
    // }

    // makePizza("Maida");

    