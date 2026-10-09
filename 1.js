// Q1 flaten array
// const nums = [1,2,[3,[5,6]],'hello']

// function flattenArray(arr , resultArray) {
//     for(let i =0; i<arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//           flattenArray(arr[i] , resultArray)
//         } else {
//             resultArray.push(arr[i])
//         }
//     }
//     return resultArray;
 
// }

// console.log(flattenArray(nums , []))


// Q2 destructing array
// const [a,b] = [1,2,3]; // a = 1 b = 2
// const [x,,y] = [5,6,7]; // x = 5 y = 7

// destructing specific index
// const {3:a} = [1,2,3,4,5]; // destrucing from 3 index as a

// const res = [1,2,3]
// res[4] = 5
// console.log(res[3]) // undefined
// console.log(res.length) // 5


// Q3 transforming data 
// const input = [
//     {
//         key : 'sample1',
//         data : 'sample1',
//     },
//      {
//         key : 'sample2',
//         data : 'sample2',
//     }, {
//         key : 'sample1',
//         data : 'sample1',
//     }, {
//         key : 'sample3',
//         data : 'sample3',
//     }, {
//         key : 'sample1',
//         data : 'sample1',
//     },

// ]
// const output = {
//     "sample1" : [{
//         key : 'sample1',
//         data : 'sample1',
//     },{
//         key : 'sample1',
//         data : 'sample1',
//     },{
//         key : 'sample1',
//         data : 'sample1',
//     },],
//     "sample2" : [{
//         key : 'sample2',
//         data : 'sample2',
//     }],
//     "sample3" : [{
//         key : 'sample3',
//         data : 'sample3',
//     }]
// }

// const result = {}
// input.forEach((obj) => {
// if(result[obj.key]) {
//     result[obj.key].push(obj)
// } else{
//     result[obj.key] = [obj]
// }
// })
// // or we can use reduce function also here
// console.log(result)

// Q 5 pagination ? 

// const results = await Model.find()
//   .skip(skip)
//   .limit(limit + 1);

// const hasNextPage = results.length > limit;
// const data = results.slice(0, limit);
 // or 
// backend making db query to know how many docuemnts that ssatify this condition not fethcing the actual document  only fetching number of document whihc is faster
// const filter = {
//   userId: req.user.id,
//   status: 'completed'
// };
// const totalOrders = await Order.countDocuments(filter);


// Q 6 remove duplicates fom array
// const arr = ['apple','banana','apple']

// const nums = [];
// for(let i = 0; i<arr.length; i++) {
//     if(arr.indexOf(arr[i]) == i) {
//     nums.push(arr[i])
// }
    
// }
// console.log(nums);
// or we can use a set also
// console.log([...new Set(arr)])


// Q 7 write code to block main thread

// function blockMainThread(ms) {
//   const start = Date.now();

//   while (Date.now() - start < ms) {
//     // Busy loop – blocks the main thread
//   }
// }

// blockMainThread(3000);
// console.log("This runs after blocking");


// Q 8 practical example of currying how it makes function resuable by not passing all the argumenets at once
// const createApi = baseURL => endpoint => {
//   return fetch(`${baseURL}/${endpoint}`).then(res => res.json());
// };

// const api = createApi("https://api.example.com");

// api("users");
// api("posts");


// Q 9 Generator function 
// function* myGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }


// const gen = myGenerator()
// console.log(gen.next())
// console.log(gen.next())

// Q 10 
// function computeAmount() {
//     let initialAmount = 0;
    
//    return {
//       crore :  function (amount) {
//         initialAmount += (amount*10000000)
//         return this
//     },
//     lacs : function (amount) {
//        initialAmount += (amount*100000) 
//        return this
//     },
//     thousand : function (amount) {
//          initialAmount += (amount*1000)
//          return this
//      },
//    value :  function () {
//          return initialAmount
//          return this
//      }
//    }
// }

