// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ? {
//                 value: names[nextIndex++],
//                 done: false
//             } : {
//                 done: true
//             }
//         }
//     }
// }

// const namesArr = ['Jack', 'Jill', 'John'];

// //init iterator and pass the array

// const names = nameIterator(namesArr);

// console.log(names.next(), names.next(), names.next(), names.next())

// function* sayNames() {
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// const name = sayNames();
// console.log(name.next(), name.next(), name.next(), name.next());

// function* createIds() {
//     let index = 0;
//     while (true) {
//         yield index++;
//     }
// }

// const gen = createIds();

// console.log(gen.next(), gen.next(), gen.next(), gen.next());

// Create a symbol;

const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1, sym2, typeof sym2);

console.log(Symbol('123') == Symbol('123'));


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

nums.forEach(each => {
    console.log(`${each} Symbol = ${String(Symbol())}`)
})

//Unique object keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');
const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key2 = 'prop3';
console.log(myObj);

// Symbols are not enumerable in for in loop
for (let i in myObj) {
    console.log(`${i} : ${myObj[i]}`);
}

//Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: "value" }));
console.log({
    [Symbol('sym1')]: "value"
});

//destructuring from arrays and object

let a, b;
[a, b] = [100, 200];

//rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500, 600];
console.log(a, b, rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 500 })
console.log(a, b, rest);

//Array Destructuring

//const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;


//Parse array returned from function

// function getPeople() {
//     return ['John', 'Beth', 'Mike'];
// }

// let [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);

//Object destructuring

const person = {
    name: 'John Doe',
    age: 23,
    city: 'Miami',
    gender: 'male',
    sayHello: () => {
        console.log('saying hello');
    }
}

//Old es5

// const name = person.name,
//     age = person.age;

//new es6 destructuring

const { name, age, city, sayHello } = person;
console.log(name, age, city)
sayHello();

// Maps key value pairs

const map1 = new Map();
//set keys
const key1 = 'some string',
    key2 = {},
    key3 = function() {};

map1.set(key1, 'va,ueof key 1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key 3');

console.log(map1.get(key3), map1.get(key1), map1.get(key2));

//count values
console.log(map1.size);

//Iterating through maps
//using for of to get keys and values
for (let [key, value] of map1) {
    console.log(`${key} = ${value}`);
}

// Iterate for keys
for (let key of map1.keys()) {
    console.log(`key = ${key}`);
}

// Iterate for values
for (let value of map1.values()) {
    console.log(`value = ${value}`);
}

//for each can be use on map.keys() and map.values()


//convert maps to array

const keyValArr = Array.from(map1);
console.log(keyValArr);

// create an array of values
const valArr = Array.from(map1.values());
console.log(valArr);

// create an array of values
const keyArr = Array.from(map1.keys());
console.log(keyArr);

//SETS - store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);

const set2 = new Set([1, 2, 3, 4, 5]);

console.log(set2, set1.size);

console.log(set2.has(3), set2.has(2 + 3));

// false as reference type does not work
console.log(set1.has({ name: 'John' }));

//will be false
console.log({ name: 'John' } === { name: 'John' });

//Delete from set
set1.delete(100);

for (let item of set1) {
    console.log(item);
}

// set.keys() set.values() set.entries() all are same
set1.forEach((value) => {
    console.log(value);
})

//convert set to array
const setArr = Array.from(set1);
console.log(setArr);