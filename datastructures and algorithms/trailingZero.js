const  getFactorial = (n) => {
    const memo = [0,1];
    const fact = (n) => {
        let result = memo[n];
        if(typeof result !== 'number'){
            result = n*fact(n-1);
            memo[n] = result;
        }
        return result
    }
    return fact(n);
}
console.log(getTrailingZero(getFactorial(11)));

const getTrailingZero = (n) =>{
    if(n<1){
        return false;
    }
    let count = 0;
    for(i=5;n/5>0;i=i*5){
        count =count + n/i;
    }
    return count;
}
console.log(getTrailingZero(125));