// console.log(computeAmount().crore(1.5).lacs(1).value())

// Q 11 custom apply

// Function.prototype.customApply = function(context , arg) {
// const myContext = this
// const sym = Symbol('fn')
// context[sym] = myContext
// return context[sym](...arg)
// }

// const obj = {name : 'Hatim'}
// function sum(a,b) {
//     console.log(this.name , a+b)
// }

// sum.customApply(obj , [4,5])

// Q 12 custom call
// Function.prototype.customCall = function(context , ...arg) {
//     const myContext = this
//     const sym = Symbol('fn')
//     context[sym] = myContext
//     return context[sym](...arg)
// }

// sum.customCall(obj , 4,5)

// Q 13 custom bind
// Function.prototype.customBind = function(context) {
// const fn = this

// return function(...arg) {
//     return fn.apply(context , arg)
// }
// }

// const cb = sum.customBind(obj)
// cb(4,5)


// Q 14 write function that should auto retry fetching a failed promise for the specific number of times

// async function autoFetch(fetcher , maximumTryCount) {
    
//     try {
//         console.log('trying...' , maximumTryCount)
//         const result = await fetcher()
//         return result
//     } catch(e) {
//         if(maximumTryCount <= 1) {
//             throw new Error('limit reached')
//         }
//     }   
//     return autoFetch(fetcher , maximumTryCount-1)
// }


// const p1 = () =>  new Promise((resolve , reject) => {
//     const randomNumber = Math.random() > 0.5
//     if(randomNumber) {
//         resolve('p1 resolved')
//     } else {
//         reject('p1 reject')
//     }
    
// })


// autoFetch(p1 , 3)


// Q 15 divide into smaller chunks 
// function chunks(arr , size) {
// const result = []
// let x = 0;
// for(let i = 0; i<arr.length; i++) {
//     if(Array.isArray(result[x])) {
//         if(result[x].length < size) result[x].push(arr[i]);
//         else {
//         x++;
//         result[x] = [arr[i]];    
//         }
//     } else {
//         result[x] = [arr[i]]
//     }
// }
// console.log(result)
// }

// chunks([1,2,3,4,5],2)


// Q 16 implement debounce where for the first input it should give suggestions immedialty and after that it should follow debounce patter

// function debounce(fn , delay) {
// let id;
// let first = true;
// return (...args) => {
//     if(first) {
//         first = false;
//         fn(...args)
//     } else {
//     clearTimeout(id)
//      id = setTimeout(() => {
//         fn(...args)
//     } , delay)
// }
// }
// }

// Q 17 Abort controller : it cancel's ongoing async operations / fetch requests


// Q 18 // output : 
// count() // 1
// count() // 2
// count() // 3
// count.reset() // counter = 0


// const count = (() => {
//     let value = 0;
//     function inner() {
//         value++;
//         console.log(value);
//         return value;
//     }
//     inner.reset = function() {
//         value = 0;
//     }
//     return inner;
// })()



// count()
// count()
// count()
// count.reset()
// count()

// Q 19 find a second highest number in an array ? 
// let largest =  Number.MIN_SAFE_INTEGER
// let secondLargest = Number.MIN_SAFE_INTEGER


// for(let i = 0; i<nums.length; i++) {
//     if(largest < nums[i]) {
//         secondLargest = Math.max(largest , secondLargest);
//         largest = nums[i];
      
//     }
// }

// Q 20 what will be the output of this ? 
// function Count() {
//     const [count , setCount] = useState(0)
//     setCount(count+1)
//     return <h1>{count}</h1>
// }
// it will endup making a infinite recursion because evrytime we are rendering the component and then updating the state which will again cause a re-render

// Q 21 Intersection of two sorted arrays

// const a1 = [1,2,3,4,4];
// const a2 = [2,2,4,5,5,6,2000];
// // output : [2,4];

