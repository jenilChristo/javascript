// function calculator(num1,num2,operation){
//     switch(operation){
//         case "add":
//         return num1+num2;
//         break;
//         case "multiply":
//         return num1*num2;
//         break;
//         case "divide":
//         return num1/num2;
//         break;
//         case "subtract":
//         return num1-num2;
//     }
// }

//callback style 

let calculate  = (num1,num2,callback) => {
    let i = 0;
for (i=0;i<10;i++){
    console.log(i)
}
while(i<15){
    console.log("whilst"+i);
    i++;
}
return callback(num1,num2);
}

let multiply = (num1,num2) => {
    return num1*num2;
}

console.log(calculate(23,2,multiply));