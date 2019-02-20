//given two arrays that are not sorted,merge them into single sorted array
function mergeSortedHalves(left,right){
    console.log(left+"-------"+right);
    let indexLeft=0,indexRight=0,result = [];
    while(indexLeft < left.length && indexRight < right.length){
        if(left[indexLeft] < right[indexRight]){
            result.push(left[indexLeft]);
            indexLeft++;
        }else{
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    while(indexLeft < left.length){
        result.push(left[indexLeft]);
        indexLeft++;
    }
    while(indexRight < right.length){
        result.push(right[indexRight]);
        indexRight++;
    }
    return result;
}
function mergeSort(array){
if(array.length < 2){
return array; //base case
}
let mid =Math.floor(array.length/2);
 return mergeSortedHalves( 
    mergeSort(array.slice(0,mid)),
    mergeSort(array.slice(mid,array.length))
 );
    

}
   

console.log(mergeSort([4,5,21,35,1,2,0,22,55,44,20]));