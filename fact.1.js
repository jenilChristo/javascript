// const factorial =  (n) => {
//     const memo = [0, 1];
//         const fact =  (n) => {
//             let result = memo[n];
//             if (typeof result !== 'number') {
//             result = n*fact(n - 1);
//             memo[n] = result;
//             }
//             console.log(memo.toString())
//             return result;
//         };
// return fact(n); 
// };
// console.log(factorial(1));

// function getPrime(start, end) {
 
//     var bools = [];
//     var primes = [];
  
//     for (var i = start; i <= end; i++) { bools.push(true); } 
  
  
//     for (var i = start; i <= end; i++) {
//       if (bools[i-2]) {
//         for (var j = i*2; j <= end; j += i) {
//           bools[j-2] = false;    
//         }
//       }
//     }
  
//     for (var p = start; p <= bools.length; p++) {
//       if (bools[p]) { primes.push(p+2); }
//     }
//     if(primes.length>0){return primes}else{return [0]}
   
  
//   } 
//   primeNums = getPrime(5, 7);
  
//   function getNextPrime(n){
//       console.log(primeNums[primeNums.indexOf(n)+1])
//       return primeNums[primeNums.indexOf(n)+1];
//   }
//   function conclude(start, end){
//       if(getNextPrime(start) == end){
//           return start+"->"+end;
//       }else if(getNextPrime(start) != end){
//           let difference = end-start;
//           if(primeNums.indexOf(difference) > -1){
//               return start+"->"+difference+"->"+end;
//           }else{
//               return "Unlucky Benny";
//           }
//       }
//   }
  
//   console.log(conclude(5,7))
function factorial(n) {
    return facRec(n, 1);
}
function facRec(x, acc) {
    if (x <= 1) {
        return acc;
    } else {
        return facRec(x-1, x*acc); // (A)
    }
}
console.log(factorial(15000))