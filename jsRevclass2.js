//OPERATORS AND COMPARISONS

/*let a = 10;
let b = "10";
console.log(a==b);                  //true
console.log(a===b);                 //false
console.log(a+5);                   //15
console.log(a>10 && b<20);*/          //false

/*let marks = 75;
if(marks>=90){
    console.log("Grade A");
}
else if(marks<75 && marks>60){
    console.log("Grade B");
}
else{
    console.log("Grade C");
}
*/

/*for(let i=1;i<=5;i++){
    console.log(i);
}*/

/*let a = 10;
while(a<=15){
    console.log(a);
    a++;
}*/

/*function add(x,y){
    return x+y;
}
console.log(add(2,5));

function multiply(x,y,z){
    return x*y*z;
}
console.log(multiply(3,2,5));
*/

/*const greet = (name = "Guest") => `hello, ${name}!`;
console.log(greet());*/

const numbers = [1,2,3,4,5];

const doubled = numbers.map(n => n*2);
const even = numbers.filter(n => n%2==0);
const sum = numbers.reduce((total,n) => total+n,0);

console.log(doubled);
console.log(even);
console.log(sum);