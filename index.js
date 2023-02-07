console.log("hello");
const cars = ["saab", "Volvo", "BMW"];
cars[0] = "opel";
console.log(cars);
console.log(cars[0]);
console.log(cars[2]);
console.log(cars[3]);

// const person = ["john", "doe", 46];
// console.log(person[0]);

const person = { firstName: "Johhn", lastName: "doe", age: "46" };
console.log(person.lastName);
console.log(cars.length);
console.log(cars.sort());

const fruits = ["Vanana", "orange", "apple", "mango"];
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// console.log(fruits.push("lemon"));
// console.log(fruits.push("guava"));
// console.log(fruits.push("bluebeeryy"));
// console.log(fruits);

// console.log(fruits.pop());
// console.log(fruits.push("kiwi"));
// console.log(fruits.shift());
// console.log(fruits.unshift("Lemon"));
// console.log(fruits);
// console.log(fruits.reverse());
// console.log(fruits.slice(1));
// console.log(fruits.slice(3));

// console.log(fruits.toString());
// console.log(fruits.join());
// console.log(delete fruits[0]);

// const girls = ["rita", "sita"];
// const boys = ["hari", "ram"];
// console.log(girls.concat(boys));
// console.log(girls.concat("sristi"));

// const months = ["jan", "march", "aprol"];
// console.log(months);
// console.log(months.splice(1, 0, "Feb"));
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// console.log(arr1.concat(arr2, arr3));

// const arr = new Array(23, 4334, 43, "pappaya");
// console.log(arr, length);
// console.log(Array.isArray(arr));
// arr[0] = "ram";
// console.log(arr);
// console.log(arr.indexOf(43));
// // console.log(arr.lastIndexOf());
// // console.log(typeof arr);
// console.log(fruits instanceof Array);

/* forEach()- calls a function (a callback function) once for each array element*/
// const array1 = ["a", "b", "c"];
// array1.forEach((index) => console.log(index));

// const arraySparse = [1, 3, , 7];
// let numCallbackRuns = 0;
// arraySparse.forEach((element) => {
//   console.log({ element });
//   numCallbackRuns++;
// });
// console.log({ numCallbackRuns });

const fruitss = ["manfo", "apple", "orange"];
// let a = 0;
fruitss.forEach(function (index, value) {
  console.log(index, value);
  //   a++;
});
// console.log({ a });
// const colors = ["red", "green", "blue"];

// colors.forEach((color, index) => {
//   console.log(`Color at index ${index}: ${color}`);
// });

// const colors = ["red", "green", "yellow"];

// colors.forEach((index) => {
//   console.log(index);
// });

/*Map iteration in array--with we can return data and use somewhere else */
// const colors = ["red", "orange", "blue"];
// const mappedList = colors.map((value, index, array) => {
//   return `<li>${value}</li>`;
// });
// console.log(mappedList);
// eg-2
// const numbers = [1, 2, 4, 6];
// const doubledValue = numbers.map((value) => value * 2);

// console.log(doubledValue);

// 3rd example
// const employees = [
//   {
//     name: "ram",
//     post: "worker",
//   },
//   {
//     name: "raj",
//     post: "banker",
//   },
// ];
// const mappedData = employees.map(function (value, index, array) {
//   return "I have job in " + value.post;
// });
// console.log(mappedData);

/*filter-HOF --> kei condition anusar/baat extract garna. It has to return true if the condition is satisfied else false */

const ages = [23, 45, 45, 12];
const canVote = ages.filter((value) => {
  if (value >= 18) {
    return true;
  } else return false;
});

console.log(canVote);

// eg-2

const age = [21, 34, 12, 15, 16];
const filteredAge = age.filter(function (value) {
  if (value >= 16) {
    return true;
  } else {
    return false;
  }
});
console.log(filteredAge);

// const employees = [
//   {
//     name: "abc",
//     age: 20,
//     post: "frontend",
//   },
//   {
//     name: "x",
//     age: 200,
//     post: "backend",
//   },
//   {
//     name: "y",
//     age: 30,
//     post: "frontend",
//   },
// ];
// logic part can be separated by following way
// const myFilterer = (value) => value.age > 23 && value.post === "frontend";
// const eligibleEmployee = employees.filter(
//   myFilterer
// if (value.age >= 23) {
//   return true;
// } else {
//   return false;
// }
// console.log(value);
// );
// console.log(eligibleEmployee);

