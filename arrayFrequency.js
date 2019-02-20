
class Frequency{
    constructor(array,query){
        this.array = array;
        this.query = query;
    }
    get Frequency(){
        return this.countFrequency();
    }
    isSorted(arr){
       if(Array.isArray(this.array)) {
        let i = 0;
        while(i < arr.length){
            if(arr[i] < arr[i+1] ){
                i++;
                continue;
            }else{
                break;
            }
        }
        return (i == arr.length-1) ? true:false;
       }
       else{
           return false;
       }
    }
    hasOnlyNumbers(arr){
        return !(/[a-zA-Z]/.test(arr.toString()));
    }
    mergeSortedHalves(left,right){
        let leftIndex = 0, rightIndex = 0,result = [];

        while(leftIndex < left.length && rightIndex < right.length){
            if(left[leftIndex] < right[rightIndex]){
                result.push(left[leftIndex]);
                leftIndex++;
            }else{
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        while(leftIndex  < left.length){
            result.push(left[leftIndex]);
            leftIndex++;
        }
        while(rightIndex  < right.length){
            result.push(right[rightIndex]);
            rightIndex++;
        }
        return result;
    }
    mergeSort(arr){
        if(arr.length < 2){
            return arr;
        } 
        let mid = Math.floor(arr.length/2);
        return this.mergeSortedHalves( this.mergeSort(arr.slice(0, mid)), this.mergeSort(arr.slice(mid,arr.length)) );
    }
   first(arr,start,end,query){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] == query && arr[mid-1] < query){ // 3,3,3,4 => 3
            return mid;
        }else if(query <= arr[mid]){
            return this.first(arr, 0, mid-1, query);
        }else{
            return this.first(arr, mid+1, end, query);
        }
    }
    last(arr,start,end,query){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] == query && arr[mid+1] > query){
            return mid;
        }else if(query >= arr[mid]){
            return this.last(arr, mid+1, end, query);
        }else{
            return this.last(arr, 0, mid-1, query);
        }
    }
    countFrequency(){
        let isSortedArray = this.isSorted(this.array);
        if(!isSortedArray && this.array.length>1  && this.hasOnlyNumbers(this.array)){
            this.array = this.mergeSort(this.array);
            console.log(this.array.toString())
            let firstIndex = this.first(this.array, 0, this.array.length-1, this.query);
            let lastIndex = this.last(this.array, 0, this.array.length-1, this.query);
            return Math.floor(lastIndex-firstIndex+1);
        }
        else{
            return 0;
        }
    }
}
//O(n) solution
class FrequencyLinear{
    constructor(array,query){
        this.array = array;
        this.query = query;
    }
    get Frequency(){
        return this.countFrequency();
    }
    countFrequency(){
        let i = 0,count =0;
        while(i < this.array.length){
            if(this.array[i] == this.query){
                count++;
            }
            i++;
        }
        return count;
    }
}
let fr = new Frequency([2,1,2,2,32,43,23,32,3,2,4,5,34,2,2,4,5,5,3,3,2,22,2,5], 3);
console.log(fr.Frequency);
i=0;
while(i < ar.length){
    if(ar[i] == 3 || a){
        count++;
    }
    i++;
}

const array = [2,1,2,2,32,43,23,32,3,2,4,5,34,2,2,4,5,5,3,3,2,22,2,5] ;
const mid = Math.floor(array.length/2);
let i = 0,j=mid, count=0, loop = 0;
while(i < mid && j < array.length){
    loop++;
    if(array[i] == 2){

    }
    if(array[j] == 2){
        count++;
    }
    i++;
    j++;
}
console.log(count,loop)

    
