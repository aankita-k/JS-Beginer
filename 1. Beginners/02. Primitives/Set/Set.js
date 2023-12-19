const mySet = new Set();
console.log("The set is looks like:", mySet);

mySet.add('This');
mySet.add('3');
mySet.add('7');
mySet.add('That');

console.log("The set is looks like:", mySet);
console.log(mySet.size);

console.log("Before removal", mySet);
mySet.delete('7')

console.log("After removal", mySet);


