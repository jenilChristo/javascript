function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var number = N;
    var binary = '';
    var counter = -1;
    var max = 0;
    while(number > 0) {
        var digit = number % 2;
        
        if(digit === 1) {
            if(counter > max) {
                max = counter;
            }
            counter = 0;
        } else if(counter >= 0) {
            counter++;
        }
        
        binary = '' + digit + binary;
        number = parseInt(number / 2);
    }
    
    //console.log('number, binary:', number, binary);
    
    return max;
}

// 100100100
function solution1(n){
    const binary = parseInt(n, 10).toString(2);

    let i = binary.length, currentGap = 0, biggestGap = 0;
    while(i--){
       let current = binary.charAt(i);

       if(current == 0){
        currentGap++;
       }
       else{
         if(currentGap > biggestGap) {
            biggestGap = currentGap;
            currentGap = 0;
         }
       }
    }

    return biggestGap;
}
console.log(solution(20));