let a = [1,2,3];

let b = JSON.parse(JSON.stringify(a));

b[1] = 0;



console.log(a);
console.log(b);
 