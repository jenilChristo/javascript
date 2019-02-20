function maxSubArray(array){
    var maxValue = array[0];
    var minValue = array[0];
    var maxProduct = array[0];
    for(i=0;i<array.length;i++){
        if(array[i]<0){
            var temp = maxValue;
            maxValue = minValue;
            minValue = temp;
        }
        maxValue = Math.max(array[i], maxValue*array[i]);
        minValue = Math.min(array[i], minValue*array[i]);
        maxProduct = Math.max(maxProduct,maxValue);
    }
    return maxProduct;
}
console.log(maxSubArray([-1,23,87,445]))