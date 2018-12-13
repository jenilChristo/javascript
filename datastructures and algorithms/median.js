/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var getMergedArray = mergeSort(nums1,nums2);
    if(getMergedArray.length < 1){
        return getMergedArray[0];
    }
    else if(getMergedArray.length % 2 != 0){
        //when length is odd pick up the middle one as median
        return getMergedArray[Math.round(getMergedArray.length/2)-1];
    }
    else if(getMergedArray.length % 2 == 0){
        //when length is even pick up the average of middle and middle+1 as median
        var average = (getMergedArray[(getMergedArray.length/2)-1] + getMergedArray[(getMergedArray.length/2)])/2;
        return  average;
    }

};

var mergeSort = function(left,right){
    var indexLeft = 0,indexRight = 0, result = [];
    
    while(indexLeft<left.length && indexRight<right.length){
        if(left[indexLeft] < right[indexRight]){
            result.push(left[indexLeft]);
            indexLeft++;
        }
        else{
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

console.log(findMedianSortedArrays([1,3],[2]) );