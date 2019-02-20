function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let startIndex = separteNegative(A);
    console.log(startIndex);
    
}
function separteNegative(arr){
    let i = 0, j=0;
    while(i< arr.length){
        if(arr[i] < 0){
            let temp;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
        i++;
    }
    return arr.splice(j);
}
console.log(solution([1,-2,-4,4,2,6,7,-8]))