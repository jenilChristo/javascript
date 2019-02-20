function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    const messArr = String(S).split(' ');
    // [this, is, an, sms, that, needs, character, limit]
    const stack = [];
    //base case
    if(S < K){
        return 1;
    }

    let prev = 0, prevValue = '';
    messArr.reduce(function(accumulator, currentValue, currentIndex, array) {
        if(currentValue.toString().length == K) {
            queue.push(currentValue.toString());
        }
        else{
            return accumulator+" "+currentValue;
        }

        
    });
 
}

console.log(solution("this is an sms that needs character limit", 8));