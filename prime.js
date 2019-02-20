const divisor = function(){
    const memo = {};
    return (n) =>{
        if(memo[n] !== undefined) return memo[n];

        for(let i=1;i<n;i++){
            if(n%i == 0 && Array.isArray(memo[n])){
                memo[n].push(i)
            }else if(n%i == 0){
                memo[n] = [];
                memo[n].push(i);
            }
        }
        return memo[n].toString();
    }
}
const getDivisor = divisor();
// console.log(getDivisor(50));

function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes.map(x=>x*x);
}
console.log(primeFactorsTo(20));


// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});
function prime(arr){
    
}
function main(input) {
    const test = input.split('\n')[0];
    const inp = input.split('\n');
    let i = 1;
    while(i <= test){
        let array = inp[i].split(' ');
        process.stdout.write(prime(array).toString());
        i++;
    }

}
function prime(arr)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= arr[0]; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= arr[0]; j += i) 
            {
                store[j] = true;
            }
        }
    }
    let count = 0;
    
    
    for(let k=arr[1]; k<= arr[2]; k++ ){
        let l=0;
        while( l < primes.length){
            if(k%primes[l] == 0){
                count++;
                break;
            }
            l++;
        }
    }
    return count;
}


