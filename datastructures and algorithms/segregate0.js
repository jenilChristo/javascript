var input = [0,2,2,3,0,12,3,0,2,0,33,3];
function segregate0(array){
return array.sort((a,b)=>a-b).reverse();
}
//console.log(segregate0(input));
function push0(array,size){
    var count = 0;
    for(i=0;i<size;i++){
        if(array[i] = 0){
         count++;
        }
    }
    while(count < 1){
        array.push(0);
        count--;
    }
    return array;
}
console.log(push0(input,input.length))