// function intersection(arr1 , arr2) {
//     const result = [];
//     const map1 = new Map()
//     const map2 = new Map()
//    for(const a of arr1) {
//       if(map1.has(a)) {
//           map1.set(a , map1.get(a)+1)
//       } else {
//          map1.set(a , 1)
//    }
//    }
//       for(const a of arr2) {
//       if(map2.has(a)) {
//           map2.set(a , map2.get(a)+1)
//       } else {
//          map2.set(a , 1)
//    }
//    }
// //   console.log(map1);
// //   console.log(map2);
//    for(const [key , value] of map1) {
//        if(map2.has(key)) {
//            for(let i = 0; i< Math.min(map1.get(key) , map2.get(key)); i++) {
//                 result.push(key)
//            }
//        }
//    }
//     return result;
// }

// console.log(intersection(a1 , a2));


// another solution for the above same problem

// function intersection(arr1 , arr2) {
//     const arr = [];
//     let x = 0;
//     let y = 0;
//     while(x < arr1.length && y < arr2.length) {
//         if(arr1[x] == arr2[y]) {
//             arr.push(arr2[y]);
//             x++;
//             y++;
//         } else if(arr1[x] < arr2[y]) {
//             x++;
//         } else {
//             y++;
//         }
//     }
//     return arr;
// }
// console.log(intersection([1,2,2,3,4,4] , [2,2,4,5,5,6,2000]))


// Q 22 const data = [{
//     name : 'Hatim',
//     age : 22,
// },
// {
//     name : 'Ayush',
//     age : 21,
// },
// {
//     name : 'Abhay',
//     age : 23,
// },
// {
//     name : 'khizar',
//     age : 22,
// }
// ]

// // output : {22:[{}] , 21 : [{}] , 23 : [{}]}


// const result = data.reduce((acc , val) => {
//     if(acc[val.age]) {
//      acc[val.age].push(val)
//     } else {
//         acc[val.age] = [val]
//     }
//     return acc;
// } , {})

// console.log(result)

// Q 23 flatten object
// const input = {
//   name: "Hatim",
//   address: {
//     city: "Delhi",
//     pin: {
//       code: 110001,
//       area: "CP"
//     }
//   },
//   skills: {
//     frontend: {
//       js: "advanced",
//       react: "intermediate"
//     },
//     backend: "node"
//   }
// };
// const output = {
//   "name": "Hatim",
//   "address.city": "Delhi",
//   "address.pin.code": 110001,
//   "address.pin.area": "CP",
//   "skills.frontend.js": "advanced",
//   "skills.frontend.react": "intermediate",
//   "skills.backend": "node"
// }

// function flattenObject(result , obj , defaultKey=null) {
// for(const key in obj) {
//     if((typeof obj[key]) == 'object' ) {
//         // it's an object
//         const nextKey = defaultKey ?`${defaultKey}.${key}` : key
//          flattenObject(result , obj[key] , nextKey)
//     } else {
//         // not an object
//         if(defaultKey) {
//           result[`${defaultKey}.${key}`] = obj[key]
//         } else {
//              result[key] = obj[key]
//         }
//     }
// }
// }

// const ans = {}
// flattenObject(ans, input)
// console.log(ans)

// Q 24 Stop multiple button clicks
// ans there are couple of ways to do this we can just disable the button after user clicks on it and when the response came we will just enable it another ways to achive this is we can implmenet debounce here which will cancel the prevoius api calls or if we want that user can only submit the form once in specific time window then we can implmenent throttling.


// Q 25 Implement LRU cache 
// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.cache = new Map();
//   }

//   get(key) {
//     if (!this.cache.has(key)) return -1;

//     const value = this.cache.get(key);

//     // move key to most recently used
//     this.cache.delete(key);
//     this.cache.set(key, value);

//     return value;
//   }

//   put(key, value) {
//     if (this.cache.has(key)) {
//       this.cache.delete(key);
//     }

//     this.cache.set(key, value);

