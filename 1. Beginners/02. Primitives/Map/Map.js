const myMap = new Map();

const key1 = 'myfile', key2 = 'red', key3 = function(){};

myMap.set(key1, 'This is myfile');
myMap.set(key2, 'This is red');
myMap.set(key3, 'This is an empty function');

console.log(myMap);

let vaule1 = myMap.get(key3);
console.log(vaule1);

for(let [key, value]of myMap){
    console.log(key, value);
}