// reduce- if we want our array value into single value like taking average or sum...
// const marks = [10, 14, 19];
// const sum = marks.reduce(function (prev, curr, idx, array) {
//   console.log("prev:" + prev + "current value:" + curr);
//   return prev + curr;
//   // console.log(idx);
// });
// console.log(sum);

// // eg-2
// const employees = [
//   {
//     name: "abc",
//     age: 20,
//     post: "frontend",
//     salary: 1000,
//   },
//   {
//     name: "x",
//     age: 200,
//     post: "backend",
//     salary: 1000,
//   },
//   {
//     name: "y",
//     age: 30,
//     post: "frontend",
//     salary: 1000,
//   },
// ];
// totalSalary = employees.reduce((prev, curr) => {
//   return { salary: prev.salary + curr.salary };
// });
// console.log(totalSalary);

/**SORt  depends on its ASCII order*/
const fruit = ["apple", "strawbeery"];
console.log(fruit.sort());
const numbers = [1, 245, 33, 35653];
// console.log(numbers.sort());
// sort();
// sort(function(){

// })
// means overloaaded-more preferred is second one

// const sortedNumber = numbers.sort((a, b) => {
//   if (a > b) return 1;
//   else return -1;
// });
// console.log(sortedNumber);

// const employees = [
//   {
//     name: "abc",
//     age: 20,
//     post: "frontend",
//     salary: 1000,
//   },
//   {
//     name: "x",
//     age: 200,
//     post: "backend",
//     salary: 1000,
//   },
//   {
//     name: "y",
//     age: 30,
//     post: "frontend",
//     salary: 1000,
//   },
// ];

// forEach()-allows us to execture callback function on every element of an array.
// const num = [1, 2, 3, 4];
// num.forEach(function (value, index, array) {
//   console.log(value + "" + index);
// });

// map()- returns a mapped value after allowing to transforms data

const num = [1, 3, 4, , 5, 5];
const mapperNumbers = num.map(function (value, index, array) {
  return value * 4;
});
console.log(mapperNumbers);

const user = [
  {
    name: "a",
    position: "tester",
  },
  {
    name: "a",
    position: "worker",
  },
  {
    name: "a",
    position: "accountant",
  },
];
const mappedUser = user.map(function (value, index, array) {
  // return `i used to work as a :${value.position}`;
  return "i have a job in" + value.position;
});
console.log(mappedUser);

// filter()- this returns either true or false if condition is satisfied returns true else false

const agess = [1, 34, 33, 12, 45];
const filteredAgees = agess.filter(function (value, index, array) {
  if (value >= 20) {
    return true;
  } else {
    return false;
  }
});
console.log(filteredAgees);

// const employees = [
//   {
//     name: "abc",
//     age: 20,
//     post: "frontend",
//     salary: 1000,
//   },
//   {
//     name: "x",
//     age: 200,
//     post: "backend",
//     salary: 1000,
//   },
//   {
//     name: "y",
//     age: 30,
//     post: "frontend",
//     salary: 1000,
//   },
// ];
// const filtereddEmplyooe = employees.filter(function (value, index, array) {
//   if (value.age > 23) {
//     return true;
//   } else return false;
// });
// console.log(filtereddEmplyooe);

// reduce()- for getting single value;
const array3 = [2, 4, 5, 666, 777, 777];
const reducedArray = array3.reduce(function (prev, curr, index, array) {
  console.log("prev:" + prev + "curr:" + curr);
  return prev + curr;
});
console.log(reducedArray);

const employees = [
  {
    name: "abc",
    age: 20,
    post: "frontend",
    salary: 1000,
  },
  {
    name: "x",
    age: 200,
    post: "backend",
    salary: 1000,
  },
  {
    name: "y",
    age: 30,
    post: "frontend",
    salary: 1000,
  },
];
const reduucedEmploy = employees.reduce((prev, cur, index, array) => {
  return { salary: prev.salary + cur.salary };
});
console.log(reduucedEmploy);
// hellooo
// sort- for ascending and descending order
const array1 = [2, 4, 5, 4444, 3333, 200];
const sortedArray = array1.sort((a, b) => {
  return a < b ? 1 : -1;
});
console.log(sortedArray);
const fruits4 = ["Apple", "Orange", "Mango"];
// console.log(fruits4.indexOf("Apple") + 1);
console.log(fruits4.indexOf("Apple") + 2);

// find--returns the first element in the provided array that satisfies provided the testing function

const arra = [5, 12, 25, 4, 130, 24];
const result = arra.find((element) => (element > 102 ? true : false));
console.log(result);

const str = "Mathematics";
console.log(str.lastIndexOf("Mat"));
