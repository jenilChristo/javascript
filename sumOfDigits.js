function sumOfDigits(x)
{
     sum = 0;
    while (x != 0)
    {
        sum += x %10;
        x   = x /10;
    }
    return sum;
}
function sumOfDigitsRec(x)
{
  return x==0 ? 0: Math.floor(x%10+sumOfDigitsRec(x/10));
}
console.log(sumOfDigitsRec(2233) )
function countDigit(n){
    let count = 0;
    while(n != 0){
        n=Math.floor(n/10);
        ++count;
    }
    return count;
}
console.log(countDigit(22))