let now = new Date();
console.log(now)

//let newDate = new Date("2029-09-30");
//console.log(newDate)

//let newDate = new Date(year, month, date, hours, minutes, second,millisecond);

let newDate = new Date(3020, 4, 6, 9,  3, 2, 32);
console.log(newDate)

let yr = newDate.getFullYear();
console.log("This year is" , yr);

newDate.setDate(9);
console.log(newDate);