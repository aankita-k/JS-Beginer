//let x = Math.random(); // 0 -1
//console.log(x);

//let x = Math.floor(Math.random() * 10);
//console.log(x);

function getRandom(min,max){
    let x = Math.floor(Math.random() * (min - max)) + min;
    return x;
}

console.log(getRandom(10, 20));