//     if (this.cache.size > this.capacity) {
//       // remove least recently used
//       const lruKey = this.cache.keys().next().value;
//       this.cache.delete(lruKey);
//     }
//   }
// }


// Q 26 implement custom pollyfill of promise.all()
// implement promise.all()

// function myPromiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     const results = [];
//     let completed = 0;
//     if (promises.length === 0) {
//       resolve([]);
//       return;
//     }

//     promises.forEach((promise, index) => {
//       Promise.resolve(promise)
//         .then(value => {
//           results[index] = value;
//           completed++;

//           if (completed === promises.length) {
//             resolve(results);
//           }
//         })
//         .catch(err => {
//           reject(err);
//         });
//     });
//   });
// }

// myPromiseAll(
//     [
//    Promise.resolve(10),
//    Promise.resolve(20)
//     ]
// ).then((res) => {
//     console.log(res)
//  }) 
// .catch((err) => {
//     console.log(err)
// })


// var a = 1;
// {
//   let a = 2;
//   console.log(a);
// }

// output : 2

// let a = 10;
// {
//   var a = 20;
// }
// console.log(a)

// output : syntax error

// var a = 5;
// {
//     var a = 10;
// }
// console.log(a)
// output : 10


// let x = 10;
// function test(x) {
//   console.log(x);
// }
// test(20);

// output : 20

// function test() {
//   a = 10;
// }
// test(); 


// console.log(a);

// output : 10

// function test() {
//   {
//     let a = 10;
//   }
//   console.log(a);
// }
// test();

// output : refrence error

// let a = 1;
// {
//   let a = 2;
//   {
//     let a = 3;
//     console.log(a);
//   }
// }

// output : 3

// {
//   console.log(typeof a);
//   let a;
// }

// output : refrence error

// console.log(a);
// var a = 10;
// function a() {}

// output : function

// var a = 10;
// function a() {}
// console.log(a);

// output : 10

// console.log(test);
// test();
// var test = function () {
//   console.log("Hi");
// };
// output : undefined , type error



// var a = 10;
// function test(a) {
//   a = 20;
// }
// test(a);
// console.log(a);

// output : 10


// let a = 10;
// function foo() {
//   console.log(a);
// }
// function bar() {
//   let a = 20;
//   foo();
// }
// bar();


// output : 10

// {
//   let a = 10;
//   function test() {
//     console.log(a);
//   }
// }
// test();

// output : 10


// var a = 10;
// function test() {
//   console.log(a);
//   var a = 20;
// }
// test();

// output : undefined


// if (true) {
//   function f() {}
// }
// console.log(typeof f);


// output : function

// for (let i = 0; i < 1; i++) {
//   let i = 10;
//   console.log(i);
// }

// output : 10

//  function test(a, b = a) {
//   let a = 10;
//   console.log(b);
// }
// test(5);

// output : a is already defined



// let fn;
// {
//   let a = 10;
//   fn = function () {
//     console.log(a);
//   };
// }
// fn();

// output : 10



// console.log(foo);
// foo();
// var foo = () => {
//   console.log("Hello");
// };

// output : undefined , type error

// var a = 1;
// {
//   let a = 2;
//   {
//     function a() {}
//   }
// }
// console.log(a);

// output : 1

// function test(a = b, b = 10) {
//   console.log(a, b);
// }
// test();

// output : refrence error

// let x = 10;
// function test(a = x, x = 20) {
//   console.log(a, x);
// }
// test();

// output : refrennce error

// function sum(x=x+1) {
//     console.log(x)
// }
// sum(4)

// output : 4

// let total = 0;

// function updateTotal(total = total + 1) {
//   console.log(total);
// }
// updateTotal()


// function outer() {
//   let a = 10;
//   return function inner() {
//     console.log(a);
//   };
// }



// let fn = outer();
// let a = 20;
// fn();


// output : 10



// let a = 10;
// {
//   let { a = a } = {};
// }


// output : refrence error