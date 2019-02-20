// //given function compose(a, b, c), return the result of

// a(b(c(d(e()))));



// function sum(a){
//     return function(b){
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }

// var res = sum(a)(b)(c)


// //compose([a, b, c])(1)
const func1 = function(a){
    return a+1;
}
const func2 = function(a){
    return a*2;
}
const func3 = function(a){
    return a*3;
}

function compose(...list){ 
    list = list.reverse();
    const executeFn =  (fn, input) => {
        return fn.call(this, input);
    }

    const getName = function(input){
        let i = 0;
        let output;
        while(i < list.length){
            if(list.length - 1  == 0){
                return executeFn(list[i], input);
            }else if(i != list.length-1){
                if(i==0 ){
                output = executeFn(list[i], input);
                }
                output = executeFn(list[i+1], output);
                i++;
            }
            else{
                return output;
            }
        }
    }

    return getName;
}

function composeReverse(...list){
    const executeFn = (fn, input) => {
        return fn.call(this, input);
    }
    const getName = function(input){
        let i = input.length-1;
        let output;
        while(i > -1 ){
            if(i == input.length-1){
                return executeFn(list[i], input);
            }else if(i != 0){
                output = executeFn(list[i-1], output);
                i--;
            }else{
                return output;
            }
        }
    }
    return getName;
}


console.log(compose(func1, func2, func3)(2));