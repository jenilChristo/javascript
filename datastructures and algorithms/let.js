function Car(model,year) {
this.year = year;
this.getCarInfo = () =>{ 
    return `This car is made in ${this.year}`
}
}
 var myCar = new Car("swift",1999);
console.log(myCar.getCarInfo())

var hanoi = function(disc,src,aux,des){
    if(disc>0){
        hanoi(disc-1,src,des,aux);
        console.log(`Move Disc ${disc} from ${src} to ${des}`);
        hanoi(disc-1,aux,src,des);
    }
}
hanoi(2,"Src","Aux","Des")

const factorial = (i,a)=>{
    a = a || 2;
    if(i<=2){
        return a;
    }
    return factorial(i-1,a*i);
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(4));

var fibonacci = function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(11))

const fibonacci =  (n) => {
    const memo = [0, 1];
        const fib =  (n) => {
            let result = memo[n];
            if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
            }
            return result;
        };
return fib(100); 
};
console.log(fibonacci(236))

function hoist(val){
    if(val>1){
        action = "Code";
        let scope = 'private'
    }else{
        action = "Sleep";
    }
    console.log(scope)
    return action;
    var action;
}
console.log(hoist(2))
class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); //Polygon
