let array_1 = [43,34,23,54,88,36,88];
let array_2 = [32,98,56,88,23,65,45,46,78];

let array_1 = [1,3,4,7,8];
let array_2 = [3,5,7,8,10,12];
let i = 0,j=0,results = [];
while(i < array_1.length && j<array_2.length){
    if(array_1[i] < array_2[j]){
        i++;
    }
    else if(array_2[j] < array_1[i]){
        j++;
    }
    else{
        results.push(array_1[i]);
        i++;
        j++;
    }
}

