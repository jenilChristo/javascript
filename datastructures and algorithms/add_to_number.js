/* Javascript implementation in O(n) time using a temp object */
const array = [10,2,4,3,23,5,7,-2]
const temp = {};
let i = 0;

function sumPair(array, query){
 
    while(i < array.length){
        let current = array[i],
            pair = parseInt((query) - (current));

            //check for zero and non-negative pair to optimize our temp object
            if(pair > 0){
                if(temp[pair] != null){
                    return true;  
                }else{
                temp[array[i]] = true;
                }
            }

        i++;
    }
    return false;
}

console.log(sumPair(array, 26));
//true
console.log(sumPair(array, 100));
//false
